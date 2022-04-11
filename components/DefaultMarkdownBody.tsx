import {FC} from "react";
import ReactMarkdown from "react-markdown";

interface IProps{
    contentMD: string;
}

export const DefaultMarkdownBody: FC<IProps> = ({contentMD}) => (
    <ReactMarkdown remarkPlugins={[]}>
        {contentMD}
    </ReactMarkdown>
)