import {logosRehypePlugins} from "./logos-rehype-plugins";
import {logosRemarkPlugins} from "./logos-remark-plugins";
import {transformImageUri} from "./logos-react-md-transformers/image-uri";
import {logosReactMarkdownComponents} from "./components";

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

export const markdownCommonConfigs = {
    rehypePlugins: logosRehypePlugins,
    remarkPlugins: logosRemarkPlugins,
    transformImageUri,
    logosReactMarkdownComponents
}