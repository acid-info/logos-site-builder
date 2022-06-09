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

type CompiledMatches = {snipped: string, pos: number[], qrs: string[]};

export const SearchResultItem: FC<IProps> = (props) => {
    const {q, item} = props;

    //TODO move all template configs to a context and provider
    const {searchResultSnippedTextLengthPost, searchResultSnippedTextLengthPre} = logosTemplatesUiConfig[defaultTemplateName];
    const matches = q.split(" ");

    let matchesSnipped: CompiledMatches[] = [];

    const buildPreviewText = (raw: string, qs: string[]) => {
        return `<span class="snipped-text">${
            qs.map((_q) => raw.replace(new RegExp(_q, "gi"), (match) => `<mark>${match}</mark>`))
        }</span>`
    }

    matches.forEach((word) => {
        const qs = word.replace(/[^a-z0-9áéíóúñü,_-]/gim, " ")
        const posIndex = item.content.indexOf(word);

        let startPos = Math.max(0, posIndex-searchResultSnippedTextLengthPre);
        let endPos = Math.min(item.content.length, posIndex+word.length+searchResultSnippedTextLengthPost)
        const existingRangeIndex = matchesSnipped.findIndex((m) => startPos>=m.pos[0] && endPos <= m.pos[1]);

        if(existingRangeIndex > -1){
            const existingRange = matchesSnipped[existingRangeIndex];
            startPos = existingRange.pos[0];
            endPos =  existingRange.pos[1];
            let snippedPart = item.content.slice(startPos, endPos);
            matchesSnipped[existingRangeIndex] = {
                ...existingRange,
                snipped: buildPreviewText(snippedPart, [...existingRange.qrs, qs]),
                qrs: [...existingRange.qrs, qs]
            }
        }else{
            let snippedPart = item.content.slice(startPos, endPos);
            matchesSnipped.push({
                pos: [startPos, endPos],
                snipped: buildPreviewText(snippedPart, [qs]),
                qrs: [qs]
            })
        }
    });

    const p = item.id=== siteConfigs.navigation.home? "/":item.id;

    return (
        <div className={"search-result-item"}>
            <Link href={`/${p}`} scroll={false}>
                <a className={"cap"}>
                    {item.id}
                </a>
            </Link>
            <p className={"serif"}
               dangerouslySetInnerHTML={{
                   __html: matchesSnipped.map((s) => s.snipped).join(" ... ")
                }}
            />
        </div>
    )
}