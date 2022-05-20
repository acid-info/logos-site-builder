const {extname, join} = require("path");
const {existsSync} = require("fs");
const {readdir, rm, copyFile, mkdir} = require("fs/promises");

const {STATIC_CONTENT_DIR_TARGET, STATIC_CONTENT_DIR_SOURCE, supportedStaticFilesExtension} = require("./configs");

module.exports = async () => {
    if(!existsSync(STATIC_CONTENT_DIR_SOURCE)){
        console.warn("Missing static folder: "+STATIC_CONTENT_DIR_SOURCE)
        return;
    }

    if(existsSync(STATIC_CONTENT_DIR_TARGET)){
        await rm(STATIC_CONTENT_DIR_TARGET, { recursive: true, force: true});
    }

    await mkdir(STATIC_CONTENT_DIR_TARGET);

    const supportedFiles = await readdir(STATIC_CONTENT_DIR_SOURCE).then((files) => files.filter(f => {
        const ext = extname(f);
        return supportedStaticFilesExtension.indexOf(ext.toLowerCase()) > -1;
    }))

    for await (const f of supportedFiles){
        await copyFile(join(STATIC_CONTENT_DIR_SOURCE, f), join(STATIC_CONTENT_DIR_TARGET, f));
    }
}