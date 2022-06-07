import {PluggableList} from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm'
// import remarkMath from "remark-math";


export const logosRemarkPlugins: PluggableList = [
    remarkGfm,
    // remarkMath
]