const {join} = require("path");
const {copyFileSync, existsSync} = require("fs");
const {COMPILED_DIR, LOCAL_CONTENT_DIST, DEFAULT_THEME_LOGO} = require("./configs");

module.exports = (siteConfigs) => {
    const {assets: {logo}} = siteConfigs;
    const logoPath = join(LOCAL_CONTENT_DIST, logo);

    if(existsSync(logoPath)){
        copyFileSync(logoPath, join(COMPILED_DIR, "logo.svg"));
    }else{
        console.warn("Could not find logo at: " + logo);
        console.warn("Using Logos default logo...");
        copyFileSync(DEFAULT_THEME_LOGO, join(COMPILED_DIR, "logo.svg"));
    }
}