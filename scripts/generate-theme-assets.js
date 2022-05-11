const {join} = require("path");
const {copyFileSync} = require("fs");
const {COMPILED_DIR, siteConfigs} = require("./configs");

const LOGO_PATH = join(COMPILED_DIR, "logo.svg");

(async() => {
    const {assets: {logo}} = siteConfigs;
    copyFileSync(join(process.cwd(), logo), LOGO_PATH);
})();