import {FC} from "react";

import BurgerIcon from "/public/assets/sidebar-icon.svg";

interface IProps{
    onClick: () => void
    className?: string
}
export const SidebarToggleButton: FC<IProps> = ({onClick, className = "" }) => (
    <div onClick={onClick} className={`sidebar-toggle-button button ${className}`}>
        <BurgerIcon/>
    </div>
)