import {FC} from "react";
import {useLogosSite} from "../../../../context/SiteProvider";

import styles from "./Styles.module.css";
import {SocialMediaItem} from "../../../../components/SocialMediaItem";
import {NavItem} from "../../../../components/NavItem";

interface IProps{
    className?: string;
}


export const Footer: FC<IProps> = ({className=""}) => {
    const {config: {seo}} = useLogosSite();

    return (
        <footer className={`${styles.container} ${className}`}>
            <div className={`footer-content-container ${styles.content}`}>
                <div>
                    <p>
                        <span className={"copy-left"}>©</span><span>{new Date().getFullYear()}</span><span>{` ${seo.title}`}</span>
                        <span> - </span>
                        {
                            seo.cc?
                                <span>{seo.cc}</span>
                                :
                                <span>This page is available under the Creative Commons Attribution-ShareAlike</span>
                        }
                    </p>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.socialMedia}>
                        {
                            seo.social_media.map((sm) => (
                                <SocialMediaItem {...sm} key={sm.provider}/>
                            ))
                        }
                    </div>
                    <nav className={styles.legal}>
                        {/*<small>*/}
                        {/*    Home Technology Learn About License Terms of Use  Privacy Policy Forum Vote Cookies*/}
                        {/*</small>*/}
                        <span> | </span>
                        <NavItem p={`term-of-use`} title={"Term of Use"}/>
                        <span> | </span>
                        <NavItem p={`privacy-policy`} title={"Privacy Policy"}/>
                    </nav>
                </div>
            </div>
        </footer>
    )
}