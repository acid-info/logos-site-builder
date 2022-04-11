import {ParsedUrlQuery} from "querystring";

export interface IMarkdown<D>{
    content: string;
    metadata: D & {[key: string]: any}
}

export interface IRouteParamsMarkdown extends ParsedUrlQuery {
    path: string[];
    title: string;
}

export interface IPagePropsMarkdown{
    markdown: IMarkdown<any>;
    routeParams: IRouteParamsMarkdown
}

export interface INavigationItemProps extends ParsedUrlQuery{
    path: string[];
    title: string;
}