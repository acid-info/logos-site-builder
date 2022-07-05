import {ChangeEventHandler, FC, useEffect, useState} from "react";
import {SearchInput} from "../SearchInput";
import {useFlexSearch} from "../../utils/utils.search";
import {IFlexImportedData} from "../../types/flexsearch.types";
import {SearchResultItem} from "./SearchResultItem";
import {useRouter} from "next/router";

const flexData: IFlexImportedData = require("/public/compiled/flexsearch.json");

interface IProps{
    className?: string;
}

export const Search: FC<IProps> = (props) => {
    const {className = ""}= props;
    const [q, setQ] = useState<string|null>(null);
    const results = useFlexSearch((q||"").toLowerCase().trim(), flexData.index, flexData.store, flexData.options, {suggest: false})
    const {asPath} = useRouter();

    useEffect(() => {
        setQ(null)
    }, [asPath]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setQ(event.target.value.toLowerCase());
    }

    return (
        <div className={`logos-search-box ${className}`}>
            <SearchInput onChange={handleChange} value={q}/>
            {
                (q&&results.length>0)&&
                <div className={"logos-search-box-results hidden-scroll"}>
                    <button className={"search-clear-btn"} onClick={() => setQ(null)}>Clear</button>
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