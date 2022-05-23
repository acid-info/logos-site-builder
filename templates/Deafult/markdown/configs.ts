export const logosCustomMarkdownLanguages = {
    default: "logos",
    ascii: "logos-ascii",
    paragraph: "logos-paragraph"
}

export const hljsLangClassnames = Object.values(logosCustomMarkdownLanguages).map(c => `language-${c}`);