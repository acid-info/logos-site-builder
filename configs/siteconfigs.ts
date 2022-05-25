import {INavigationItemProps, ISiteConfigs} from "../types/data.types";

const _siteConfig: ISiteConfigs = require("../public/compiled/config.json");
const _sitemapTree: INavigationItemProps = require("../public/compiled/sidebar.tree.min.json");
const _sitemapFlat: INavigationItemProps[] = require("../public/compiled/sidebar.flat.min.json");

export const siteConfig = _siteConfig;
export const sitemapTree = _sitemapTree;
export const sitemapFlat = _sitemapFlat;