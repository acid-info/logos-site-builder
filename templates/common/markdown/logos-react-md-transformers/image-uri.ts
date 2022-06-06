import {TransformImage} from "react-markdown/lib/ast-to-react";

export const transformImageUri: TransformImage = (src, alt, title) => {
    return `/compiled-assets/${src.replace(/^\/|\/$/g, '')}`;
}