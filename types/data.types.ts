import {ParsedUrlQuery} from "querystring";

export interface IMarkdown<D>{
    content: string;
    metadata: D & {[key: string]: any}
}

export interface IPagePropsMarkdown{
    markdown: IMarkdown<any>;
    routeParams: IRouteParamForLocalFolder
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