export const logosCustomMarkdownLanguages = {
    default: "logos",
    diagram: "logos-diagram",
    paragraph: "logos-paragraph"
}

export const hljsLangClassnames = Object.values(logosCustomMarkdownLanguages).map(c => `language-${c}`);