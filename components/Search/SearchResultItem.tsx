import {IFlexSearchResult} from "../../types/flexsearch.types";
import {FC} from "react";
import {logosTemplatesUiConfig} from "../../configs/templates";
import {defaultTemplateName} from "../../configs/defaults";
import Link from "next/link";
import {ISiteConfigs} from "../../types/data.types";

const siteConfigs: ISiteConfigs = require("/public/compiled/config.json");

interface IProps{
    item: IFlexSearchResult;
    q: string;
}

export const SearchResultItem: FC<IProps> = (props) => {
    const {q, item} = props;
    //TODO move all template configs to a context and provider
    const {searchResultSnippedTextLengthPost, searchResultSnippedTextLengthPre} = logosTemplatesUiConfig[defaultTemplateName];
    const posIndex = item.content.indexOf(q);
    const snippedText = item.content.slice(
        Math.max(0, posIndex-searchResultSnippedTextLengthPre),
        Math.min(item.content.length, posIndex+q.length+searchResultSnippedTextLengthPost)
    );
    const previewText = snippedText.replace(new RegExp(q, "gi"), (match) => `<mark>${match}</mark>`);
    const p = item.id=== siteConfigs.navigation.homeTitle? "/":item.id;

    return (
        <div className={"search-result-item"}>
            <Link href={`/${p}`} scroll={false}>
                <a className={"cap"}>
                    {item.id}
                </a>
            </Link>
            <p dangerouslySetInnerHTML={{__html: previewText}} />
        </div>
    )
}