const download = require("download-git-repo");
const {readdirSync, statSync, readFileSync} = require("fs");
const {readFile} = require("fs").promises;
const {extname, relative, sep, basename, join} = require("path");
const matter = require("gray-matter");
const slug = require("url-slug");

const {siteConfigs: {navigation}} = require("./configs");


const downloadRepo = (url, dist) => {
    return new Promise((resolve, reject) => {
        download(`direct:${url}`, dist, {}, (err) => {
            if(err){
                return reject(err)
            }
            return resolve();
        })
    })
}

class TreeNodeMarkdown {
    title;
    localPath;
    path;
    children;
    constructor(path, rootPath) {
        this.localPath = relative(rootPath, path);
        // this.localPath = path;
        this.path = this.localPath.replace(".md", "").split(sep).map((s) => slug(s))
        this.children = [];
        this.title = basename(path, ".md");
    }

    async attachMetadata(rootPath){
        const localPathAbs = join(rootPath, this.localPath);
        const rawMD = await readFile(localPathAbs, 'utf-8');
        const {data: metadata = {}} = matter(rawMD);
        if(metadata.title){
            this.title = metadata.title
        }
    }
}

async function buildSitemapForMarkdownDirectory(rootPath) {
    const ALLOWED_EXTENSIONS = ['.md']
    const root = new TreeNodeMarkdown(rootPath, rootPath);
    let flatmap = [];

    const stack = [root];

    while (stack.length) {
        const currentNode = stack.pop();

        if (currentNode) {
            const currentNodeLocalPathAbs = join(rootPath, currentNode.localPath)
            const children = readdirSync(currentNodeLocalPathAbs);

            for await (let child of children) {
                const childPath = join(currentNodeLocalPathAbs, child);
                const childNode = new TreeNodeMarkdown(childPath, rootPath);

                const isDirectory = statSync(join(rootPath, childNode.localPath)).isDirectory();
                const extension = extname(childNode.localPath);
                const isAllowed = ALLOWED_EXTENSIONS.includes(extension);

                if (isAllowed) {
                    await childNode.attachMetadata(rootPath);
                    //sorting already
                    if(childNode.localPath===navigation.home){
                        currentNode.children.unshift(childNode);
                    }else{
                        currentNode.children.push(childNode);
                    }
                    currentNode.children.sort((a,b) => b.title.localeCompare(a.title));
                    flatmap.push(childNode);
                }

                if (isDirectory) {
                    currentNode.children.push(childNode);
                    stack.push(childNode);
                }
            }
        }
    }

    if(navigation.home && typeof navigation.home === "string"){
        const homeNodeIndex = flatmap.findIndex(n => n.localPath === navigation.home);
        if (homeNodeIndex>-1){
            flatmap[homeNodeIndex].path = [];
        }
    }

    return {treemap: root, flatmap};
}

module.exports= {
    downloadRepo,
    buildSitemapForMarkdownDirectory
}