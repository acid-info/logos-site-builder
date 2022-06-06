const {join} = require("path");
const {existsSync} = require("fs");
const glob = require("fast-glob");
const {rm, mkdir, copy} = require('fs-extra')


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
    await copy(staticSourceDir, STATIC_CONTENT_DIR_TARGET);

    // console.log(`${staticSourceDir}/**/*.{${supportedStaticFilesExtension.join(",")}}`)
    // const supportedFiles = await glob(`${staticSourceDir}/**/*{${supportedStaticFilesExtension.join(",")}}`);
    // console.log("supportedFiles", supportedFiles, staticSourceDir);
    //
    // for await (const f of supportedFiles){
    //     console.log(f)
    //     const relPath = f.replace(staticSourceDir, "")
    //     console.log(relPath)
    //     await copyFile(f, join(STATIC_CONTENT_DIR_TARGET, relPath));
    // }
}