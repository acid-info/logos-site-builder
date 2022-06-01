import {FC, PropsWithChildren} from "react";
import Link from "next/link";
import {INavigationItemProps} from "../../types/data.types";

import styles from "./Styles.module.css";
import {DefaultSidebar} from "./Sidebar";

interface IMenuItemProps {
    item: INavigationItemProps
    level?: number
    isActive?: boolean;
}

export const DefaultSidebarMenuItem: FC<PropsWithChildren<IMenuItemProps>> = (props) => {
    const {level, item, children, isActive = false} = props;
    return (
        <li className={`${styles.menuItem} menuitem level-${level}`}>
            <div className={"menuitem-title"}>
                {
                    item.children.length ?
                        <span className={"cap"}>
                            {item.title}
                        </span>
                        :
                        <Link href={`/${item.path.join("/")}`} scroll={false}>
                            <a className={isActive ? "active" : ""}
                               title={item.title}
                            >
                                <span>{item.title}</span>
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

