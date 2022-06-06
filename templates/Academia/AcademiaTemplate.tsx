import {FC} from "react";
import {TTemplateProps} from "../../types/ui.types";
import {IMarkdown} from "../../types/data.types";
import {Header} from "./containers/Header/Header";

import style from "./styles/Style.module.css";

import {Footer} from "./containers/Footer/Footer";
import {Content} from "./containers/Content/Content";
import {Sidebar} from "./containers/Sidebar/Sidebar";
import {Toc} from "./containers/Toc/Toc";

interface IProps {
    markdown: IMarkdown<any>;
}

export const AcademiaTemplate_Markdown: FC<TTemplateProps<IProps>> = (props) => {
    const {markdown} = props;

    return (
        <div className={style.container}>
            <Header className={style.header}/>
            <main className={style.main}>
                <Sidebar className={style.sidebar}/>
                <Content className={style.content} content={markdown.content} />
                <Toc className={style.toc} toc={markdown.toc}/>
            </main>
            <Footer className={style.footer}/>
        </div>
    )
}