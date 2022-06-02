const downloadGit = require("download-git-repo");
const {readdirSync, statSync, existsSync} = require("fs");
const {tmpdir} = require("os");
const {readFile, mkdtemp, rm, readdir, stat} = require("fs").promises;
const {extname, relative, sep, basename, join} = require("path");
const matter = require("gray-matter");
const slug = require("url-slug");
const {copy} = require("fs-extra");
const {LOCAL_CONTENT_DIST} = require("./configs");

const isValidSourceUrl = (url) => !(!url || typeof url !== "string" || !url.endsWith(".zip"));

const downloadRepo = (url, dist) => {
    if (!isValidSourceUrl(url)) {
        return Promise.reject(`Invalid url for remote source: ${url}`);
    }
    return new Promise((resolve, reject) => {
        downloadGit(`direct:${url}`, dist, {}, (err) => {
            if(err){
                return reject(err)
            }
            return resolve();
        })
    })
}



const downloadSource = async (url, dist) => {
    return downloadRepo(url, dist)
}


const downloadExternalSource = async (url, sourceSubFolderPath = null, targetSubFolderName = null) => {
    let tmpDir;
    try {
        if(sourceSubFolderPath){
            tmpDir = await mkdtemp(tmpdir());
            await downloadRepo(url, tmpDir);
            const folderPath = join(tmpDir, sourceSubFolderPath);

            if(!existsSync(folderPath)){
                throw new Error(`Error: downloading external source; Could not find ${sourceSubFolderPath} in ${url}`);
            }

            const folderPathDist = join(LOCAL_CONTENT_DIST, targetSubFolderName||sourceSubFolderPath);
            await copy(folderPath, folderPathDist);
        }else{
            const name = targetSubFolderName || url.split("/")[4];
            const folderPathDist = join(LOCAL_CONTENT_DIST, name);
            await downloadRepo(url, folderPathDist);
        }
    } catch (e) {
        console.log(e);
    } finally {
        try {
            if (tmpDir) {
                console.log("removing");
                await rm(tmpDir, {recursive: true, force: true});
            }
        } catch (e) {
            console.error(`An error has occurred while removing the temp folder at ${tmpDir}. Please remove it manually. Error: ${e}`);
        }
    }

}

class TreeNodeMarkdown {
    title;
    navOrder = -1;
    localPath;
    path;
    children;
    isDir;
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

    setOrder(orderIndex){
        if(orderIndex===-1){
            this.navOrder = -1;
        }else{
            this.navOrder = 9999-orderIndex;
        }
    }
}

async function walkDir(dir, cb = () => {}) {
    let files = await readdir(dir);
    return await Promise.all(files.map(async file => {
        const filePath = join(dir, file);
        const stats = await stat(filePath);
        if (stats.isDirectory()) {
            cb(filePath)
            return walkDir(filePath);
        }
        // else if(stats.isFile()) return filePath;
    }));
    // return files.reduce((all, folderContents) => all.concat(folderContents), []);
}

async function buildSitemapForMarkdownDirectory(rootPath, siteConfigs) {
    const {navigation = {}, static_assets_folder} = siteConfigs;
    const {fileOrdersInSidenav = [], folderOrdersInSidenav = []} = navigation;

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
                childNode.isDir = statSync(join(rootPath, childNode.localPath)).isDirectory();
                const extension = extname(childNode.localPath);
                const isAllowed = ALLOWED_EXTENSIONS.includes(extension) && basename(childNode.localPath, extension).toLowerCase() !== "readme";

                if (isAllowed) {
                    await childNode.attachMetadata(rootPath);

                    if(childNode.localPath.endsWith("index.md")){
                        currentNode.title = childNode.title!=="index"? childNode.title :  currentNode.title;
                        currentNode.localPath = childNode.localPath;
                        flatmap.push({
                            ...currentNode,
                            children: []
                        });
                    }else{
                        currentNode.children.push(childNode);
                        flatmap.push(childNode);
                        childNode.setOrder(fileOrdersInSidenav.indexOf(childNode.localPath))
                    }
                }

                if (
                    childNode.isDir
                    && !childNode.localPath.startsWith(".")
                    && childNode.localPath!==static_assets_folder
                ) {
                    currentNode.children.push(childNode);
                    childNode.setOrder(folderOrdersInSidenav.indexOf(childNode.localPath))
                    stack.push(childNode);
                }

                currentNode.children.sort((a,b) => b.navOrder - a.navOrder);
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
    downloadSource,
    downloadExternalSource,
    buildSitemapForMarkdownDirectory,
    isValidSourceUrl,
    walkDir
}