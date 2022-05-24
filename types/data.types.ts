import {ParsedUrlQuery} from "querystring";
import {LogosTheme} from "./theme.types";
import Theme = LogosTheme.Theme;

export interface IMarkdown<D>{
    content: string;
    metadata: D & {[key: string]: any}
    toc: IMarkdownTocItem[];
}

export interface IPagePropsMarkdown{
    markdown: IMarkdown<any>;
    routeParams: IRouteParamForLocalFolder
}

export interface IMarkdownTocItem{
    content: string;
    slug: string;
    lvl: number;
    i: number
}

export interface IRouteParamForLocalFolder extends ParsedUrlQuery{
    path: string[]
}


export interface INavigationItemProps{
    localPath: string;
    path: string[];
    title: string;
    children: INavigationItemProps[]
}

export interface ISitemap{
    items: INavigationItemProps[];
}

export enum ESiteTemplateNames{
    DEFAULT="default"
}

export interface ISiteConfigs{
    theme: Theme;
    template: ESiteTemplateNames;
    assets: {
        logo: string
    }
    navigation: {
        home: string;
    }
}