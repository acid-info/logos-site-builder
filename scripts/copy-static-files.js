const {extname, join} = require("path");
const {existsSync, fsp} = require("fs");
const {readdir, rm, copyFile, mkdir} = require("fs/promises");

const {STATIC_CONTENT_DIR_TARGET,LOCAL_CONTENT_DIST, supportedStaticFilesExtension} = require("./configs");

module.exports = async (siteConfig) => {
    const {static_assets_folder =  "static-assets"} = siteConfig;
    const staticSourceDir = join(LOCAL_CONTENT_DIST, static_assets_folder);

    if(!existsSync(staticSourceDir)){
        console.warn("Missing static folder: "+static_assets_folder)
        return;
    }

    if(existsSync(STATIC_CONTENT_DIR_TARGET)){
        await rm(STATIC_CONTENT_DIR_TARGET, { recursive: true, force: true});
    }

    await mkdir(STATIC_CONTENT_DIR_TARGET);

    const supportedFiles = await readdir(staticSourceDir).then((files) => files.filter(f => {
        const ext = extname(f);
        return supportedStaticFilesExtension.indexOf(ext.toLowerCase()) > -1;
    }))

    for await (const f of supportedFiles){
        console.log(f)
        await copyFile(join(staticSourceDir, f), join(STATIC_CONTENT_DIR_TARGET, f));
    }
}