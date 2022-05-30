import {FC, PropsWithChildren, useEffect, useRef, useState} from "react";
import {logosCustomMarkdownLanguages} from "../../../configs";
interface IProps {
}

export const Ascii: FC<PropsWithChildren<IProps>> = (props) => {
    const {children} = props;
    const ref = useRef<HTMLDivElement>(null);
    const measureCharRef = useRef<HTMLSpanElement>(null);
    const [ready, setReady] = useState(false);

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
                console.log(asciiContainer.innerText)
                const glyphsPerTargetLine = targetLine.length;
                console.log(maxGlyphsPerLine, glyphsPerTargetLine)
                const scale = maxGlyphsPerLine / glyphsPerTargetLine;
                asciiContainer.style.transform = `scale(${scale})`;
                asciiContainer.style.transformOrigin = `top left`
                ref.current.style.height = `calc(2em + ${asciiContainer.getBoundingClientRect().height}px)`
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
        <div className={logosCustomMarkdownLanguages.ascii}
             style={{opacity: ready ? 1 : 0}}
             ref={ref}
        >
            <span style={{position: "fixed", opacity: 0, zIndex: -1}} ref={measureCharRef}>-</span>
            {children}
        </div>
    )
}