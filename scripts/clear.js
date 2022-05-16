const fsp = require('fs').promises;
const {existsSync} = require("fs");
const {COMPILED_DIR} = require("./configs");

(async() => {
    if(!existsSync(COMPILED_DIR)){
        await fsp.mkdir(COMPILED_DIR);
    }
})();
