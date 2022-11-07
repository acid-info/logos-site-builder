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
import {PagePrintInfo} from "../common/components/page-print-info/PagePrintInfo";
import {useLogosSite} from "../../context/SiteProvider";

interface IProps {
    markdown: IMarkdown<any>;
}

export const DefaultTemplate_Markdown: FC<TTemplateProps<IProps>> = (props) => {
    const {markdown, append, children} = props;
    const {config} = useLogosSite();

    return (
        <div className={`${style.container} ${commonStyle.container} template-container`}>
            <Header className={`${style.header} ${commonStyle.header}`}/>
            <PagePrintInfo config={config}/>
            <Banner className={`${style.banner} ${commonStyle.banner}`}/>
            <SearchBox className={`${style.search} ${commonStyle.search}`}/>
            <main className={`${style.main} ${commonStyle.main}`}>
                <Sidebar className={`${style.sidebar} ${commonStyle.sidebar} hide-scroll`}/>
                <Content className={`${style.content} ${commonStyle.content}`}
                         content={markdown.content}
                         config={markdownCommonConfigs({ siteConfig: config, pageMetadata: markdown.metadata })}
                         metadata={markdown.metadata}
                         append={append}
                >
                    {children}
                </Content>
                <Toc className={`${style.toc} ${commonStyle.toc} hide-scroll`} toc={markdown.toc}/>
            </main>
            <Footer className={`${style.footer} ${commonStyle.footer}`}/>
        </div>
    )
}