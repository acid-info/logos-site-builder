import {FC, useEffect, useState} from "react";
import rehypeHighlight from "rehype-highlight";
import {TTemplateProps} from "../../types/ui.types";
import {Sidebar} from "../../components/Sidebar";
import ReactMarkdown from "react-markdown";
import {IMarkdown} from "../../types/data.types";
import {Header} from "../../components/Header";
import {SearchInput} from "../../components/SearchInput";

import style from "./Style.module.css";

import {CustomMarkdownCode} from "./markdown/custom-components/Code";
import {CustomMarkdownPre} from "./markdown/custom-components/Pre";
import {paragraphLanguage} from "./markdown/custom-highlight-languages";

// import "highlight.js/styles/base16/harmonic16-dark.css"

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
                    />
                </div>
                <main className={`${style.col_2_4}`}>
                    <div className={`${style.searchInput} ${sidebarOpen? style.withOpenSidebar: ""}`}>
                        <SearchInput/>
                    </div>
                    <div className={style.content}>
                        {!append&&props.children}
                        <ReactMarkdown
                            rehypePlugins={[
                                [rehypeHighlight, {
                                    languages: [paragraphLanguage]
                                }],
                            ]}
                            remarkPlugins={[]}
                            components={{
                                code: CustomMarkdownCode,
                                pre: CustomMarkdownPre
                            }}
                        >
                            {markdown.content}
                        </ReactMarkdown>
                        {append&&props.children}
                    </div>
                </main>
            </div>
        </div>
    )
}