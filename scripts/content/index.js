//@ts-ignore
const path = require("path");
const {writeFileSync, existsSync} = require("fs");
const fsp = require('fs').promises;
const {downloadRepo, buildTreeForMarkdownDirectory} = require("../utils");
const {join} = path

const {COMPILED_DIR, siteConfigs: {content}} = require("../configs");


async function walk(dir) {
    let files = await fsp.readdir(dir);
    files = await Promise.all(files.map(async file => {
        const filePath = join(dir, file);
        const stats = await fsp.stat(filePath);
        if (stats.isDirectory()) return walk(filePath);
        else if(stats.isFile()) return filePath;
    }));

    return files.reduce((all, folderContents) => all.concat(folderContents), []);
}

(async () => {
    let sitemap = [];

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
        sitemap = await buildTreeForMarkdownDirectory(content.dist);
    }catch (e){
        console.log("Error building tree sitemap");
        console.log(e);
    }

    writeFileSync(join(COMPILED_DIR, "sidebar.json"), JSON.stringify(sitemap, null, 2));
    writeFileSync(join(COMPILED_DIR, "sidebar.min.json"), JSON.stringify(sitemap));
})()

module.exports = {}