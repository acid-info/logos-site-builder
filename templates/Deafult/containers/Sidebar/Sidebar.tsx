import {DefaultSidebar} from "../../../../containers/DefaultSidebar/Sidebar";
import {FC, useEffect, useState} from "react";

import styles from "./Styles.module.css";
import {Dialog} from "../../../../components/design-system/Dialog/Dialog";
import {SidebarToggleButton} from "../../../../components/SidebarToggleButton";
import {useRouter} from "next/router";

interface IProps{
    className?: string;
}

export const Sidebar: FC<IProps> = ({className}) => {
    const [mobileShow, setMobileShow] = useState(false);
    const [desktopShow, setDesktopShow] = useState(true);

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
        <div className={`${styles.container} ${className}`}>
            <SidebarToggleButton onClick={toggle} />
            {
                mobileShow&&
                <Dialog onClose={handleClose} className={styles.mobile}>
                    <DefaultSidebar/>
                </Dialog>
            }
            {
                desktopShow&&
                <DefaultSidebar className={`${styles.desktop}`}/>
            }

        </div>
    )
}