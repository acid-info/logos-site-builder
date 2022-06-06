import {FC, PropsWithChildren} from "react";

interface IProps{
    className?: string;
    append?: boolean
    content: string
}

import styles from "./Styles.module.css";
import ReactMarkdown from "react-markdown";
import {logosRehypePlugins} from "../../markdown/logos-rehype-plugins";
import {logosRemarkPlugins} from "../../markdown/logos-remark-plugins";
import {logosReactMarkdownComponents} from "../../markdown/components";
import {transformImageUri} from "../../markdown/logos-react-md-transformers/image-uri";

export const Content: FC<PropsWithChildren<IProps>> = (props) => {
    const {className="", children, content, append = true} = props;
    return (
        <article className={`${styles.container} ${className}`}>
            {!append && children}
            <ReactMarkdown
                rehypePlugins={logosRehypePlugins}
                remarkPlugins={logosRemarkPlugins}
                components={logosReactMarkdownComponents}
                transformImageUri={transformImageUri}
            >
                {content}
            </ReactMarkdown>
            {append && props.children}
        </article>
    )
}