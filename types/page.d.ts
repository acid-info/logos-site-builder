import {NextPage} from "next";
import {ComponentType, ReactElement, ReactNode} from "react";

export type PageComponent<P = {}> = NextPage<P> & {
    layout?: (page: ReactElement) => ReactNode
    // layout?: ComponentType
}