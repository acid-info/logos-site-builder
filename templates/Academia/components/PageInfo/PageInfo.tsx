import {FC} from "react";

import formatDate from "date-fns/format";

import style from "./Style.module.css";
import {ILogosMarkdownMetadataBase} from "../../../../types/data.types";
import {PageTitle} from "../PageTitle/PageTitle";

interface IProps {
    data: ILogosMarkdownMetadataBase;
}

export const PageInfo: FC<IProps> = (props) => {
    const {
        data: {
            date,
            author,
            title
        }
    } = props;

    return (
        <div className={style.container}>
            <PageTitle title={title}/>
            <div className={"serif"}>
                {
                    date &&
                    <i>{formatDate(new Date(date), 'MMM dd LLLL')}</i>
                }
                {
                    (date && author)
                    && <i> - </i>
                }
                {
                    author &&
                    <i>{author}</i>
                }
            </div>
        </div>
    )
}