import {ChangeEventHandler, FC, useState} from "react";
import {SearchInput} from "../SearchInput";
import {useFlexSearch} from "../../utils/utils.search";
import {IFlexImportedData} from "../../types/flexsearch.types";
import {SearchResultItem} from "./SearchResultItem";

const flexData: IFlexImportedData = require("/public/compiled/flexsearch.json");

interface IProps{
    className?: string;
}

export const Search: FC<IProps> = (props) => {
    const {className = ""}= props;
    const [q, setQ] = useState<string|null>(null);
    const results = useFlexSearch(q, flexData.index, flexData.store, flexData.options, {suggest: true})

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setQ(event.target.value);
    }

    return (
        <div className={`logos-search-box ${className}`}>
            <SearchInput onChange={handleChange}/>
            {
                q&&
                <div className={"logos-search-box-results"}>
                    <ul>
                        {
                            results.map((item) => (
                                <li key={item.id}>
                                    <SearchResultItem item={item} q={q}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}