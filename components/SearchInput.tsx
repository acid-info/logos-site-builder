import {FC} from "react";

interface IProps{
}

export const SearchInput: FC<IProps> = (props) => {
    return (
        <div>
            <input type={"text"}
                   placeholder={"Search Logos Network"}
            />
        </div>
    )
}