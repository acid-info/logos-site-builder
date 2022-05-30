import {DefaultSidebar} from "../../../../containers/DefaultSidebar/Sidebar";
import {FC, useState} from "react";

import styles from "./Styles.module.css";
import {Dialog} from "../../../../components/design-system/Dialog/Dialog";
import {SidebarToggleButton} from "../../../../components/SidebarToggleButton";

interface IProps{
    className?: string;
}

export const Sidebar: FC<IProps> = ({className}) => {
    const [mobileShow, setMobileShow] = useState(false);
    const [desktopShow, setDesktopShow] = useState(true);

    const handleClose = () => {
        setMobileShow(false);
    }

    const toggle = () => {
        setMobileShow(!mobileShow);
        setDesktopShow(!desktopShow);
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