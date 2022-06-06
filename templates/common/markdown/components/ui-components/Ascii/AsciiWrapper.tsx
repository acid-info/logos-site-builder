import {FC, PropsWithChildren, useState} from "react";
import {Dialog} from "../../../../../../components/design-system/Dialog/Dialog";
import {FullScreenIcon} from "../../../../../../components/design-system/html-icons";
import {Ascii} from "./Ascii";

interface IProps {
}

import style from "./Style.module.css";

export const AsciiWrapper: FC<PropsWithChildren<IProps>> = (props) => {
    const {children} = props;
    const [enlarge, setEnlarge] = useState(false);

    return (
        <>
            <Ascii>
                {children}
            </Ascii>
            <FullScreenIcon onClick={() => setEnlarge(true)}
                            className={`${style.fullscreenButton} button`}
            />
            {
                enlarge&&
                <Dialog onClose={() => setEnlarge(false)}>
                    <Ascii>
                        {children}
                    </Ascii>
                </Dialog>
            }
        </>
    )
}