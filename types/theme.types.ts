export namespace LogosTheme{
    export enum EThemeMode{
        DARK="dark",
        LIGHT="light"
    }

    export interface IThemeProviderProps{
        mode?: EThemeMode.LIGHT|EThemeMode.DARK
    }
}