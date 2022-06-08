import {FC} from "react";

import style from "./Style.module.css";

interface IProps {
    url: string;
    title: string;
}

function getYouTubeGetID(url: string): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : "";
}


export const Youtube: FC<IProps> = ({url, title}) => {
    return (
        <span className={`${style.container} iframe`}>
            <span className={style.iframe}>
                <iframe width="700px"
                        src={`http://www.youtube.com/embed/${getYouTubeGetID(url)}`}
                        frameBorder="0"
                        allowFullScreen
                />
            </span>
            <small>{title}</small>
        </span>
    )
}