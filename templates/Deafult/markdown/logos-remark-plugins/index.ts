import {PluggableList} from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm'

export const logosRemarkPlugins: PluggableList = [
    remarkGfm
]