import {ChangeEventHandler, FC, FormEventHandler} from "react";

interface IProps{
    onChange: ChangeEventHandler;
    value: string|null
}

export const SearchInput: FC<IProps> = (props) => {
    return (
        <div>
            <input type={"text"}
                   placeholder={"Search Logos Network"}
                   onChange={props.onChange}
                   value={props.value?props.value:""}
            />
        </div>
    )
}