import {NextPage} from "next";

import {DefaultTemplate_Markdown} from "../templates/DefaultTemplate";
import {IPagePropsMarkdown} from "../types/data.types";

import {markdownDataUtils} from "../utils/data-utils/utils.data.local-md";
import {DOCS_DIR_NAME} from "../configs/defaults";

const DefaultPage: NextPage<IPagePropsMarkdown> = ({markdown}) => {
    return (
        <DefaultTemplate_Markdown markdown={markdown}>
            <div>VIDEO</div>
        </DefaultTemplate_Markdown>
    )
}

//`getStaticPaths` & `getStaticProps` are built-in functions in NextJs and are required for static routes generation
export const getStaticPaths = markdownDataUtils.getStaticPaths(DOCS_DIR_NAME);
export const getStaticProps = markdownDataUtils.getStaticProps<IPagePropsMarkdown>(DOCS_DIR_NAME);

export default DefaultPage