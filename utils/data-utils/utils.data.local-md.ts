import type {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData} from "next/types";
import {INavigationItemProps, IRouteParamForLocalFolder, ISiteConfigs} from "../../types/data.types";
import {readFileSync} from "fs";
import {join} from "path";
import matter from "gray-matter";
const toc = require('markdown-toc');
import removeMarkdown from "markdown-to-text";
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
            return (
                //if the path of children is inside the directory
                !!c.path.find((p) => navProps.path.indexOf(p) > -1)
                &&
                //it is not the index file of the dir
                c.localPath!==navProps.localPath
            )
        });
        content += children.map((c) => `* [${c.metadata.title}](${c.path.join("/")})`).join(`\n`);
    }

    return {
        props: {
            markdown: {
                content,
                metadata: JSON.parse(JSON.stringify(metadata)),
                toc: _toc
            },
            routeParams: params
        }
    };
}

export const markdownDataUtils = {
    getStaticPaths: getStaticPathsFromFolder,
    getStaticProps: getStaticPropsFromFolder
}