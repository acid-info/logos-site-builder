import {FC} from "react";
import {TTemplateProps} from "../../types/ui.types";
import {IMarkdown} from "../../types/data.types";
import formatDate from 'date-fns/format'


import style from "./Style.module.css";
import commonStyle from "../common/Styles.common.module.css";

import {Header} from "./containers/Header/Header";

import {Sidebar} from "../common/containers/Sidebar/Sidebar";
import {Content} from "../common/containers/Content/Content";
import {Toc} from "../common/containers/Toc/Toc";
import {Footer} from "../common/containers/Footer/Footer";
import {markdownCommonConfigs} from "../common/markdown/configs";
import {useLogosTheme} from "../../context/ThemeProvider";
import {useLogosSite} from "../../context/SiteProvider";
import {Logo} from "../../components/design-system/logos";
import {ArticleInfo} from "./components/PageInfo/PageInfo";
import {PagePrintInfo} from "../common/components/page-print-info/PagePrintInfo";

interface IProps {
    markdown: IMarkdown<any>;
}

export const AcademiaTemplate_Markdown: FC<TTemplateProps<IProps>> = (props) => {
    const {markdown, append = false, children} = props;
    const {toggleMode} = useLogosTheme();
    const {config} = useLogosSite();

    return (
        <div className={`${style.container} ${commonStyle.container} template-container`}>
            <Header className={`${style.header} ${commonStyle.header}`}/>
            <PagePrintInfo config={config}/>
            <main className={`${style.main} ${commonStyle.main} ${commonStyle.main}`}>
                <Sidebar className={`${style.sidebar} ${commonStyle.sidebar} hidden-scroll`} 
                    desktopToggleButton={false}
                >
                    <Logo dsid={config.ds_id} onClick={toggleMode}/>
                </Sidebar>
                <Content className={`${style.content} ${commonStyle.content}`}
                         content={markdown.content}
                         config={markdownCommonConfigs}
                         append={append}
                         metadata={markdown.metadata}
                >
                    {
                        children && children
                    }
                    {
                        (markdown.metadata.date||markdown.metadata.author)&&
                        <ArticleInfo data={markdown.metadata}/>
                    }
                </Content>
                <Toc className={`${style.toc} ${commonStyle.toc} hidden-scroll`} toc={markdown.toc}/>
            </main>
            <Footer className={`${style.footer} ${commonStyle.footer}`}/>
        </div>
    )
}