import Link from "next/link";
import {capitalizeFirstLetter} from "../utils/utils.ui";
import {FC, PropsWithChildren} from "react";

interface IProps{
    p: string;
    title: string;
}

export const NavItem: FC<PropsWithChildren<IProps>> = ({p, title, children}) => (
    <Link href={`/${p}`} scroll={true}>
        <a title={title}>
            {
                children?
                    children:
                    capitalizeFirstLetter(title)
            }
        </a>
    </Link>
)