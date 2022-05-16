import {FC, PropsWithChildren} from "react";

import style from "./Stack.module.css";
import {Property} from "csstype";

interface IProps {
    alignItems?: Property.AlignItems
    justifyContent?: Property.JustifyContent,
    direction?: Property.FlexDirection
}

export const Stack: FC<PropsWithChildren<IProps>> =
    ({
        alignItems = "flex-start",
        justifyContent = "flex-start",
        direction = "row",
         children
     }) => (
        <div
            className={style.container}
            style={{
                display: "flex",
                alignItems,
                justifyContent,
                flexDirection: direction
            }}>
            {children}
        </div>
    )