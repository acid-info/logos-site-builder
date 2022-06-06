import {FC, memo, PropsWithChildren, useRef, useState} from "react";

export const DefaultImage = memo(({node, inline, className, children, ...props}: any) => {
    return (
        <figure {...props}>
            <img/>
            {
                (props.alt||props.title)&&
                <figcaption>{props.alt||props.title}</figcaption>
            }
        </figure>
    )
})