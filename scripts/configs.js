const {join} = require("path");

const LOCAL_CONTENT_DIST = join(process.cwd(), "docs");
const COMPILED_DIR = join(process.cwd(), "public/compiled");
const STATIC_CONTENT_DIR_TARGET = join(process.cwd(), "public/compiled-assets");
const SITE_CONFIG_JSON_PATH_SOURCE = join(LOCAL_CONTENT_DIST, "config.json");
const CONFIG_JSON_TARGET_PATH = join(COMPILED_DIR, "config.json");
const CODE_BLOCK_STYLE_PATH = join(COMPILED_DIR, "codeblock-style.json");


const DEFAULT_THEME_LOGO = join(process.cwd(), "public/assets/logos-logo.svg");

const supportedStaticFilesExtension = [
    ".jpg", ".jpeg", ".png", ".gif",
    ".pdf"
];

module.exports = {
    COMPILED_DIR,
    STATIC_CONTENT_DIR_TARGET,
    LOCAL_CONTENT_DIST,
    SITE_CONFIG_JSON_PATH_SOURCE,
    supportedStaticFilesExtension,
    CONFIG_JSON_TARGET_PATH,
    DEFAULT_THEME_LOGO,
    CODE_BLOCK_STYLE_PATH
}