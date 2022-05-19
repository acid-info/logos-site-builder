import {FC, PropsWithChildren} from "react";
import {logosCustomMarkdownLanguages} from "../../configs";

interface IProps{
    columns?: number
}

export const Paragraph: FC<PropsWithChildren<IProps>> = (props) => {
    const {children, columns = 2} = props;
    const cClass = new Array(columns).fill(null).map(c => `x`).join("");
    return (
        <article className={`${logosCustomMarkdownLanguages.paragraph} ${cClass}`}>
            {children}
        </article>
    )
}