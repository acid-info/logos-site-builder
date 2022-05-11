import {FC} from "react";
import {LogoHolder} from "./LogoHolder";
import {SidebarToggleButton} from "./SidebarToggleButton";
import {useLogosTheme} from "../context/ThemeProvider";
import {Stack} from "./design-system/Stack/Stack";

interface IProps{
    toggleSidebar: () => void;
}

export const Header: FC<IProps> = (props) => {
    const {toggleSidebar} = props;
    const {toggleMode} = useLogosTheme();

    return (
        <header>
            <Stack justifyContent={"space-between"}
            >
                <SidebarToggleButton onClick={toggleSidebar}/>
                <LogoHolder onClick={toggleMode} filePath={"/assets/logos-logo.svg"}/>
                <div/>
            </Stack>
        </header>
    )
}