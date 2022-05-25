import {FC, PropsWithChildren} from "react";

export interface ILogosHolderProps{
    onClick: () => void
    className?: string;
}

export const LogoHolder: FC<PropsWithChildren<ILogosHolderProps>> = ({onClick,className="",children}) => (
    <div onClick={onClick}
         className={`logo-holder button ${className}`}
         style={{
             display: "inline-block"
         }}
    >
        {children}
    </div>
)