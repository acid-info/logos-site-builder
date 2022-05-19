import {FC, PropsWithChildren} from "react";

import CloseIcon from "/public/assets/sidebar-icon-close.svg";

import style from "./Dialog.module.css";

interface IProps {
    onClose: () => void;
}

export const Dialog: FC<PropsWithChildren<IProps>> =
    ({
         onClose,
         children
     }) => (
        <div className={`dialog-container ${style.container}`}>
            <div className={"close-icon button"} onClick={onClose}>
                <CloseIcon/>
            </div>
            <div className={"dialog-container-innerwrapper"}>
                {children}
            </div>
        </div>
    )