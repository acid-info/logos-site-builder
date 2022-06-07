import {FC, PropsWithChildren} from "react";
import Link from "next/link";
import {INavigationItemProps} from "../../types/data.types";

import styles from "./Styles.module.css";
import {DefaultSidebar} from "./Sidebar";
import {randomInt} from "../../utils/utils.math";
import {useRouter} from "next/router";

interface IMenuItemProps {
    item: INavigationItemProps
    level?: number
    isActive?: boolean;
}

export const DefaultSidebarMenuItem: FC<PropsWithChildren<IMenuItemProps>> = (props) => {
    const {level, item, children, isActive = false} = props;
    const isPage = item.localPath.endsWith(".md");

    const title = item.title.length <= 20 ?
        item.title
        :
        // item.title
        `${item.title.split(" ").slice(0, ~~(90/item.title.length)).join(" ")}..`

    return (
        <li className={`${styles.menuItem} menuitem level-${level}`}>
            <div className={"menuitem-title"}>
                {
                    !isPage ?
                        <span className={"cap"}>
                            {item.title}
                        </span>
                        :
                        <Link href={`/${item.path.join("/")}`} scroll={false}>
                            <a className={isActive ? "active" : ""}
                               title={item.title}
                            >
                                {item.title}
                            </a>
                        </Link>
                }
            </div>
            {
                children
            }
            {
                level === 0 &&
                <br/>
            }
        </li>
    )
}

