const {basename, join, sep, relative} = require("path");
const {readFileSync, writeFileSync} = require("fs");

const configs = require("../logos.config");

const COMPILED_DIR = join(process.cwd(), "public/compiled");
const THEME_STYLE_PATH = join(COMPILED_DIR, "theme.css");

(async() => {
    const {theme: {palettes, fontFamily}} = configs;

    const css = `
        :root{
            --dark-background-color: ${palettes.dark.background};
            --dark-text-color: ${palettes.dark.text};
            --dark-highlight-color: ${palettes.dark.highlight};
            --light-background-color: ${palettes.light.background};
            --light-text-color: ${palettes.light.text};
            --light-highlight-color: ${palettes.light.highlight};
            --fontFamily: ${fontFamily}
        }
    `.trim();

    writeFileSync(THEME_STYLE_PATH, css, "utf8");
})();