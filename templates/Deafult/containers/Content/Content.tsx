import {FC, PropsWithChildren} from "react";

interface IProps{
    className?: string;
    append?: boolean
    content: string
}

import styles from "./Styles.module.css";
import ReactMarkdown from "react-markdown";
import {markdownCommonConfigs} from "../../../common/markdown/configs";



export const Content: FC<PropsWithChildren<IProps>> = (props) => {
    const {className="", children, content, append = true} = props;
    return (
        <article className={`${styles.container} ${className}`}>
            {!append && children}
            <ReactMarkdown
                rehypePlugins={markdownCommonConfigs.rehypePlugins}
                remarkPlugins={markdownCommonConfigs.remarkPlugins}
                components={markdownCommonConfigs.logosReactMarkdownComponents}
                transformImageUri={markdownCommonConfigs.transformImageUri}
            >
                {content}
            </ReactMarkdown>
            {append && props.children}
        </article>
    )
}