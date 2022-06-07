import {FC} from "react";
import {useLogosSite} from "../../../../context/SiteProvider";
import {LogosLogo} from "../../../../components/design-system/logos/LogosLogo";
import {ELogosDesignSystemID} from "../../../../types/data.types";
import {Logo} from "../../../../components/design-system/logos";

import GithubIcon from "/public/assets/icons/github.svg";
import DiscordIcon from "/public/assets/icons/discord.svg";
import TwitterIcon from "/public/assets/icons/twitter.svg";

import styles from "./Styles.module.css";

interface IProps{
    className?: string;
}


export const Footer: FC<IProps> = ({className=""}) => {
    const {config: {seo, ds_id}} = useLogosSite();

    return (
        <footer className={`${styles.container} ${className}`}>
            <div className={`footer-content-container ${styles.content}`}>
                <div>
                    <p>
                        <span className={"copy-left"}>©</span><span>{new Date().getFullYear()}</span><span> Logos DAO</span>
                        <span>-</span>
                        This page is available under the Creative Commons Attribution-ShareAlike
                    </p>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.socialMedia}>
                        {
                            seo.social_media.map((sm) => {
                                return (
                                    <span key={`sm-${sm.provider}`}>
                                    {
                                        (() => {
                                            switch (sm.provider){
                                                case "twitter":
                                                    return <a href={`https://twitter.com/${sm.handler}`} className={"button"}><TwitterIcon/></a>
                                                case "discord":
                                                    return <a href={`https://discord.com/${sm.handler}`} className={"button"}><DiscordIcon/></a>
                                                case "github":
                                                    return <a href={`https://github.com/${sm.handler}`} className={"button"}><GithubIcon/></a>
                                                default:
                                                    return null;
                                            }
                                        })()
                                    }
                                </span>
                                )
                            })
                        }
                    </div>
                    <div>
                        <small>
                            Home Technology Learn About License Terms of Use  Privacy Policy Forum Vote Cookies
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    )
}