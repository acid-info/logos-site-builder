import {TransformImage} from "react-markdown/lib/ast-to-react";

export const transformImageUri: TransformImage = (src, alt, title) => {
    const filename = src.split("/").pop();
    return `/static-content/${filename}`;
}