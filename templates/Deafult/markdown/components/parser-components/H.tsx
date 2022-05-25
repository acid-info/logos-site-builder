import {HeadingComponent} from "react-markdown/lib/ast-to-react";

export const CustomMarkdownH: HeadingComponent = ({node, className, children, ..._props}) => {
    return [
        <h1 key={"h-1"}><a className={"anchor"} id={_props.id}/><a className={"ha"} href={`#${_props.id}`}>{children}</a></h1>,
        <h2 key={"h-2"}><a className={"anchor"} id={_props.id}/><a className={"ha"} href={`#${_props.id}`}>{children}</a></h2>,
        <h3 key={"h-3"}><a className={"anchor"} id={_props.id}/><a className={"ha"} href={`#${_props.id}`}>{children}</a></h3>,
        <h4 key={"h-4"}><a className={"anchor"} id={_props.id}/><a className={"ha"} href={`#${_props.id}`}>{children}</a></h4>,
        <h5 key={"h-5"}><a className={"anchor"} id={_props.id}/><a className={"ha"} href={`#${_props.id}`}>{children}</a></h5>,
        <h6 key={"h-6"}><a className={"anchor"} id={_props.id}/><a className={"ha"} href={`#${_props.id}`}>{children}</a></h6>,
    ][_props.level-1]
}