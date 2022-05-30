import {FC} from "react";
import {useRouter} from "next/router";

import {DefaultSidebarMenuItem} from "./SidebarMenuItem";
import {INavigationItemProps} from "../../types/data.types";

import styles from "./Styles.module.css";

interface IMenuProps{
    items: INavigationItemProps[]
    level?: number
    className?: string;
}

export const DefaultSidebarMenu: FC<IMenuProps> = (props) => {
    const {items, level = 0, className} = props;
    let cname = level===0? className: "";
    const {asPath} = useRouter();

    const isActive = (item: INavigationItemProps): boolean => {
        if((item.path[0]||"").length===0) return asPath === "" || asPath === "/";
        return asPath.indexOf(item.path.join("/")) > -1;
    }

    return(
        <ul className={`sidebar-menu ${cname} ${styles.menu}`}>
            {items.map((item) => {
                return (
                    <DefaultSidebarMenuItem item={item}
                                     level={level}
                                     key={item.localPath}
                                     isActive={isActive(item)}
                    >
                        <DefaultSidebarMenu items={item.children} level={level+1}/>
                    </DefaultSidebarMenuItem>
                );
            })}
        </ul>
    )
}