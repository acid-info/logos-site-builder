import {FC, PropsWithChildren, useState} from "react";
import {Diagram} from "./Diagram";
import {Dialog} from "../../../../../../components/design-system/Dialog/Dialog";
import {FullScreenIcon} from "../../../../../../components/design-system/html-icons";

interface IProps {
}

export const DiagramWrapper: FC<PropsWithChildren<IProps>> = (props) => {
    const {children} = props;
    const [enlarge, setEnlarge] = useState(false);

    return (
        <div className={`logos-diagram-wrapper`}>
            <Diagram>
                {children}
            </Diagram>
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
                    <Diagram>
                        {children}
                    </Diagram>
                </Dialog>
            }
        </div>
    )
}