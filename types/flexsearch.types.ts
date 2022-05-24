import {IndexOptions, Id} from "flexsearch";

export interface IFlexSearchImportedIndex {
    [key: string]: any;
}

export interface IFlexSearchImportedStore{
    [key: string]: any;
}

export interface IFlexSearchResult{
    id: Id;
    content: string;
}

export interface IFlexImportedData{
    index: IFlexSearchImportedIndex,
    store: IFlexSearchImportedStore,
    options: IndexOptions<string>;
}

