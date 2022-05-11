const {basename, join, sep, relative} = require("path");
const {copyFileSync} = require("fs");

const configs = require("../logos.config");

const COMPILED_DIR = join(process.cwd(), "public/compiled");
const LOGO_PATH = join(COMPILED_DIR, "logo.svg");

(async() => {
    const {assets: {logo}} = configs;
    copyFileSync(join(process.cwd(), logo), LOGO_PATH);
})();