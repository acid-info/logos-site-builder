import {FC} from "react";
import {TTemplateProps} from "../types/ui.types";
import {Sidebar} from "../components/Sidebar";
import ReactMarkdown from "react-markdown";
import {IMarkdown} from "../types/data.types";

interface IProps{
    markdown: IMarkdown<any>;
}

export const DefaultTemplate_Markdown: FC<TTemplateProps<IProps>> = (props) => {
    const {append = false, markdown} = props;

    return (
        <>
            <Sidebar/>
            <main>
                {!append&&props.children}
                <ReactMarkdown>
                    {markdown.content}
                </ReactMarkdown>
                {append&&props.children}
            </main>
        </>
    )
}