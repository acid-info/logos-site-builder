import {ChangeEventHandler, FC, FormEventHandler} from "react";

interface IProps{
    onChange: ChangeEventHandler;
}

export const SearchInput: FC<IProps> = (props) => {
    return (
        <div>
            <input type={"text"}
                   placeholder={"Search Logos Network"}
                   onChange={props.onChange}
            />
        </div>
    )
}