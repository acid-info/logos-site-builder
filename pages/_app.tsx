import type {AppProps} from 'next/app'
import {PageComponent} from "../types/page";
import {LogosThemeProvider} from "../context/ThemeProvider";

interface IProps extends AppProps{
    Component: PageComponent
}

import "../public/compiled/theme.css";
import "../styles/globals.css";

function App({Component, pageProps}: IProps) {
    const {children, ...rest} = pageProps;
    return (
        <LogosThemeProvider>
            <Component {...rest}>{children}</Component>
        </LogosThemeProvider>
    );
}

export default App