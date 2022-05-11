//@ts-ignore
const glob = require("fast-glob");
const {basename, join, sep, relative} = require("path");
const {readFileSync, writeFileSync} = require("fs");
const matter = require("gray-matter");
const slug = require('url-slug');

const configs = require("../../logos.config");

const COMPILED_DIR = join(process.cwd(), "public/compiled");


(async () => {
    const folder = process.env.NEXT_PUBLIC_LOCAL_CONTENT_FOLDER || "docs";
    const dir = join(process.cwd(), folder);
    const outputDir = join(process.cwd(), "public/data");
    let data = [];

    try {
        const files = await glob(`${dir}/**/*.md`);
        data = await Promise.all(
            files.map(async (localPath) => {
                const relPath = relative(dir, localPath);
                const rawMD = readFileSync(localPath, 'utf-8');
                const {data: metadata = {}} = matter(rawMD);
                return {
                    path: relPath.replace(".md", "").split(sep).map((s) => slug(s)),
                    localPath: join(folder, relPath),
                    title: metadata.title || basename(localPath, ".md")
                }
            })
        )
    } catch (e) {
        console.log(e);
    }

    writeFileSync(join(outputDir, "sidebar.json"), JSON.stringify(data, null, 2));
    writeFileSync(join(outputDir, "sidebar.min.json"), JSON.stringify(data));
})()

module.exports = {}