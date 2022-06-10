const {existsSync} = require("fs");
const fsp = require('fs').promises;
const {downloadSource} = require("./utils");
const {copy} = require("fs-extra");

const {LOCAL_CONTENT_DIST, SITE_CONFIG_JSON_PATH_SOURCE} = require("./configs");
const {CONTENT_SOURCE_URL, CONTENT_SOURCE_TYPE} = process.env;

const supportedSourceTypes = [
    "git",
    "local_folder"
];

module.exports = async () => {

    if(supportedSourceTypes.indexOf(CONTENT_SOURCE_TYPE)===-1){
        return new Error("Not supported content source: " + CONTENT_SOURCE_TYPE);
    }

    if(!CONTENT_SOURCE_URL){
        return new Error("Env var CONTENT_SOURCE_URL is missing");
    }

    if(CONTENT_SOURCE_TYPE==="git"){
        try{
            if(existsSync(LOCAL_CONTENT_DIST)){
                await fsp.rm(LOCAL_CONTENT_DIST, { recursive: true, force: true});
            }
            console.log("CONTENT_SOURCE_URL", CONTENT_SOURCE_URL, LOCAL_CONTENT_DIST);
            await fsp.mkdir(LOCAL_CONTENT_DIST);
            await downloadSource(CONTENT_SOURCE_URL, LOCAL_CONTENT_DIST);
        }catch (e){
            console.log("Error downloading content from source, ", CONTENT_SOURCE_URL);
            console.error(e);
        }
    }

    if(CONTENT_SOURCE_TYPE==="local_folder"){
        try{
            if(existsSync(LOCAL_CONTENT_DIST)){
                await fsp.rm(LOCAL_CONTENT_DIST, { recursive: true, force: true});
            }
            await fsp.mkdir(LOCAL_CONTENT_DIST);
            await copy(CONTENT_SOURCE_URL, LOCAL_CONTENT_DIST);
        }catch (e){
            console.log("Error downloading content from source, ", CONTENT_SOURCE_URL);
            console.error(e);
        }
    }

    return JSON.parse(await fsp.readFile(SITE_CONFIG_JSON_PATH_SOURCE, "utf8"));
}