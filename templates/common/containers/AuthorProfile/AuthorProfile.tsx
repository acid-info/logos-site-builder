import {FC} from "react";

interface IProps{
    className?: string;
    data: ILogosAuthor;
    pages: INavigationItemProps[];
}

import styles from "./Styles.module.css";

import {ILogosAuthor, INavigationItemProps} from "../../../../types/data.types";
import Link from "next/link";
import {capitalizeFirstLetter} from "../../../../utils/utils.ui";
import formatDate from "date-fns/format";
import {SocialMediaItem} from "../../../../components/SocialMediaItem";

export const AuthorProfile: FC<IProps> = ({className="", data, pages}) => {
    const keys = Object.keys(data);
    const socialMedia = ["twitter", "discord", "github"]
        .filter((a) => keys.indexOf(a) > -1)
        //@ts-ignore
        .map((provider: string) => ({provider, handler: data[provider]}));

    return (
        <div className={`${styles.container} ${className}`}>
            <h2>{data.name}</h2>
            <div>
                {
                    socialMedia.map((sm) => <SocialMediaItem {...sm} key={sm.provider}/>)
                }
            </div>
            <ul>
                {
                    pages.map((page) => (
                        <li key={page.localPath}>
                            {
                                page.metadata.date&&
                                <i><small>{formatDate(new Date(page.metadata.date), "MMM dd yyyy")}</small></i>
                            }
                            <br/>
                            <Link href={`/${page.path.join("/")}`} scroll={true}>
                                <a title={page.metadata.title}>
                                    {capitalizeFirstLetter(page.metadata.title)}
                                </a>
                            </Link>
                            {
                                page.metadata.summary&&
                                <p>
                                    {page.metadata.summary}
                                </p>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}