const download = require("download-git-repo");
const {readdirSync, statSync, readFileSync} = require("fs");
const {readFile} = require("fs").promises;
const {extname, relative, sep, basename} = require("path");
const matter = require("gray-matter");
const slug = require("url-slug");

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
    localPath;
    children;
    title;
    path;
    constructor(path, rootPath) {
        const relPath = relative(rootPath, path);
        this.localPath = path;
        this.children = [];
        this.path = relPath.replace(".md", "").split(sep).map((s) => slug(s))
    }
    async attachMetadata(){
        const rawMD = await readFile(this.localPath, 'utf-8');
        const {data: metadata = {}} = matter(rawMD);
        this.title = metadata.title || basename(this.localPath, ".md")
    }
}

async function buildTreeForMarkdownDirectory(rootPath) {
    const ALLOWED_EXTENSIONS = ['.md']
    const root = new TreeNodeMarkdown(rootPath, rootPath);

    const stack = [root];

    while (stack.length) {
        const currentNode = stack.pop();

        if (currentNode) {
            const children = readdirSync(currentNode.localPath);

            for await (let child of children) {
                const childPath = `${currentNode.localPath}/${child}`;
                const childNode = new TreeNodeMarkdown(childPath, rootPath);

                const isDirectory = statSync(childNode.localPath).isDirectory();
                const extension = extname(childNode.localPath);
                const isAllowed = ALLOWED_EXTENSIONS.includes(extension);

                if (isAllowed) {
                    currentNode.children.push(childNode);
                    await childNode.attachMetadata();
                }

                if (isDirectory) {
                    currentNode.children.push(childNode);
                    stack.push(childNode);
                }
            }
        }
    }

    return root;
}

module.exports= {
    downloadRepo,
    buildTreeForMarkdownDirectory
}