import {FC, PropsWithChildren} from "react";
import LogoSvg from "../public/compiled/logo.svg";

export interface ILogosHolderProps{
    onClick: () => void
    filePath: string;
    alt?: string;
    title?: string;
}

export const LogoHolder: FC<PropsWithChildren<ILogosHolderProps>> = ({onClick, filePath, alt, title, children}) => (
    <div onClick={onClick}
         className={"logo-holder button"}
         style={{
             display: "inline-block"
         }}
    >
        <LogoSvg/>
    </div>
)