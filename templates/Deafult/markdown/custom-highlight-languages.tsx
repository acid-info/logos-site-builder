//TODO
//extend and make it with dynamic pattern
//https://highlightjs.readthedocs.io/en/latest/language-guide.html
import {logosCustomMarkdownLanguages} from "./configs";

export const paragraphLanguage = (hljs) => {
    return {
        name: logosCustomMarkdownLanguages.default,
        aliases: Object.values(logosCustomMarkdownLanguages),
        disableAutodetect: true
    };
}