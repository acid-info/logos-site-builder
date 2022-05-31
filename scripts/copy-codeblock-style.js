const {writeFile} = require("fs/promises");

const {CODE_BLOCK_STYLE_PATH} = require("./configs");

module.exports = async (siteConfig) => {
    const {theme: {codeTheme = "prism/cb"}} = siteConfig;
    try{
        const style = require(`react-syntax-highlighter/dist/cjs/styles/${codeTheme}.js`).default;
        await writeFile(CODE_BLOCK_STYLE_PATH, JSON.stringify(style));
    }catch (e){
        console.warn(`Could not read cod-block style at ${codeTheme}`);
    }

}