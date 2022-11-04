import {DefaultSidebar} from "../../../../containers/DefaultSidebar/Sidebar";
import {FC, PropsWithChildren, useEffect, useState} from "react";

import styles from "./Styles.module.css";
import {Dialog} from "../../../../components/design-system/Dialog/Dialog";
import {SidebarToggleButton} from "../../../../components/SidebarToggleButton";
import {useRouter} from "next/router";

interface IProps{
    className?: string;
    append?: boolean;
    initialDesktop?: boolean;
    initialMobile?: boolean;
    desktopToggleButton?: boolean
}

export const Sidebar: FC<PropsWithChildren<IProps>> = (props) => {
    const {className, children, append=true, initialDesktop = true, initialMobile = false, desktopToggleButton = true } = props;
    const [mobileShow, setMobileShow] = useState(initialMobile);
    const [desktopShow, setDesktopShow] = useState(initialDesktop);

    const {asPath} = useRouter();

    useEffect(() => {
        setMobileShow(false);
    }, [asPath]);


    const handleClose = () => {
        setMobileShow(false);
    }

    const toggle = () => {
        if(window.innerWidth <=600){
            setMobileShow(!mobileShow);
        }else{
            setDesktopShow(!desktopShow);
        }
    }

    return (
        <aside className={`${styles.container} ${className} ${!desktopToggleButton && styles.hideDesktopToggleButton}`}>
            <SidebarToggleButton onClick={toggle} className={styles.mobile} />
            { desktopToggleButton && <SidebarToggleButton onClick={toggle} className={styles.desktop} /> } 
            {
                mobileShow&&
                <Dialog onClose={handleClose} className={styles.mobile}>
                    {append?children:null}
                    <DefaultSidebar/>
                    {!append?children:null}
                </Dialog>
            }
            {
                desktopShow&&
                <>
                    {append?children:null}
                    <DefaultSidebar className={`${styles.desktop}`}/>
                    {!append?children:null}
                </>
            }
        </aside>
    )
}