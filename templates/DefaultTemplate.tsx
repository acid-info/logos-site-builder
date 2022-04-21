import {FC} from "react";
import {TTemplateProps} from "../types/ui.types";
import {Sidebar} from "../components/Sidebar";
import ReactMarkdown from "react-markdown";
import {IMarkdown} from "../types/data.types";
import {Header} from "../components/Header";

interface IProps{
    markdown: IMarkdown<any>;
}

export const DefaultTemplate_Markdown: FC<TTemplateProps<IProps>> = (props) => {
    const {append = false, markdown} = props;

    return (
        <>
            <Header/>
            {!append&&props.children}
            <Sidebar/>
            <main>
                <ReactMarkdown>
                    {markdown.content}
                </ReactMarkdown>
            </main>
            {append&&props.children}
        </>
    )
}