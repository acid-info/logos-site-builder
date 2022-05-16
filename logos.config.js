const {basename, join, sep, relative} = require("path");

module.exports = {
    theme: {
        palettes:{
            dark: {
                background: "#000000",
                text: "#FFFFFF",
                highlight: "#7187FF"
            },
            light: {
                background: "#FFFFFF",
                text: "#000000",
                highlight: "#7187FF"
            }
        },
        fontFamily: "monospace",
    },
    assets: {
        logo: "public/assets/logos-logo.svg"
    },
    content: {
        type: "git",
        source: "https://github.com/acid-info/content-example-repo-markdown/archive/refs/heads/master.zip",
        dist: join(process.cwd(), "docs")
    },
    navigation: {
        //if set custom pages/index.tsx will be ignored!
        home: "index.md"
    }
}