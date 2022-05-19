import rehypeHighlight from "rehype-highlight";
import {logosCustomLangForHljs} from "./logos-rehype-hljs-language";
import {PluggableList} from "react-markdown/lib/react-markdown";

export const logosRehypePlugins: PluggableList = [
    [rehypeHighlight, {languages: [logosCustomLangForHljs]}],
]