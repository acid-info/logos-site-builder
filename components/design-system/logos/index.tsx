import {FC, PropsWithChildren} from "react";
import {ELogosDesignSystemID} from "../../../types/data.types";

import {LogosLogo} from "./LogosLogo";
import {CodexLogo} from "./CodexLogo";
import {VacsLogo} from "./VacLogo";
import {WakuLogo} from "./WakuLogo";
import {AcidInfoLogo} from "./AcidInfoLogo";

interface IProps extends PropsWithChildren<any>{
    dsid: ELogosDesignSystemID
}

export const Logo: FC<IProps> = (props) => {
    const {dsid = ELogosDesignSystemID.LOGOS, ...rest} = props;
    switch (dsid){
        case ELogosDesignSystemID.LOGOS:
            return <LogosLogo {...rest}/>;
        case ELogosDesignSystemID.CODEX:
            return <CodexLogo {...rest}/>;
        case ELogosDesignSystemID.VAC:
            return <VacsLogo {...rest}/>;
        case ELogosDesignSystemID.WAKU:
            return <WakuLogo {...rest}/>;
        case ELogosDesignSystemID.ACID_INFO:
            return <AcidInfoLogo {...rest}/>;
        default:
            return null;
    }
}
