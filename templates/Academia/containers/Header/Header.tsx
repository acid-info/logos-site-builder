import {FC, PropsWithChildren} from "react";
import {useLogosTheme} from "../../../../context/ThemeProvider";
import {Logo} from "../../../../components/design-system/logos";
import {useLogosSite} from "../../../../context/SiteProvider";

interface IProps{
    className?: string;
}

import styles from "./Styles.module.css";
import {SearchBox} from "../Search/SearchBox";

export const Header: FC<PropsWithChildren<IProps>> = ({className="", children}) => {
    const {toggleMode} = useLogosTheme();
    const {config} = useLogosSite();

    return (
        <header className={`${styles.container} ${className}`}>
            <Logo dsid={config.ds_id} onClick={toggleMode}/>
            <div className={styles.searchBox}>
                <SearchBox className={styles.search}/>
            </div>
            {children}
        </header>
    )
}