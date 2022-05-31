import React, {useEffect, useRef} from "react";
import mermaidAPI from 'mermaid'
import {v4 as uuid} from 'uuid'

export const MermaidBlock = React.memo((props: { code: string }) => {
    const ref: React.Ref<any> | null = useRef(null)
    useEffect(() => {
        if (ref.current != null) {
            mermaidAPI.render("id" + uuid().replaceAll(/[\s|-]/g, ""),
                props.code,
                svgCode => ref.current.innerHTML = svgCode)
        }
    }, [])
    return <div ref={ref}/>;
})