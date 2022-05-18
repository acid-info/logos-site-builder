import ReactMarkdown from "react-markdown";
import {CodeComponent} from "react-markdown/lib/ast-to-react";

export const CustomMarkdownCode: CodeComponent = ({node, inline, className, children, ..._props}) => {
    return (className||"").includes("plaintext")?
        (
            <>
                <ReactMarkdown>
                    {String(children)}
                </ReactMarkdown>
            </>
        )
        :
        (
            <code className={className} {..._props}>
                {children}
            </code>
        )
}