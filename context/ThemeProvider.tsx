import {createContext, FC, PropsWithChildren, useContext, useState} from 'react'
import {LogosTheme} from "../types/theme.types";
import IThemeProviderProps = LogosTheme.IThemeProviderProps;
import EThemeMode = LogosTheme.EThemeMode;


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

    return (
        <logosThemeContext.Provider
            value={{
                mode,
                toggleMode: modeToggleHandler,
            }}
        >
            {children}
        </logosThemeContext.Provider>
    )
}

export const useLogosTheme = () => useContext<IThemeProviderContext>(logosThemeContext)
