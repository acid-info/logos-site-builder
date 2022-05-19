import {CodeComponent} from "react-markdown/lib/ast-to-react";
import {ElementContent} from "hast";
import {hljsLangClassnames} from "../configs";

export const CustomMarkdownPre: CodeComponent = ({node, inline, className, children, ..._props}) => {
    const nodeWithCodePlaintext: ElementContent | undefined = node.children.find((c) => (
        c
        && c.type === "element"
        && c.tagName === "code"
        && c.properties
        && c.properties.hasOwnProperty("className")
        && (
            hljsLangClassnames.reduce<boolean>((a, b) => {
                //@ts-ignore
                return c.properties["className"].indexOf(b) > -1 || a
            }, false)
        )
    ));

    if(!nodeWithCodePlaintext){
        return (
            <pre className={className} {..._props}>
                {children}
            </pre>
        )
    }

    //@ts-ignore
    let classnames = nodeWithCodePlaintext?.properties? (nodeWithCodePlaintext?.properties||{}).className : [];
    const c = classnames.join(" ").replace("hljs", "").replace("language-", "").trim()

    return (
        <div className={c}>
            {children}
        </div>
    )

}