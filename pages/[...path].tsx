import {GetStaticPaths, GetStaticProps, NextPage} from "next";

import {DefaultTemplate_Markdown} from "../templates/DefaultTemplate";
import {IPagePropsMarkdown, IRouteParamsMarkdown} from "../types/data.types";

import {markdownDataUtils} from "../utils/data-utils/utils.data.local-md";
import {DOCS_DIR_NAME} from "../configs/defaults";

const DefaultPage: NextPage<IPagePropsMarkdown> = ({markdown}) => {
    return (
        <DefaultTemplate_Markdown markdown={markdown}>
            <div>VIDEO</div>
        </DefaultTemplate_Markdown>
    )
}

export const getStaticPaths: GetStaticPaths<IRouteParamsMarkdown> = async () => {
    return markdownDataUtils.getStaticPaths(DOCS_DIR_NAME);
}

export const getStaticProps: GetStaticProps<IPagePropsMarkdown, IRouteParamsMarkdown, any> = async (context) => {
    return markdownDataUtils.getStaticProps(DOCS_DIR_NAME, context);
}

export default DefaultPage