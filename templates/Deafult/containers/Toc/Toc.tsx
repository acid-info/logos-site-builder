import {FC} from "react";

import style from "./Styles.module.css";
import {MarkdownToc} from "../../../../components/MarkdownToc";
import {IMarkdownTocItem} from "../../../../types/data.types";

interface IProps{
    className?: string;
    toc: IMarkdownTocItem[];
}

export const Toc: FC<IProps> = ({className="", toc}) => {
    return (
        <aside className={`${style.container} ${className}`}>
            <MarkdownToc toc={toc}
                         className={style.tocComponent}
            />
        </aside>
    )
}