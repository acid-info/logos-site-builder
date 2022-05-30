import {FC} from "react";
import {INavigationItemProps} from "../../types/data.types";

const sidebar: INavigationItemProps = require("../../public/compiled/sidebar.tree.min.json");

import styles from "./Styles.module.css";
import {DefaultSidebarMenu} from "./SidebarMenu";

interface ISidebarProps{
    className?: string;
    onClose?: () => void;
    onOpen?: () => void;
}

export const DefaultSidebar: FC<ISidebarProps> = (props) => {
    const {className = "", onClose = ()=>{}, onOpen = () => {}} = props;
    const mainItems = sidebar.children.filter((c) => c.children.length===0)
    const subItems = sidebar.children.filter((c) => c.children.length!==0);

    return (
        <div className={`${className} defaultSidebar ${styles.container}`}>
            <nav className={`sidebarNav`}>
                <DefaultSidebarMenu items={[{...sidebar, title: "", children: mainItems}]}
                      className={"mainMenu"}
                />
                <br/>
                <br/>
                <DefaultSidebarMenu items={subItems} className={"subMenu"}/>
            </nav>
        </div>
    )
}