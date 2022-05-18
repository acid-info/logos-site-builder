import {FC, PropsWithChildren, useEffect, useState} from "react";
import {INavigationItemProps} from "../types/data.types";
import Link from "next/link";
import {SidebarToggleButton} from "./SidebarToggleButton";
import CloseIcon from "/public/assets/sidebar-icon-close.svg";
import {useViewport} from "../utils/ui-utils";

const sidebar: INavigationItemProps = require("../public/compiled/sidebar.tree.min.json");

interface ISidebarProps{
    className?: string;
    onClose?: () => void;
    onOpen?: () => void;
    initialHide?: boolean;
    hide: boolean;
}

interface IMenuProps{
    items: INavigationItemProps[]
    level?: number
}

interface IMenuItemProps{
    item: INavigationItemProps
    level?: number
}

const MenuItem: FC<PropsWithChildren<IMenuItemProps>> = ({level, item, children}) => (
    <li className={`menuitem level-${level}`}>
        <div className={"menuitem-title"}>
            {
                item.children.length?
                    <b>{item.title}</b>
                    :
                    <Link href={`/${item.path.join("/")}`}>
                        <a>
                            <span>{item.title}</span>
                        </a>
                    </Link>
            }
        </div>
        {
            children
        }
    </li>
)

const Menu: FC<IMenuProps> = (props) => {
    const {items, level = 0} = props;
    return(
        <ul className={"sidebar-menu"}>
            {items.map((item) => {
                return (
                    <MenuItem item={item}
                              level={level}
                              key={item.localPath}
                    >
                        <Menu items={item.children} level={level+1}/>
                    </MenuItem>
                );
            })}
        </ul>
    )
}

export const Sidebar: FC<ISidebarProps> = (props) => {
    const {className = "", onClose = ()=>{}, onOpen = () => {}, initialHide = false, hide} = props;
    const mainItems = sidebar.children.filter((c) => c.children.length===0)
    const subItems = sidebar.children.filter((c) => c.children.length!==0);
    const [firstTime, setFirstTime] = useState(false);

    const isOpen = !((!firstTime&&initialHide) || hide);
    const hideClass = isOpen? "":"hide"

    useEffect(() => {
        if(hide){
            setFirstTime(true);
        }
        if(isOpen){
            onOpen();
        }
    }, [hide, isOpen])

    return (
        <div className={`${className} ${hideClass}`}>
            <nav className={`sidebarNav`}>
                <div className={"sidebar-close-icon button"} onClick={onClose}>
                    <CloseIcon/>
                </div>
                <Menu items={[{...sidebar, title: "", children: mainItems}]}/>
                <br/>
                <Menu items={subItems}/>
            </nav>
        </div>
    )
}