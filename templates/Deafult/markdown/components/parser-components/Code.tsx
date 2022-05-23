import ReactMarkdown from "react-markdown";
import {CodeComponent} from "react-markdown/lib/ast-to-react";
import {hljsLangClassnames, logosCustomMarkdownLanguages} from "../../configs";

export const CustomMarkdownCode: CodeComponent = ({node, inline, className = "", children, ..._props}) => {
    const match = hljsLangClassnames.find(l => (className||"").includes(l));
    const isAscii = className.includes(`language-${logosCustomMarkdownLanguages.ascii}`);

    return !!match?
        (
            isAscii?
                <p>{String(children)}</p>
                :
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