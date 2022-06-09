import {ISiteSeoSocialMedia} from "../types/data.types";
import {FC} from "react";

import GithubIcon from "/public/assets/icons/github.svg";
import DiscordIcon from "/public/assets/icons/discord.svg";
import TwitterIcon from "/public/assets/icons/twitter.svg";


interface IProps extends ISiteSeoSocialMedia{};

export const SocialMediaItem: FC<IProps> = (props) => (
    <span>
        {
            (() => {
                switch (props.provider) {
                    case "twitter":
                        return <a href={`https://twitter.com/${props.handler}`}
                                  className={"button"}><TwitterIcon/></a>
                    case "discord":
                        return <a href={`https://discord.com/${props.handler}`}
                                  className={"button"}><DiscordIcon/></a>
                    case "github":
                        return <a href={`https://github.com/${props.handler}`}
                                  className={"button"}><GithubIcon/></a>
                    default:
                        return null;
                }
            })()
        }
    </span>
)