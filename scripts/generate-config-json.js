const {join} = require("path");
const {writeFileSync} = require("fs");
const {COMPILED_DIR, siteConfigs} = require("./configs");

const CONFIG_JSON_PATH = join(COMPILED_DIR, "configs.json");

(async() => {
    writeFileSync(CONFIG_JSON_PATH, JSON.stringify(siteConfigs), "utf8");
})();