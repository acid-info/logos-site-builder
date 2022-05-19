//TODO
//extend and make it with dynamic pattern
//https://highlightjs.readthedocs.io/en/latest/language-guide.html
import {LanguageFn} from "highlight.js";
import {logosCustomMarkdownLanguages} from "../configs";

export const logosCustomLangForHljs: LanguageFn = (_hljs) => {
    return {
        name: logosCustomMarkdownLanguages.default,
        aliases: Object.values(logosCustomMarkdownLanguages),
        disableAutodetect: true,
        contains: []
    };
}