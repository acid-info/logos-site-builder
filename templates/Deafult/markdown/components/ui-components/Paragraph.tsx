import {FC, PropsWithChildren} from "react";

interface IProps{

}

export const Paragraph: FC<PropsWithChildren<IProps>> = (props) => {
    const {children} = props;
    return (
        <>
            {children}
        </>
    )
}