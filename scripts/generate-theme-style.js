const {join} = require("path");
const {writeFileSync} = require("fs");

const {COMPILED_DIR} = require("./configs");
const THEME_STYLE_PATH = join(COMPILED_DIR, "theme.css");

module.exports = async (siteConfigs) => {
    const {theme: {palettes, fontFamily, codeTheme = "github-dark.css"}} = siteConfigs;

    const css = `
        @import "highlight.js/styles/${codeTheme}";
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
}