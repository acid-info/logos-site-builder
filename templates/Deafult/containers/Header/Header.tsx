import {FC} from "react";
import {useLogosTheme} from "../../../../context/ThemeProvider";
import {Logo} from "../../../../components/design-system/logos";
import {useLogosSite} from "../../../../context/SiteProvider";

interface IProps{
    className?: string;
}

import styles from "./Styles.module.css";

export const Header: FC<IProps> = ({className=""}) => {
    const {toggleMode} = useLogosTheme();
    const {config} = useLogosSite();

    return (
        <header className={`${styles.container} ${className}`}>
            <Logo dsid={config.ds_id} onClick={toggleMode}/>
        </header>
    )
}