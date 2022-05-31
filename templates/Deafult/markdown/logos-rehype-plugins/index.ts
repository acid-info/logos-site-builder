import {PluggableList} from "react-markdown/lib/react-markdown";
import rehypeSlug from 'rehype-slug'
import rehypeLogos from "./rehype-logos-customized-blocks";

export const logosRehypePlugins: PluggableList = [
    rehypeSlug,
    rehypeLogos
]