import type {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, PreviewData} from "next/types";
import {INavigationItemProps, IRouteParamForLocalFolder, ISiteConfigs} from "../../types/data.types";
import {readFileSync} from "fs";
import {join} from "path";
import matter from "gray-matter";
// const toc = require('markdown-toc');

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
    const {data: metadata, content} = matter(rawMD);
    // const _toc = toc(content).json

    return {
        props: {
            markdown: {content, metadata},
            routeParams: params
        }
    };
}

export const markdownDataUtils = {
    getStaticPaths: getStaticPathsFromFolder,
    getStaticProps: getStaticPropsFromFolder
}