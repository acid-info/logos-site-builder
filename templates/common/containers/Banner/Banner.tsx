import {FC} from "react";

interface IProps{
    className?: string;
}

import styles from "./Styles.module.css";

export const Banner: FC<IProps> = ({className=""}) => {
    return (
        <div className={`${styles.container} ${className}`} />
    )
}