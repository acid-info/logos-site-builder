const {writeFileSync} = require("fs");
const {CONFIG_JSON_TARGET_PATH} = require("./configs");

module.exports = async (siteConfigs) => {
    writeFileSync(CONFIG_JSON_TARGET_PATH, JSON.stringify(siteConfigs), "utf8");
}