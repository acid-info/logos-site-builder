import {FC, PropsWithChildren, useState} from "react";
import CloseIcon from "/public/assets/sidebar-icon-close.svg";
import {Diagram} from "./Diagram";

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
            <button
                className={"button"}
                onClick={() => setEnlarge(true)}
                dangerouslySetInnerHTML={{__html: `&#128269;`}}
                style={{
                    position: 'absolute',
                    bottom: `2em`,
                    right: 0
                }}/>
            {
                enlarge&&
                <div className={"enlarge-container"}>
                    <div className={"close-icon button"} onClick={() => setEnlarge(false)}>
                        <CloseIcon/>
                    </div>
                    <div className={"enlarge-container-innerwrapper"}>
                        <Diagram>
                            {children}
                        </Diagram>
                    </div>
                </div>
            }
        </div>
    )
}