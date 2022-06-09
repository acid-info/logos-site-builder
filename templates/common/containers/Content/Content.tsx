import {FC, PropsWithChildren} from "react";

interface IProps{
    className?: string;
    append?: boolean
    content: string
    config: ReactMarkdownOptions;
    metadata: ILogosMarkdownMetadataBase
}

import styles from "./Styles.module.css";
import ReactMarkdown from "react-markdown";
import {ILogosMarkdownMetadataBase} from "../../../../types/data.types";
import {ReactMarkdownOptions} from "react-markdown/lib/react-markdown";
import {MathJaxContext, MathJax} from "better-react-mathjax";
import {logosMathConfig} from "../../../../configs/math.config";
import dynamic from "next/dynamic";
import {MathJaxContextProps} from "better-react-mathjax/MathJaxContext/MathJaxContext";
import ErrorBoundary from "../../../../containers/ErrorBoundary/ErrorBoundary";

const MathJaxContextLazy = dynamic<MathJaxContextProps>(
    () => import('better-react-mathjax').then((mod) => mod.MathJaxContext) as any,
    {
        ssr: true,
    }
);


export const Content: FC<PropsWithChildren<IProps>> = (props) => {
    const {
        className="",
        children,
        content,
        append = true,
        config,
        metadata: {
            _includes = []
        }
    } = props;

    return (
        <article className={`${styles.container} ${className}`}>
            {!append && children}
            <ErrorBoundary>
                {
                    _includes.indexOf('math') > -1 ?
                        <MathJaxContextLazy config={logosMathConfig}>
                            <ReactMarkdown {...config}>
                                {content}
                            </ReactMarkdown>
                        </MathJaxContextLazy>
                        :
                        <ReactMarkdown {...config}>
                            {content}
                        </ReactMarkdown>
                }
            </ErrorBoundary>

            {append && props.children}
        </article>
    )
}