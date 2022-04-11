import {PropsWithChildren} from "react";
import {INavigationItemProps} from "./data.types";

export type TTemplateProps<T = {}> = {
    title?: string;
    description?: string;
    tags?: string;
    append?: boolean
} & T & PropsWithChildren<T>


export interface ISidebarPropsBase{
    items: INavigationItemProps[];
}