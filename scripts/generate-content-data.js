const {join}  = require("path");
const {writeFileSync, existsSync} = require("fs");

const {buildSitemapForMarkdownDirectory, walkDir} = require("./utils");

const {COMPILED_DIR, LOCAL_CONTENT_DIST} = require("./configs");

module.exports = async (siteConfigs) => {
    try{

        //ensuring tha index.md for each directory exists
        await walkDir(LOCAL_CONTENT_DIST, (f) => {
            if(!f.startsWith("_")){
                const indexMD = join(f, "index.md");
                if(!existsSync(indexMD)){
                    writeFileSync(indexMD, "", "utf8");
                }
            }
        })

        let {treemap, flatmap} = await buildSitemapForMarkdownDirectory(LOCAL_CONTENT_DIST, siteConfigs);
        writeFileSync(join(COMPILED_DIR, "sidebar.tree.json"), JSON.stringify(treemap, null, 2));
        writeFileSync(join(COMPILED_DIR, "sidebar.tree.min.json"), JSON.stringify(treemap));
        writeFileSync(join(COMPILED_DIR, "sidebar.flat.json"), JSON.stringify(flatmap, null, 2));
        writeFileSync(join(COMPILED_DIR, "sidebar.flat.min.json"), JSON.stringify(flatmap));
    }catch (e){
        console.log("Error building tree sitemap");
        console.log(e);
    }
}
