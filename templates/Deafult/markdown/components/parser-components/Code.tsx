import ReactMarkdown from "react-markdown";
import {CodeComponent} from "react-markdown/lib/ast-to-react";
import {hljsLangClassnames, logosCustomMarkdownLanguages} from "../../configs";
import {CopyToClipboard} from "../../../../../components/CopyToClipboard";
import {FC, PropsWithChildren, useRef, useState} from "react";


interface ICodeProps{
    hastProps: {};
    className: string;
}

const Code: FC<PropsWithChildren<ICodeProps>> = ({className, hastProps, children}) => {
    const ref = useRef<HTMLElement>(null);
    const [hovered, setHovered] = useState(false)
    console.log("className", className)

    const onEnter = () => {
        setHovered(true)
    }

    const onExit = () => {
        setHovered(false);
    }

    return (
        <code className={className}
              {...hastProps}
              ref={ref}
              onMouseEnter={onEnter}
              onMouseLeave={onExit}
        >
            <CopyToClipboard target={ref}
                             visible={hovered}
                             onCopy={() => console.log("yayyyy")}
            />
            {children}
        </code>
    )
}

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
    <Code className={className} hastProps={_props}>
        {children}
    </Code>

}