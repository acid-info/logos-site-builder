//@ts-ignore
const path = require("path");
const {writeFileSync, existsSync} = require("fs");
const fsp = require('fs').promises;
const {downloadRepo, buildTreeForMarkdownDirectory} = require("../utils");
const {join} = path

const {COMPILED_DIR, siteConfigs: {content}} = require("../configs");

(async () => {
    if(content.type === "git"){
        try{
            if(existsSync(content.dist)){
                await fsp.rm(content.dist, { recursive: true, force: true});
            }
            await fsp.mkdir(content.dist);
            await downloadRepo(content.source, content.dist);
        }catch (e){
            console.log("Error downloading content from source, ", content.source);
            console.error(e);
        }
    }

    try{
        const {treemap, flatmap} = await buildTreeForMarkdownDirectory(content.dist);
        writeFileSync(join(COMPILED_DIR, "sidebar.tree.json"), JSON.stringify(treemap, null, 2));
        writeFileSync(join(COMPILED_DIR, "sidebar.tree.min.json"), JSON.stringify(treemap));
        writeFileSync(join(COMPILED_DIR, "sidebar.flat.json"), JSON.stringify(flatmap, null, 2));
        writeFileSync(join(COMPILED_DIR, "sidebar.flat.min.json"), JSON.stringify(flatmap));
    }catch (e){
        console.log("Error building tree sitemap");
        console.log(e);
    }
})()

module.exports = {}