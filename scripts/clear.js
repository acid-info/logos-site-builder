require('dotenv').config();
const fsp = require('fs').promises;
const {existsSync} = require("fs");
const {COMPILED_DIR, STATIC_CONTENT_DIR_TARGET} = require("./configs");

(async() => {
    if(!existsSync(COMPILED_DIR)){
        await fsp.mkdir(COMPILED_DIR);
    }
    if(!existsSync(STATIC_CONTENT_DIR_TARGET)){
        await fsp.mkdir(STATIC_CONTENT_DIR_TARGET);
    }
})();
