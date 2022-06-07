const {COMPILED_DIR, LOCAL_CONTENT_DIST} = require("./configs");
const {Index} = require("flexsearch");
const {join} = require("path");
const matter = require("gray-matter");
const {readFile, writeFile} = require("fs").promises;
const removeMarkdown = require("markdown-to-text").default;

function exportIndex(flexSearchIndex) {
    // https://github.com/nextapps-de/flexsearch/issues/299
    // https://github.com/nextapps-de/flexsearch/issues/274
    return new Promise((res, rej) => {
        let pkg = [];
        const expected = new Set([
            "reg",
            "reg.cfg",
            "reg.cfg.map",
            "reg.cfg.map.ctx"
        ]);
        const received = new Set();

        const setsEq = (a, b) => {
            if (a.size != b.size) {
                return false;
            }

            return Array.from(a).every(el => b.has(el));
        };

        flexSearchIndex.export((key, data) => {
            pkg.push([
                key
                    .toString()
                    .split(".")
                    .pop(),
                data
            ]);
            received.add(key);

            if (setsEq(expected, received)) {
                res(pkg);
            }
        });
    });
}

module.exports = async(siteConfig) => {
    const options = {
        tokenize: "forward",
        context: true
    };

    const index = new Index(options);
    let store = {};
    const pages = JSON.parse(await readFile(join(COMPILED_DIR, "sidebar.flat.min.json"), "utf8"));

    for await (const child of pages){
        let rawMD = await readFile(join(LOCAL_CONTENT_DIST, child.localPath), "utf8");
        let {data: metadata = {}, content} = matter(rawMD);
        content = content
            //remove ascii blocks
            .replace(/^```logos-ascii([\s\S]*?)```$/gm, "")
            //remove line breaks
            .replace(/(\r\n|\n|\r)/gm, "");

        let id = child.path.join("/");

        if(siteConfig.navigation.home && siteConfig.navigation.home===child.localPath){
            id = child.metadata.title;
        }

        //TODO this needs to be back to normal case
        // temp solution until flex search case in-sensitive works
        content = removeMarkdown(content).toLowerCase();
        store[id] = content;
        await index.addAsync(id, content);
    }

    const flex = {
        index: await exportIndex(index),
        store,
        options
    }

    await writeFile(join(COMPILED_DIR, "flexsearch.json"), JSON.stringify(flex, null, 2));
}