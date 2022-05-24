const {writeFileSync} = require("fs");
const {CONFIG_JSON_TARGET_PATH, COMPILED_DIR} = require("./configs");
const {join} = require("path");
const {readFile} = require("fs/promises");

module.exports = async (siteConfigs) => {
    if(siteConfigs.navigation.home){
        const pages = JSON.parse(await readFile(join(COMPILED_DIR, "sidebar.flat.min.json"), "utf8"));
        const home = pages.find(p => p.localPath === siteConfigs.navigation.home);
        if(home){
            siteConfigs = {
                ...siteConfigs,
                navigation: {
                    ...siteConfigs.navigation,
                    homeTitle: home.title
                }
            }
        }
    }

    writeFileSync(CONFIG_JSON_TARGET_PATH, JSON.stringify(siteConfigs), "utf8");
}