import {NextPage} from "next";
import {IPagePropsMarkdown, ISiteConfigs} from "../types/data.types";

import {markdownDataUtils} from "../utils/data-utils/utils.data.local-md";
import {defaultTemplateName} from "../configs/defaults";
import {logosTemplates} from "../configs/templates";
const siteConfigs: ISiteConfigs = require("../public/compiled/config.json");

const DefaultPage: NextPage<IPagePropsMarkdown> = ({markdown}) => {
    const component = logosTemplates[siteConfigs.template||defaultTemplateName];
    return component({markdown});
}

//`getStaticPaths` & `getStaticProps` are built-in functions in NextJs and are required for static routes generation
export const getStaticPaths = markdownDataUtils.getStaticPaths();
export const getStaticProps = markdownDataUtils.getStaticProps<IPagePropsMarkdown>();

export default DefaultPage