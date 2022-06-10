import {FC, PropsWithChildren} from "react";
import Link from "next/link";
import {INavigationItemProps} from "../../types/data.types";

import styles from "./Styles.module.css";
import {DefaultSidebar} from "./Sidebar";
import {randomInt} from "../../utils/utils.math";
import {useRouter} from "next/router";
import {capitalizeFirstLetter} from "../../utils/utils.ui";

interface IMenuItemProps {
    item: INavigationItemProps
    level?: number
    isActive?: boolean;
}

export const DefaultSidebarMenuItem: FC<PropsWithChildren<IMenuItemProps>> = (props) => {
    const {level, item, children, isActive = false} = props;
    const isPage = item.localPath.endsWith(".md");

    return (
        <li className={`${styles.menuItem} menuitem level-${level}`}>
            <>
                {
                    !isPage ?
                        <span>
                            {item.metadata.title}
                        </span>
                        :
                        <Link href={`/${item.path.join("/")}`} scroll={true}>
                            <a className={isActive ? "active" : ""}
                               title={item.metadata.title}
                            >
                                {capitalizeFirstLetter(item.metadata.title)}
                            </a>
                        </Link>
                }
            </>
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

