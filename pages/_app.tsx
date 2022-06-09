import type {AppProps} from 'next/app'
import {PageComponent} from "../types/page";
import {LogosSiteProvider} from "../context/SiteProvider";
import {LogosThemeProvider} from "../context/ThemeProvider";
import {Head} from "../components/Head";

interface IProps extends AppProps {
    Component: PageComponent
}

import "../public/compiled/theme.css";
import "../styles/globals.css";
import "../styles/templates.global.css"
import {logosMathConfig} from "../configs/math.config";
import {MathJaxContext} from "better-react-mathjax";

function App({Component, pageProps}: IProps) {
    const {children, ...rest} = pageProps;
    return (
        <LogosSiteProvider>
            <Head/>
            <LogosThemeProvider>
                <Component {...rest}>{children}</Component>
            </LogosThemeProvider>
        </LogosSiteProvider>
    );
}

export default App