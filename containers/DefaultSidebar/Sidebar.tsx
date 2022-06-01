import {FC} from "react";
import {INavigationItemProps, ISiteConfigExternalLink} from "../../types/data.types";

const sidebar: INavigationItemProps = require("../../public/compiled/sidebar.tree.min.json");

import styles from "./Styles.module.css";
import {DefaultSidebarMenu} from "./SidebarMenu";
import {useLogosSite} from "../../context/SiteProvider";

interface ISidebarProps{
    className?: string;
    onClose?: () => void;
    onOpen?: () => void;
}

export const DefaultSidebar: FC<ISidebarProps> = (props) => {
    const {className = "", onClose = ()=>{}, onOpen = () => {}} = props;
    const {config: {navigation: {external_links = []}}} = useLogosSite();
    const mainItems = sidebar.children.filter((c) => c.children.length===0)
    const subItems = sidebar.children.filter((c) => c.children.length!==0);

    let groups: {[key:string]: ISiteConfigExternalLink[]} = {};
    external_links.forEach((ex) => {
        if(groups[ex.category]){
            groups[ex.category].push(ex);
        }else{
            groups[ex.category] = [ex];
        }
    });

    return (
        <div className={`${className} defaultSidebar ${styles.container}`}>
            <nav className={`sidebarNav`}>
                <DefaultSidebarMenu items={[{...sidebar, title: "", children: mainItems}]}
                      className={"mainMenu"}
                />
                <br/>
                <br/>
                <DefaultSidebarMenu items={subItems} className={"subMenu"}/>

                <div>
                    {
                        Object.entries(groups).map(([g, val]) => (
                                <div key={g}>
                                    <div>
                                        <span className={"cap"}>{g}</span>
                                    </div>
                                    <ul>

                                        {
                                            val.map((item) => (
                                                <li key={item.text} >
                                                    <a href={item.url} target={"_blank"}>{`> ${item.text}`}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                        ))
                    }
                </div>
            </nav>
        </div>
    )
}