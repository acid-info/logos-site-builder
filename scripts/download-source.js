const {existsSync} = require("fs");
const fsp = require('fs').promises;
const {downloadSource} = require("./utils");

const {LOCAL_CONTENT_DIST, SITE_CONFIG_JSON_PATH_SOURCE} = require("./configs");
const {CONTENT_SOURCE_URL, CONTENT_SOURCE_TYPE} = process.env;

module.exports = async () => {
    if(CONTENT_SOURCE_TYPE !== "git"){
        return new Error("Not supported content source: " + CONTENT_SOURCE_TYPE);
    }

    if(!CONTENT_SOURCE_URL){
        return new Error("Env var CONTENT_SOURCE_URL is missing");
    }

    try{
        if(existsSync(LOCAL_CONTENT_DIST)){
            await fsp.rm(LOCAL_CONTENT_DIST, { recursive: true, force: true});
        }
        await fsp.mkdir(LOCAL_CONTENT_DIST);
        await downloadSource(CONTENT_SOURCE_URL, LOCAL_CONTENT_DIST);
    }catch (e){
        console.log("Error downloading content from source, ", CONTENT_SOURCE_URL);
        console.error(e);
    }

    return JSON.parse(await fsp.readFile(SITE_CONFIG_JSON_PATH_SOURCE, "utf8"));
}