import {FC} from "react";
import {TTemplateProps} from "../../types/ui.types";
import {IMarkdown} from "../../types/data.types";


import commonStyle from "../common/Styles.common.module.css";
import style from "./styles/Style.module.css";

import {Header} from "./containers/Header/Header";

import {Banner} from "../common/containers/Banner/Banner";
import {SearchBox} from "../common/containers/Search/SearchBox";
import {Sidebar} from "../common/containers/Sidebar/Sidebar";
import {Content} from "../common/containers/Content/Content";
import {markdownCommonConfigs} from "../common/markdown/configs";
import {Footer} from "../common/containers/Footer/Footer";
import {Toc} from "../common/containers/Toc/Toc";
import {Logo} from "../../components/design-system/logos";
import {useLogosSite} from "../../context/SiteProvider";
import {useLogosTheme} from "../../context/ThemeProvider";


interface IProps {
    markdown: IMarkdown<any>;
}

export const DefaultTemplate_Markdown: FC<TTemplateProps<IProps>> = (props) => {
    const {markdown} = props;

    return (
        <div className={`${style.container} ${commonStyle.container}`}>
            <Header className={`${style.header} ${commonStyle.header}`}/>
            <Banner className={`${style.banner} ${commonStyle.banner}`}/>
            <SearchBox className={`${style.search} ${commonStyle.search}`}/>
            <main className={`${style.main} ${commonStyle.main}`}>
                <Sidebar className={`${style.sidebar} ${commonStyle.sidebar} hide-scroll`}/>
                <Content className={`${style.content} ${commonStyle.content}`}
                         content={markdown.content}
                         config={markdownCommonConfigs}
                />
                <Toc className={`${style.toc} ${commonStyle.toc} hide-scroll`} toc={markdown.toc}/>
            </main>
            <Footer className={`${style.footer} ${commonStyle.footer}`}/>
        </div>
    )
}