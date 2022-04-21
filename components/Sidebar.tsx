import Link from "next/link";
import {FC} from "react";
import {INavigationItemProps} from "../types/data.types";

// @ts-ignore
const sidebar: INavigationItemProps[] = require("/public/data/sidebar.min.json");

interface IProps{}

export const Sidebar: FC<IProps> = (props) => {
    return (
        <nav>
            <ul>
                {
                    sidebar.map((item,i) => (
                        <li key={i}>
                            <Link href={item.path.join("/")}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}