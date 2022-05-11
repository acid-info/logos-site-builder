const {join} = require("path");
const configs = require("../logos.config");
const COMPILED_DIR = join(process.cwd(), "public/compiled");

module.exports = {
    COMPILED_DIR,
    siteConfigs: configs
}
