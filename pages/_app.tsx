import type {AppProps} from 'next/app'
import {ThemeProvider} from "../components/mocked-design-system"
import {PageComponent} from "../types/page";

interface IProps extends AppProps{
    Component: PageComponent
}

function App({Component, pageProps}: IProps) {
    const {children, ...rest} = pageProps;
    // const layout = Component.layout || ((page) => page)

    return (
        <ThemeProvider>
            <Component {...rest}>{children}</Component>
        </ThemeProvider>
    );
}

export default App