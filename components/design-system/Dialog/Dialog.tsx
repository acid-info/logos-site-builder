import {FC, PropsWithChildren, useEffect} from "react";

import CloseIcon from "/public/assets/sidebar-icon-close.svg";

import style from "./Dialog.module.css";

interface IProps {
    onClose: () => void;
    className?: string;
}

export const Dialog: FC<PropsWithChildren<IProps>> = ({onClose, className, children}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, []);
    return (
        <div className={`dialog-container ${className} ${style.container}`}>
            <div className={"close-icon button"}
                 onClick={onClose}
            >
                <CloseIcon/>
            </div>
            <div className={"dialog-container-innerwrapper"}>
                {children}
            </div>
        </div>
    )
}