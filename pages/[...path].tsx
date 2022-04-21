import {NextPage} from "next";

import {DefaultTemplate_Markdown} from "../templates/DefaultTemplate";
import {IPagePropsMarkdown} from "../types/data.types";

import {markdownDataUtils} from "../utils/data-utils/utils.data.local-md";
import {DOCS_DIR_NAME} from "../configs/defaults";

const DefaultPage: NextPage<IPagePropsMarkdown> = ({markdown}) => {
    return (
        <DefaultTemplate_Markdown markdown={markdown}>
            <div style={{
                background: "gray",
                width: "100%",
                height: "75vh"
            }}>VIDEO</div>
        </DefaultTemplate_Markdown>
    )
}

//`getStaticPaths` & `getStaticProps` are built-in functions in NextJs and are required for static routes generation
export const getStaticPaths = markdownDataUtils.getStaticPaths();
export const getStaticProps = markdownDataUtils.getStaticProps<IPagePropsMarkdown>();

export default DefaultPage