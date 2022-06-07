import {FC, PropsWithChildren} from "react";

interface IProps{
    className?: string;
    append?: boolean
    content: string
    config: IMarkdownConfig;
}

import styles from "./Styles.module.css";
import ReactMarkdown from "react-markdown";
import {IMarkdownConfig} from "../../markdown/configs";


export const Content: FC<PropsWithChildren<IProps>> = (props) => {
    const {className="", children, content, append = true, config} = props;

    return (
        <article className={`${styles.container} ${className}`}>
            {!append && children}
            <ReactMarkdown
                rehypePlugins={config.rehypePlugins}
                remarkPlugins={config.remarkPlugins}
                components={config.logosReactMarkdownComponents}
                transformImageUri={config.transformImageUri}
            >
                {content}
            </ReactMarkdown>
            {append && props.children}
        </article>
    )
}