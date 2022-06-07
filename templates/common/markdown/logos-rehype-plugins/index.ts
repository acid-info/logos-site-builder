import {PluggableList} from "react-markdown/lib/react-markdown";
import rehypeSlug from 'rehype-slug'
import rehypeLogos from "./rehype-logos-customized-blocks";
import rehypeStringify from "rehype-stringify";
// import rehypeMathjax from 'rehype-mathjax'


const rehypeFigure = require("rehype-figure")

export const logosRehypePlugins: PluggableList = [
    rehypeSlug,
    rehypeLogos,
    rehypeFigure,
    // rehypeMathjax,
    rehypeStringify
]