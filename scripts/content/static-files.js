const {extname, join} = require("path");
const {existsSync, fsp} = require("fs");
const {STATIC_CONTENT_FILES_DIR, siteConfigs, supportedStaticFilesExtension} = require("../configs");
const {readdir, rm, copyFile, mkdir} = require("fs/promises");

(async() => {
    if(existsSync(STATIC_CONTENT_FILES_DIR)){
        await rm(STATIC_CONTENT_FILES_DIR, { recursive: true, force: true});
    }

    await mkdir(STATIC_CONTENT_FILES_DIR);

    const {content: {staticDir}} = siteConfigs;
    const supportedFiles = await readdir(staticDir).then((files) => files.filter(f => {
        const ext = extname(f);
        return supportedStaticFilesExtension.indexOf(ext.toLowerCase()) > -1;
    }))

    for await (const f of supportedFiles){
        await copyFile(join(staticDir, f), join(STATIC_CONTENT_FILES_DIR, f));
    }
})();