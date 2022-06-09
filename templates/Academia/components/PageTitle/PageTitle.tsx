import {FC} from "react";

import style from "./Style.module.css";
interface IProps{
    title?: string
}

export const PageTitle: FC<IProps> = (props) => (
    props.title?<h1 className={`${style.container} serif`}>{props.title}</h1>:null
)