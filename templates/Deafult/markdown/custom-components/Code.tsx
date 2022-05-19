import ReactMarkdown from "react-markdown";
import {CodeComponent} from "react-markdown/lib/ast-to-react";
import {hljsLangClassnames} from "../configs";

export const CustomMarkdownCode: CodeComponent = ({node, inline, className, children, ..._props}) => {
    const isMatch = !!hljsLangClassnames.find(l => (className||"").includes(l));
    return isMatch?
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