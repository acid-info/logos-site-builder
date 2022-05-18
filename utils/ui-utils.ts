import {useEffect, useState} from "react";

type TBox = {
    width: number;
    height: number;
}

export const useWindowDimensions = () => {
    //default SSR
    const [state, setState] = useState<TBox>({width: 1200, height: 800});

    const onResize = () => {
        setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return state;
}

interface IViewportState{
    isNarrow: boolean;
}

export const useViewport = (): IViewportState => {
    const {width} = useWindowDimensions();
    return {
        isNarrow: width <= 600
    }
}