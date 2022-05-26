import {FC, MutableRefObject, ReactChild, useEffect, useRef, useState} from "react";
import {CopySign, SuccessSign} from "./design-system/html-icons";

interface ICopyToClipboard {
    target: MutableRefObject<any>
    visible: boolean;
    onCopy: (value: string|null) => void
}

export const CopyToClipboard: FC<ICopyToClipboard> = (props) => {
    const {target, visible, onCopy} = props;
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if(!visible){
            setCopied(false);
        }
    }, [visible]);


    const onCopyHandler = () => {
        setCopied(false)
        if (target.current !== null && target.current.textContent !== null){
            const value = target.current.textContent;
            navigator.clipboard.writeText(value)
                .then(() => {
                    setCopied(true)
                    onCopy(value);
                })
                .catch(e => {
                    setCopied(false)
                    onCopy(null);
                })
        }
    }

    return (
        <div className="copy-to-clipboard">
            {visible && (
                <button
                    aria-label="Copy code"
                    type="button"
                    onClick={onCopyHandler}
                >
                    {copied ? (
                        <SuccessSign style={{fontSize: "large"}}/>
                    ) : (
                        <CopySign style={{fontSize: "large"}}/>
                    )}
                </button>
            )}
        </div>
    )
}