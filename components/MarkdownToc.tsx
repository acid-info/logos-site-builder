import Link from "next/link";
import {FC} from "react";
import {IMarkdownTocItem} from "../types/data.types";
import {useRouter} from "next/router";

interface IProps{
    toc: IMarkdownTocItem[];
    className?: string;
}

export const MarkdownToc: FC<IProps> = (props) => {
    const {className = "", toc} = props;
    const {asPath} = useRouter();
    const isActive = (item: IMarkdownTocItem): boolean => asPath.indexOf(item.slug) > -1;
    return (
        <nav className={`${className} hidden-scroll`}>
            <ul>
                {
                    toc.map((item, i) => (
                        <li key={item.slug} className={`h-${item.lvl}`}>
                            <Link href={`#${item.slug}`}>
                                <a className={isActive(item)? "active":""}>
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