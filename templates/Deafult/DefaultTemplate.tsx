import {FC, useEffect, useState} from "react";
import {TTemplateProps} from "../../types/ui.types";
import {Sidebar} from "../../components/Sidebar";
import ReactMarkdown from "react-markdown";
import {IMarkdown} from "../../types/data.types";
import {Header} from "../../components/Header";
import {SearchInput} from "../../components/SearchInput";

import style from "./Style.module.css";

import {logosRehypePlugins} from "./markdown/logos-rehype-plugins";
import {logosRemarkPlugins} from "./markdown/logos-remark-plugins";
import {logosReactMarkdownComponents} from "./markdown/components";
import {transformImageUri} from "./markdown/logos-react-md-transformers/image-uri";
import {MarkdownToc} from "../../components/MarkdownToc";
import {Search} from "../../components/Search/Search";
import {Footer} from "../../components/Footer";
import {useRouter} from "next/router";

interface IProps{
    markdown: IMarkdown<any>;
}

export const DefaultTemplate_Markdown: FC<TTemplateProps<IProps>> = (props) => {
    const {append = false, markdown} = props;
    const [sidebarHide, setSideBarHide] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const onSidebarOpen = () => {
        setSidebarOpen(true);
    }

    const onSidebarClose = () => {
        setSidebarOpen(false);
        setSideBarHide(true)
        console.log("close");
    }

    return (
        <div className={style.container}>
            <Header className={style.header} onSidebarToggle={() => setSideBarHide(!sidebarHide)}/>
            <div className={style.banner}/>
            <div className={style.mainContainer}>
                <div className={`${style.sidebarWrapper} ${style.col_1_4}`}>
                    <Sidebar className={`${style.sidebar} ${style.sidebarDefault}`}
                             hide={sidebarHide}
                    />
                    <Sidebar className={`${style.sidebar} ${style.sidebarNarrow}`}
                             hide={sidebarHide}
                             initialHide={true}
                             onOpen={onSidebarOpen}
                             onClose={onSidebarClose}
                             isFullscreen={true}
                    />
                </div>
                <main className={`${style.col_2_4}`}>
                    <div className={`${style.searchInput} ${sidebarOpen? style.withOpenSidebar: ""}`}>
                        <Search className={style.searchBox}/>
                    </div>
                    <div className={style.content}>
                        {!append&&props.children}
                        <ReactMarkdown
                            rehypePlugins={logosRehypePlugins}
                            remarkPlugins={logosRemarkPlugins}
                            components={logosReactMarkdownComponents}
                            transformImageUri={transformImageUri}
                        >
                            {markdown.content}
                        </ReactMarkdown>
                        {append&&props.children}
                    </div>
                </main>
                <div className={`${style.tocWrapper} ${style.col_1_4}`}>
                    <MarkdownToc toc={markdown.toc}
                                 className={style.toc}
                    />
                </div>
            </div>
            <Footer className={style.footer}/>
        </div>
    )
}