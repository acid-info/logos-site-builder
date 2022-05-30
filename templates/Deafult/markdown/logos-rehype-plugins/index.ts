import rehypeHighlight from "rehype-highlight";
import {logosCustomLangForHljs} from "./logos-rehype-hljs-language";
import {PluggableList} from "react-markdown/lib/react-markdown";
import rehypeSlug from 'rehype-slug'

export const logosRehypePlugins: PluggableList = [
    [rehypeHighlight, {languages: [logosCustomLangForHljs]}],
    rehypeSlug,
    // [rehypeAutolinkHeadings, {behavior: "append"}]
]