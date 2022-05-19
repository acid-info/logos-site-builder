import {createContext, FC, PropsWithChildren, useContext, useState} from 'react'
import {LogosTheme} from "../types/theme.types";
import {ISiteConfigs} from "../types/data.types";
import {hexTofeColorMatrix} from "../utils/utils.theme";
import IThemeProviderProps = LogosTheme.IThemeProviderProps;
import EThemeMode = LogosTheme.EThemeMode;
import EThemeMode = LogosTheme.EThemeMode;

const siteConfigs: ISiteConfigs = require("../public/compiled/configs.json");

interface IThemeProviderContext{
    mode: EThemeMode;
    toggleMode: () => void;
}

const defaultThemeState: IThemeProviderContext = {
    mode: EThemeMode.DARK,
    toggleMode: () => {}
}

const logosThemeContext = createContext<IThemeProviderContext>(defaultThemeState)

export const LogosThemeProvider: FC<PropsWithChildren<IThemeProviderProps>> = (props) => {
    const { children } = props;
    const [mode, setMode] = useState<EThemeMode>(props.mode||defaultThemeState.mode);

    const modeToggleHandler = () => {
        if(window){
            const m = mode===EThemeMode.DARK? EThemeMode.LIGHT:EThemeMode.DARK;
            document.body.className = m;
            setMode(m);
        }
    }

    const color = siteConfigs.theme.palettes[EThemeMode.DARK].background.replace("#", "")

    return (
        <logosThemeContext.Provider
            value={{
                mode,
                toggleMode: modeToggleHandler,
            }}
        >
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                <defs>
                    <filter id="colored">
                        {
                            color === "000000"?
                                <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" />
                                :
                                <feColorMatrix type="matrix" values={hexTofeColorMatrix(color)}/>
                        }
                    </filter>
                </defs>
            </svg>
            {children}
        </logosThemeContext.Provider>
    )
}

export const useLogosTheme = () => useContext<IThemeProviderContext>(logosThemeContext)
