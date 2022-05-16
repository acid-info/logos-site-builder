import {FC} from "react";

import BurgerIcon from "/public/assets/sidebar-icon.svg";

interface IProps{
    onClick: () => void
}
export const SidebarToggleButton: FC<IProps> = ({onClick}) => (
    <div onClick={onClick} className={"sidebar-toggle-button button"}>
        <BurgerIcon/>
    </div>
)