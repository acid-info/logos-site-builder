import Link from "next/link";
import {FC} from "react";

interface IProps{}

export const Header: FC<IProps> = (props) => {
    return (
        <header>
            <Link href={"/"}>
                <a>LOGOS</a>
            </Link>
        </header>
    )
}