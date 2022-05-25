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

export interface ITemplateUiConfig{
    searchResultSnippedTextLengthPre: number;
    searchResultSnippedTextLengthPost: number;
}

export interface ITemplateUiConfigs{
    [ESiteTemplateNames.DEFAULT]: ITemplateUiConfig;
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

export interface ISiteConfigs{
    ds_id: ELogosDesignSystemID;
    theme: Theme;
    template: ESiteTemplateNames;
    navigation: {
        home: string;
        homeTitle: string;
    }
    seo: {
        title: string;
        description: string;
        image: string;
        url: string;
        social_media: ISiteSeoSocialMedia[]
    }
}