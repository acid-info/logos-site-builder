import {FC, PropsWithChildren, useEffect, useRef, useState} from "react";
import {logosCustomMarkdownLanguages} from "../../../configs";
interface IProps {
}

import style from "./Style.module.css";

export const Ascii: FC<PropsWithChildren<IProps>> = (props) => {
    const {children} = props;
    const ref = useRef<HTMLDivElement>(null);
    const measureCharRef = useRef<HTMLSpanElement>(null);
    const [ready, setReady] = useState(false);
    const [rClass, setRClass] = useState<string|undefined>(undefined);

    const adjustScale = (cb: () => void = () => {}) => {
        if (ref.current && ref.current.parentElement && measureCharRef.current) {
            const measureCharBox = measureCharRef.current.getBoundingClientRect();
            const containerBox = ref.current.parentElement?.getBoundingClientRect();
            const maxGlyphsPerLine = containerBox.width / measureCharBox.width;

            //the second child is always a paragraph containing our ascii value
            const asciiContainer = ref.current.children[1] as HTMLElement
            if (asciiContainer) {
                const lines = asciiContainer.innerText.trim().split("\n")
                const targetLine = lines.sort((a,b) => b.length-a.length)[0];
                const glyphsPerTargetLine = targetLine.length;
                let scale = maxGlyphsPerLine / glyphsPerTargetLine;

                if(
                    containerBox.width*scale > (window.innerWidth*0.8)
                    ||
                    containerBox.height*scale > (window.innerHeight*0.8)
                ){
                    scale = 1;
                }

                asciiContainer.style.transform = `scale(${scale})`;
                asciiContainer.style.transformOrigin = `top left`
                ref.current.style.height = `calc(2em + ${asciiContainer.getBoundingClientRect().height}px)`
                console.log(containerBox)
                setRClass(containerBox.height>containerBox.width? "vertical": "horizontal")
                cb();
            }
        }
    }

    useEffect(() => {
        adjustScale(() => setReady(true));
        window.addEventListener("resize", () => adjustScale());
        return () => window.removeEventListener("resize", () => adjustScale());
    }, []);
    return (
        <div className={`${style.asciiContainer} ${logosCustomMarkdownLanguages.ascii} ${rClass&&rClass}`}
             style={{opacity: ready ? 1 : 0}}
             ref={ref}
        >
            <span style={{position: "fixed", opacity: 0, zIndex: -1}} ref={measureCharRef}>-</span>
            <p>{children}</p>
        </div>
    )
}