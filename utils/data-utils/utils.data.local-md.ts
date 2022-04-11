import type {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next/types";
import glob from "fast-glob";
import {sep, basename, join} from "path";
import slugify from "@sindresorhus/slugify";
import preval from 'next-plugin-preval';

import {INavigationItemProps, IPagePropsMarkdown, IRouteParamsMarkdown} from "../../types/data.types";

import {readFileSync} from "fs";
import matter from "gray-matter";
import {ISidebarPropsBase} from "../../types/ui.types";


export const markdownFileToNavLinkProps = (dirname: string, filepath: string): INavigationItemProps => ({
    path: mdFilePathToSlugPath(dirname, filepath),
    title: basename(filepath, ".md")
});

const mdFilePathToSlugPath = (dirname: string, p: string): string[] => {
    const cleanP = p.replace(dirname, "").replace(".md", "");
    return cleanP.split(sep).slice(1).map(s => slugify(s));
}

const getStaticPathsFromFolder = async(dirname: string): Promise<GetStaticPathsResult<IRouteParamsMarkdown>> => {
    const files = await glob(`${dirname}/**/*.md`);
    return {
        paths: files.map(f => ({
            params: markdownFileToNavLinkProps(dirname, f)
        })),
        fallback: false
    }
}

export const getStaticPropsFromFolder = async (dir: string, context: GetStaticPropsContext<IRouteParamsMarkdown, IPagePropsMarkdown>): Promise<GetStaticPropsResult<IPagePropsMarkdown>> => {
    const params = context.params!
    const rawMD = readFileSync(join(dir,params.path.join(sep))+".md", 'utf-8');
    const {data: metadata, content} = matter(rawMD);

    return {
        props: {
            markdown: {content, metadata},
            routeParams: params
        },
    };
}

async function getData(dirname: string): Promise<ISidebarPropsBase> {
    const files = await glob(`${dirname}/**/*.md`);
    return { items: files.map(f => markdownFileToNavLinkProps(dirname, f))}
}

export const markdownDataUtils = {
    getStaticPaths: getStaticPathsFromFolder,
    getStaticProps: getStaticPropsFromFolder,
}

export const getSidebarData = (dirname: string) => preval(getData(dirname));