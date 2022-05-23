import {FC, PropsWithChildren, useEffect, useState} from "react";
import {INavigationItemProps} from "../types/data.types";
import Link from "next/link";
import CloseIcon from "/public/assets/sidebar-icon-close.svg";
import {useRouter} from "next/router";

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
    className?: string;
}

interface IMenuItemProps{
    item: INavigationItemProps
    level?: number
    isActive?: boolean;
}

const MenuItem: FC<PropsWithChildren<IMenuItemProps>> = (props) => {
    const {level, item, children, isActive = false} = props;
    return (
        <li className={`menuitem level-${level}`}>
            <div className={"menuitem-title"}>
                {
                    item.children.length?
                        <span>
                        {item.title}
                    </span>
                        :
                        <Link href={`/${item.path.join("/")}`}>
                            <a className={isActive?"active":""}>
                                <span>{item.title}</span>
                            </a>
                        </Link>
                }
            </div>
            {
                children
            }
            {
                level===0&&
                <br/>
            }
        </li>
    )
}

const Menu: FC<IMenuProps> = (props) => {
    const {items, level = 0, className} = props;
    let cname = level===0? className: "";
    const {asPath} = useRouter();

    return(
        <ul className={`sidebar-menu ${cname}`}>
            {items.map((item) => {
                return (
                    <MenuItem item={item}
                              level={level}
                              key={item.localPath}
                              isActive={asPath===`/${item.path.join("/")}`}
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
                <Menu items={[{...sidebar, title: "", children: mainItems}]}
                      className={"mainMenu"}
                />
                <br/>
                <br/>
                <Menu items={subItems} className={"subMenu"}/>
            </nav>
        </div>
    )
}