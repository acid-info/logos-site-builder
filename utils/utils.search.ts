import { useState, useEffect, useMemo } from 'react'
import FlexSearch, {IndexOptions} from 'flexsearch'
import type {SearchOptions, IndexSearchResult, Index} from "flexsearch"
import {IFlexSearchImportedIndex, IFlexSearchImportedStore, IFlexSearchResult} from "../types/flexsearch.types";

export const useFlexSearch = (
    query: string|null,
    providedIndex: IFlexSearchImportedIndex,
    store: IFlexSearchImportedStore,
    providedIndexOption: IndexOptions<any>,
    searchOptions: SearchOptions
): IFlexSearchResult[] => {
    const [index, setIndex] = useState<null|Index>(null);

    useEffect(() => {
        const importedIndex = new FlexSearch.Index(providedIndexOption);
        Promise.all(
            providedIndex.map(async([key, value]: [string, string]) => {
                return await importedIndex.import(key, value);
            })
        ).then(() => {
            setIndex(importedIndex);
        })
    }, [providedIndex])

    return useMemo(() => {
        if (!query || !index || !store) return []
        const rawResults = index.search(query.toLowerCase(), 10, searchOptions)
        return rawResults.map((id) => ({id, content: store[id]}))
    }, [query, index, store])
}