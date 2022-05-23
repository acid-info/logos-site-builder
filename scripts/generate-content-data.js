const {join}  = require("path");
const {writeFileSync} = require("fs");

const {buildSitemapForMarkdownDirectory} = require("./utils");

const {COMPILED_DIR, LOCAL_CONTENT_DIST} = require("./configs");

module.exports = async (siteConfigs) => {
    try{
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