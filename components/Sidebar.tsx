import {FC, PropsWithChildren} from "react";
import {INavigationItemProps} from "../types/data.types";
import Link from "next/link";

const sidebar: INavigationItemProps = require("../public/compiled/sidebar.tree.min.json");

interface ISidebarProps{
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
    const mainItems = sidebar.children.filter((c) => c.children.length===0)
    const subItems = sidebar.children.filter((c) => c.children.length!==0);

    return (
        <nav className={`default-sidebar`}>
            <Menu items={[{...sidebar, title: "", children: mainItems}]}/>
            <br/>
            <Menu items={subItems}/>
        </nav>
    )
}