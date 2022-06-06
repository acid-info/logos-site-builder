import {FC, memo, PropsWithChildren, useRef, useState} from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import {CopyToClipboard} from "../../../../../components/CopyToClipboard";
import {useLogosSite} from "../../../../../context/SiteProvider";

interface ICodeProps{
    hastProps: {};
    className: string;
}

const Code: FC<PropsWithChildren<ICodeProps>> = ({className, hastProps, children}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false)

    const onEnter = () => {
        setHovered(true)
    }

    const onExit = () => {
        setHovered(false);
    }

    return (
        <div className={`codeblock`}
              ref={ref}
              onMouseEnter={onEnter}
              onMouseLeave={onExit}
        >
            <CopyToClipboard target={ref}
                             visible={hovered}
                             onCopy={() => {}}
            />
            {children}
        </div>
    )
}

export const CodeWrapper = memo(({node, inline, className, children, ...props}: any) => {
    const match = /language-(\w+)/.exec(className || '');
    const {codeBlockStyle} = useLogosSite();

    return match ? (
        <Code hastProps={props} className={className}>
            <SyntaxHighlighter
                style={codeBlockStyle}
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers={false}
                wrapLines={false}
                useInlineStyles={true}
                {...props}
            >
                {String(children)}
            </SyntaxHighlighter>
        </Code>
    ) : (
        <code className={className} {...props}>
            {String(children)}
        </code>
    );
})