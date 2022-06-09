import {NextPage} from "next";
import {IPagePropsMarkdown, ISiteConfigs} from "../types/data.types";

import {markdownDataUtils} from "../utils/data-utils/utils.data.local-md";
import {defaultTemplateName} from "../configs/defaults";
import {logosTemplates} from "../configs/templates";
import {LogosHead} from "../components/LogosHead";

const siteConfigs: ISiteConfigs = require("../public/compiled/config.json");

const DefaultPage: NextPage<IPagePropsMarkdown> = ({markdown, navProps}) => {
    const component = logosTemplates[siteConfigs.template||defaultTemplateName];
    return component({
        markdown,
        children: <LogosHead data={navProps}/>
    });
}

//`getStaticPaths` & `getStaticProps` are built-in functions in NextJs and are required for static routes generation
export const getStaticPaths = markdownDataUtils.getStaticPaths();
export const getStaticProps = markdownDataUtils.getStaticProps<IPagePropsMarkdown>();

export default DefaultPage