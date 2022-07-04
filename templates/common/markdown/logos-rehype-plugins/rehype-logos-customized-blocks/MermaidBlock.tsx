import React, {memo, useEffect, useRef} from "react";
import mermaidAPI from 'mermaid'
import {v4 as uuid} from 'uuid'
import {useLogosTheme} from "../../../../../context/ThemeProvider";
import {LogosTheme} from "../../../../../types/theme.types";
import EThemeMode = LogosTheme.EThemeMode;
import {useLogosSite} from "../../../../../context/SiteProvider";

export const MermaidBlock = memo((props: { code: string }) => {
    const ref: React.Ref<any> | null = useRef(null)
    const {mode} = useLogosTheme();
    useEffect(() => {
        mermaidAPI.initialize({
            // @ts-ignore
            theme: mode===EThemeMode.LIGHT? "base": "dark",
        })
        if (ref.current != null) {
            mermaidAPI.render("id" + uuid().replaceAll(/[\s|-]/g, ""),
                props.code,
                svgCode => {
                    ref.current.innerHTML = svgCode
                })
        }
    }, [mode])
    return <div ref={ref}/>;
})