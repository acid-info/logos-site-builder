import {FC} from "react";

import {Search} from "../../../../components/Search/Search";
import styles from "./Styles.module.css";

interface IProps{
    className?: string;
}

export const SearchBox: FC<IProps> = ({className=""}) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <Search className={styles.searchBox}/>
        </div>
    )
}