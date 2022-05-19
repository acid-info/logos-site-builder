export namespace LogosTheme{
    export enum EThemeMode{
        DARK="dark",
        LIGHT="light"
    }
    export interface IThemeProviderProps{
        mode?: EThemeMode.LIGHT|EThemeMode.DARK
    }

    export interface IThemePalette{
        background: string;
        text: string;
        highlight: string
    }

    export interface Theme{
        fontFamily: string;
        palettes: {
            [EThemeMode.LIGHT]: IThemePalette;
            [EThemeMode.DARK]: IThemePalette;
        }
    }
}