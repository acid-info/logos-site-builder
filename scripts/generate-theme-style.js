const {join} = require("path");
const {writeFileSync} = require("fs");

const {COMPILED_DIR} = require("./configs");
const THEME_STYLE_PATH = join(COMPILED_DIR, "theme.css");

module.exports = async (siteConfigs) => {
    const {theme: {palettes, fontFamily, codeTheme = "github-dark.css"}} = siteConfigs;
    const css = `
        :root{
            --dark-background-color: ${palettes.dark.background};
            --dark-text-color: ${palettes.dark.text};
            --dark-accent-active-color: ${palettes.dark.accentActive};
            --dark-accent-mute-color: ${palettes.dark.accentMute};
            --light-background-color: ${palettes.light.background};
            --light-text-color: ${palettes.light.text};
            --light-accent-active-color: ${palettes.light.accentActive};
            --light-accent-mute-color: ${palettes.light.accentMute};
            --fontFamily: ${fontFamily}
        }
    `.trim();
    writeFileSync(THEME_STYLE_PATH, css, "utf8");
}