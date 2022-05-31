import {FC, PropsWithChildren, useState} from "react";
import {Dialog} from "../../../../../../components/design-system/Dialog/Dialog";
import {FullScreenIcon} from "../../../../../../components/design-system/html-icons";
import {Ascii} from "./Ascii";

interface IProps {
}

export const AsciiWrapper: FC<PropsWithChildren<IProps>> = (props) => {
    const {children} = props;
    const [enlarge, setEnlarge] = useState(false);

    return (
        <>
            <Ascii>
                {children}
            </Ascii>
            <FullScreenIcon onClick={() => setEnlarge(true)}
                            style={{
                                position: 'absolute',
                                bottom: `1em`,
                                right: 0,
                                fontSize: "xx-large"
                            }}
                            className={"button"}
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