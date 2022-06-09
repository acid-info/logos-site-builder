import formatDate from "date-fns/format";
import {FC, useState} from "react";
import {ISiteConfigs} from "../../../../types/data.types";


export const PagePrintInfo: FC<{config: ISiteConfigs}> = ({config}) => {
    const [text, setText] = useState("");


    return (
        <div className={"page-info"}>
            <h1 style={{display: "none"}}>{config.seo.title}</h1>
            <div className={"page-info-sub"}>
                <i>{formatDate(new Date(), "MMM dd yyyy")}</i>
                <br/>
                <span>{config.seo.url.replace("https://", "")}</span>
            </div>
        </div>
    )
}