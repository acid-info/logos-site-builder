const {join, dirname, sep, basename}  = require("path");
const {existsSync} = require("fs");
const {writeFile} = require("fs/promises");
const glob = require("fast-glob");

const {LOCAL_DATA_PATH, DATA_PATH_DIST} = require("./configs");
const {readMarkdown} = require("./utils");
const slug = require("url-slug");

module.exports = async (siteConfigs) => {

    if(!existsSync(LOCAL_DATA_PATH)) return;

    try{
        const files = await glob(`${LOCAL_DATA_PATH}/**`);
        let folders = {};

        for await (const filePath of files){
            const relPath = filePath.replace(LOCAL_DATA_PATH, "");
            let filename = basename(relPath);
            let folder = dirname(relPath).split(sep).pop();
            const md = await readMarkdown(filePath);

            if(folder.trim().length === 0){
                folder = "index";
            }

            if(folders[folder]){
                folders[folder].push({...md, filename});
            }else{
                folders[folder] = [{...md, filename}];
            }
        }

        for await (const [folderName, data]  of Object.entries(folders)){
            await writeFile(join(DATA_PATH_DIST, `${slug(folderName)}.min.json`), JSON.stringify(data));
        }

    }catch (e){
        console.log("Error building tree sitemap");
        console.log(e);
    }
}