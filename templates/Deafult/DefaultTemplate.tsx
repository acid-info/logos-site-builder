import {FC, useState} from "react";
import {TTemplateProps} from "../../types/ui.types";
import {Sidebar} from "../../components/Sidebar";
import ReactMarkdown from "react-markdown";
import {IMarkdown} from "../../types/data.types";
import {Header} from "../../components/Header";
import {Stack} from "../../components/design-system/Stack/Stack";

import style from "./Style.module.css";

import {SearchInput} from "../../components/SearchInput";

interface IProps{
    markdown: IMarkdown<any>;
}

export const DefaultTemplate_Markdown: FC<TTemplateProps<IProps>> = (props) => {
    const {append = false, markdown} = props;
    const [sidebarHide, setSideBarHide] = useState(false);

    return (
        <div className={style.container}>
            <Header toggleSidebar={() => setSideBarHide(!sidebarHide)}/>
            {!append&&props.children}
            <div className={style.banner}>
                <Stack>
                    <div className={style.col_1_4}/>
                    <div className={`${style.searchInput} ${style.col_2_4}`}>
                        <SearchInput/>
                    </div>
                </Stack>
            </div>
            <Stack>
                <div className={`${style.sidebarWrapper} ${style.col_1_4}`}>
                    {
                        !sidebarHide&&
                        <Sidebar/>
                    }
                </div>
                <main className={style.col_2_4}>
                    <ReactMarkdown>
                        {markdown.content}
                    </ReactMarkdown>
                </main>
            </Stack>
            {append&&props.children}
        </div>
    )
}