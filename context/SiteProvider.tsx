import {createContext, CSSProperties, FC, PropsWithChildren, useContext} from 'react'
import {INavigationItemProps, ISiteConfigs} from "../types/data.types";

import {siteConfig, sitemapFlat} from "../configs/siteconfigs";

const codeBlockStyle = require("/public/compiled/codeblock-style.json");

interface ISiteProviderContext{
    config: ISiteConfigs;
    sitemap: INavigationItemProps[];
    codeBlockStyle: { [key: string]: CSSProperties }
}

const defaultSiteState: ISiteProviderContext = {
    config: siteConfig,
    sitemap: sitemapFlat,
    codeBlockStyle: codeBlockStyle
}

const logosSiteContext = createContext<ISiteProviderContext>(defaultSiteState)

export const LogosSiteProvider: FC<PropsWithChildren<any>> = (props) => {
    const { children } = props;
    return (
        <logosSiteContext.Provider value={defaultSiteState}>
            {children}
        </logosSiteContext.Provider>
    )
}

export const useLogosSite = () => useContext<ISiteProviderContext>(logosSiteContext)