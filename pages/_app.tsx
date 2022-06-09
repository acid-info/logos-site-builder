import type {AppProps} from 'next/app'
import {PageComponent} from "../types/page";
import {LogosSiteProvider} from "../context/SiteProvider";
import {LogosThemeProvider} from "../context/ThemeProvider";
import {LogosHead} from "../components/LogosHead";

interface IProps extends AppProps {
    Component: PageComponent
}

import "../public/compiled/theme.css";
import "../styles/globals.css";
import "../styles/templates.global.css"

function App({Component, pageProps}: IProps) {
    const {children, ...rest} = pageProps;
    return (
        <LogosSiteProvider>
            <LogosThemeProvider>
                <Component {...rest}>{children}</Component>
            </LogosThemeProvider>
        </LogosSiteProvider>
    );
}

export default App