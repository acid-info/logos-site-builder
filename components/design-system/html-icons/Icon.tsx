import {FC, PropsWithoutRef} from "react";

export interface ILogosIconCustomProps extends PropsWithoutRef<any>{
    htmlCode: string;
}

export const LogosIcon: FC<ILogosIconCustomProps> = ({htmlCode, className="", ...rest}) => (
    <span className={`logos-icon ${className}`}
          dangerouslySetInnerHTML={{__html: htmlCode}}
          {...rest}
    />
)