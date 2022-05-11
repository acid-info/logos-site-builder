const {join} = require("path");
const {writeFileSync} = require("fs");
const {COMPILED_DIR, siteConfigs} = require("./configs");

const THEME_STYLE_PATH = join(COMPILED_DIR, "theme.css");

(async() => {
    const {theme: {palettes, fontFamily}} = siteConfigs;

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