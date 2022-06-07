import {ChangeEventHandler, FC, FormEventHandler} from "react";
import {useLogosSite} from "../context/SiteProvider";

interface IProps{
    onChange: ChangeEventHandler;
    value: string|null
}

export const SearchInput: FC<IProps> = (props) => {
    const {config: {seo: {title}}} = useLogosSite()
    return (
        <div>
            <input type={"text"}
                   placeholder={`Search ${title}`}
                   onChange={props.onChange}
                   value={props.value?props.value:""}
            />
        </div>
    )
}