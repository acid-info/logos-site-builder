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

export const hljsLangClassnames = Object.values(logosCustomMarkdownLanguages).map(c => `language-${c}`);