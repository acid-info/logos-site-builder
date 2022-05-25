import {FC} from "react";
import {SidebarToggleButton} from "./SidebarToggleButton";
import {useLogosTheme} from "../context/ThemeProvider";
import {Logo} from "./design-system/logos";
import {useLogosSite} from "../context/SiteProvider";

interface IProps{
    className?: string;
    onSidebarToggle: () => void;
}

export const Header: FC<IProps> = ({className="", onSidebarToggle}) => {
    const {toggleMode} = useLogosTheme();
    const {config} = useLogosSite();

    return (
        <header className={className}>
            <SidebarToggleButton onClick={onSidebarToggle} />
            <Logo dsid={config.ds_id} onClick={toggleMode}/>
        </header>
    )
}