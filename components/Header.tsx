import {FC} from "react";
import {LogoHolder} from "./LogoHolder";
import {SidebarToggleButton} from "./SidebarToggleButton";
import {useLogosTheme} from "../context/ThemeProvider";

interface IProps{
    className?: string;
    onSidebarToggle: () => void;
}

export const Header: FC<IProps> = ({className="", onSidebarToggle}) => {
    const {toggleMode} = useLogosTheme();

    return (
        <header className={className}>
            <SidebarToggleButton onClick={onSidebarToggle} />
            <LogoHolder onClick={toggleMode} filePath={"/assets/logos-logo.svg"}/>
        </header>
    )
}