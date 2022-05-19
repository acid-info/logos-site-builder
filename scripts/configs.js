const {join} = require("path");
const configs = require("../logos.config");
const COMPILED_DIR = join(process.cwd(), "public/compiled");
const STATIC_CONTENT_FILES_DIR = join(process.cwd(), "public/static-content");

const supportedStaticFilesExtension = [
    ".jpg", ".jpeg", ".png", ".gif",
    ".pdf"
];

module.exports = {
    COMPILED_DIR,
    STATIC_CONTENT_FILES_DIR,
    siteConfigs: configs,
    supportedStaticFilesExtension
}