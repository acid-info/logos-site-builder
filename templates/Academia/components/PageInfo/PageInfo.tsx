import {FC} from "react";

import formatDate from "date-fns/format";

import style from "./Style.module.css";
import {ILogosMarkdownMetadataBase} from "../../../../types/data.types";
import {PageTitle} from "../PageTitle/PageTitle";
import {NavItem} from "../../../../components/NavItem";

interface IProps {
    data: ILogosMarkdownMetadataBase;
}

export const ArticleInfo: FC<IProps> = (props) => {
    const {
        data: {
            date,
            author,
            title,
        }
    } = props;

    return (
        <div className={style.container}>
            <PageTitle title={title}/>
            <div className={"serif"}>
                {
                    date &&
                    <i>{formatDate(new Date(date), 'MMM dd yyyy')}</i>
                }
                {
                    (date && author)
                    && <i> - </i>
                }
                {
                    author &&
                    <>
                        by
                        <NavItem p={`authors/${author}`}
                                 title={author}
                        >
                            <span><i> {author}</i></span>
                        </NavItem>
                    </>
                }
            </div>
        </div>
    )
}