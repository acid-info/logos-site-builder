import Link from "next/link";
import {FC} from "react";
import {IMarkdownTocItem} from "../types/data.types";

interface IProps{
    toc: IMarkdownTocItem[];
    className?: string;
}

export const MarkdownToc: FC<IProps> = (props) => {
    const {className = "", toc} = props;

    return (
        <nav className={`${className}`}>
            <ul>
                {
                    toc.map((item, i) => (
                        <li key={item.slug} className={`h-${item.lvl}`}>
                            <Link href={`#${item.slug}`}>
                                <a>
                                    {item.content}
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}