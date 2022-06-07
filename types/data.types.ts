import {ParsedUrlQuery} from "querystring";
import {LogosTheme} from "./theme.types";
import Theme = LogosTheme.Theme;

export interface ILogosMarkdownMetadataBase{
    title?:string;
    date?: string;
    categories?: string;
    author?: string
    summary?: string;
}

export interface IMarkdown<D>{
    content: string;
    metadata: D & {[key: string]: any}
    toc: IMarkdownTocItem[];
}

export interface IPagePropsMarkdown{
    markdown: IMarkdown<ILogosMarkdownMetadataBase>;
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
    isDir: boolean;
    metadata: ILogosMarkdownMetadataBase;
    children: INavigationItemProps[]
}

export interface ISitemap{
    items: INavigationItemProps[];
}

export enum ESiteTemplateNames{
    DEFAULT="default",
    ACADEMIA="academia"
}

export interface ITemplateUiConfig{
    searchResultSnippedTextLengthPre: number;
    searchResultSnippedTextLengthPost: number;
}

export type ITemplateUiConfigs = {
    [key in ESiteTemplateNames]: ITemplateUiConfig;
}

export enum ELogosDesignSystemID{
    LOGOS="logos",
    LOGOS_BLOCKCHAIN="logos_blockchain",
    VAC="vac",
    WAKU="waku",
    CODEX="codex"
}

export interface ISiteSeoSocialMedia{
    handler: string;
    provider: string;
}


export interface ISiteConfigExternalLink{
    text: string;
    url: string;
    category: string;
}

export interface ISiteConfigs{
    ds_id: ELogosDesignSystemID;
    theme: Theme;
    template: ESiteTemplateNames;
    navigation: {
        home: string;
        fileOrdersInSidenav: string[],
        folderOrdersInSidenav: string[],
        external_links: ISiteConfigExternalLink[];
    }
    seo: {
        title: string;
        description: string;
        image: string;
        url: string;
        social_media: ISiteSeoSocialMedia[]
        cc?: string
    }
}