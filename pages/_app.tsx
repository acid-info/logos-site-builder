import type {AppProps} from 'next/app'
import {PageComponent} from "../types/page";
import {LogosThemeProvider} from "../context/ThemeProvider";
import Head from 'next/head'

interface IProps extends AppProps{
    Component: PageComponent
}

import "../public/compiled/theme.css";
import "../styles/globals.css";

function App({Component, pageProps}: IProps) {
    const {children, ...rest} = pageProps;
    return (
        <LogosThemeProvider>
            <Head>
                <title>Logos site builder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...rest}>{children}</Component>
        </LogosThemeProvider>
    );
}

export default App