import {logosRehypePlugins} from "./logos-rehype-plugins";
import {logosRemarkPlugins} from "./logos-remark-plugins";
import {transformImageUri} from "./logos-react-md-transformers/image-uri";
import {logosReactMarkdownComponents} from "./components";
import {PluggableList, ReactMarkdownOptions} from "react-markdown/lib/react-markdown";
import {TransformImage} from "react-markdown/lib/ast-to-react";

export const logosCustomMarkdownLanguages = {
    default: "logos",
    ascii: "logos-ascii",
    paragraph: "logos-paragraph"
}


export enum ECustomBlockNames{
    ASCII="ascii",
    PARAGRAPH="paragraph",
    MERMAID="mermaid"
}

export const logosCustomBlockLanguages: Array<ECustomBlockNames> = [
    ECustomBlockNames.ASCII,
    ECustomBlockNames.PARAGRAPH,
    ECustomBlockNames.MERMAID
]

export interface IMarkdownConfig{
    rehypePlugins: PluggableList;
    remarkPlugins: PluggableList;
    transformImageUri: TransformImage
    logosReactMarkdownComponents: any;
}

export const markdownCommonConfigs: ReactMarkdownOptions = {
    rehypePlugins: logosRehypePlugins,
    remarkPlugins: logosRemarkPlugins,
    transformImageUri,
    components: logosReactMarkdownComponents,
    children: "",
}