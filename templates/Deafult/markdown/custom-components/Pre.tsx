import {CodeComponent} from "react-markdown/lib/ast-to-react";
import {ElementContent} from "hast";

export const CustomMarkdownPre: CodeComponent = ({node, inline, className, children, ..._props}) => {
    const nodeWithCodePlaintext: ElementContent | undefined = node.children.find((c) => (
        c
        && c.type === "element"
        && c.tagName === "code"
        && c.properties
        && c.properties.hasOwnProperty("className")
        //@ts-ignore
        && c.properties["className"].indexOf("language-plaintext") > -1
    ));

    return !!nodeWithCodePlaintext ?
        (
            <div className={"text_column xx"}>
                {children}
            </div>
        )
        :
        (
            <pre className={className} {..._props}>
                {children}
            </pre>
        )
}