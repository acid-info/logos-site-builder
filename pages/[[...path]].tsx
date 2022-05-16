import {NextPage} from "next";

import {DefaultTemplate_Markdown} from "../templates/Deafult/DefaultTemplate";
import {IPagePropsMarkdown} from "../types/data.types";

import {markdownDataUtils} from "../utils/data-utils/utils.data.local-md";

const DefaultPage: NextPage<IPagePropsMarkdown> = ({markdown}) => {
    return (
        <DefaultTemplate_Markdown markdown={markdown}/>
    )
}

//`getStaticPaths` & `getStaticProps` are built-in functions in NextJs and are required for static routes generation
export const getStaticPaths = markdownDataUtils.getStaticPaths();
export const getStaticProps = markdownDataUtils.getStaticProps<IPagePropsMarkdown>();

export default DefaultPage