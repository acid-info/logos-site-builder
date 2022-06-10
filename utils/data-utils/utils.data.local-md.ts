import type {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData} from "next/types";
import {
    ILogosAuthor,
    INavigationItemProps,
    IRouteParamForLocalFolder,
    ISiteConfigs,
    TLogosPublicDataEntry
} from "../../types/data.types";
import {readFileSync} from "fs";
import {join, dirname} from "path";
import matter from "gray-matter";
const toc = require('markdown-toc');
import removeMarkdown from "markdown-to-text";
import {readFile} from "fs/promises";
const slug = require("url-slug");

const sidebar: INavigationItemProps[] = require("../../public/compiled/sidebar.flat.json");

const getStaticPathsFromFolder = () => async(): Promise<GetStaticPathsResult<IRouteParamForLocalFolder>> => {
    const paths = sidebar.map(({path}: INavigationItemProps) => ({params: {path}}))
    paths.push({
        params: {
            path: [],
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getCompiledData = async <D>(endpoint: string): Promise<D> => {
    return JSON.parse(await readFile(join(process.cwd(), `public/compiled/data/${endpoint}`), "utf-8"));
}

export const getStaticPropsFromFolder = <O extends PreviewData>() => async(context: GetStaticPropsContext<IRouteParamForLocalFolder, O>): Promise<GetStaticPropsResult<any>> => {
    const params = context.params!
    const navProps = sidebar.find((item: INavigationItemProps) => item.path.join("") === (params.path||[]).join(""));

    if(!navProps){
        return {
            notFound: true,
        }
    }

    const rawMD = readFileSync(join(process.cwd(), "docs", navProps.localPath), 'utf-8');
    let {data: metadata, content} = matter(rawMD);
    const _toc = toc(content).json.map((t: any) => {
        const content = removeMarkdown(t.content);
        const _slug = slug(content);
        return {
            ...t,
            content,
            slug: _slug
        }
    })

    if(navProps.isDir){
        const children = sidebar.filter((c) => {
            const _dir = dirname(navProps.localPath);
            return (
                // c.localPath.startsWith(_dir)
                c.localPath!==navProps.localPath
                &&
                c.localPath.split("/").includes(_dir)
            )
        });

        content += children
            .sort((a, b) => b.navOrder - a.navOrder)
            .map((c) => {
                const {title} = c.metadata;
                const path = c.path.join("/");
                console.log(path)
                return `* [${title}](${path})`
            })
            .join(`\n`)
    }

    if(navProps.metadata.injects){
        for await (const endpoint of navProps.metadata.injects){
            //TODO make it universal working
            const data = await getCompiledData<TLogosPublicDataEntry<ILogosAuthor>[]>(`${endpoint}.min.json`);
            content += data
                .sort((a, b) =>
                    (b.metadata.author||"").charCodeAt(0) - (a.metadata.author||"").charCodeAt(0)
                )
                .map((c) => `* [${c.metadata.name}](authors/${c.metadata.short_name})`).join(`\n`);
        }
    }

    return {
        props: {
            markdown: {
                content,
                metadata: JSON.parse(JSON.stringify(metadata)),
                toc: _toc
            },
            navProps,
            routeParams: params
        }
    };
}

export const markdownDataUtils = {
    getStaticPaths: getStaticPathsFromFolder,
    getStaticProps: getStaticPropsFromFolder
}