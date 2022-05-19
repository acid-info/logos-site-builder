import {DetailedHTMLProps, FC, HTMLAttributes, PropsWithoutRef} from "react";
import {LogosIcon} from "./Icon";

type TP = FC<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>

export const FullScreenIcon:TP = (props) => <LogosIcon {...props} htmlCode={`&#8865;`} />
export const PlusIcon: TP = (props) => <LogosIcon {...props} htmlCode={`&#43;`} />
export const CrossSign: TP = (props) => <LogosIcon {...props} htmlCode={`&#215;`} />