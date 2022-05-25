import {FC} from "react";
import {useLogosSite} from "../context/SiteProvider";
import {LogosLogo} from "./design-system/logos/LogosLogo";
import {ELogosDesignSystemID} from "../types/data.types";
import {Logo} from "./design-system/logos";

interface IProps{
    className?: string;
}

export const Footer: FC<IProps> = ({className=""}) => {
    const {config: {seo, ds_id}} = useLogosSite();

    return (
        <footer className={className}>
            <div className={"footer-logos-container"}>
                <LogosLogo/>
                {
                    ds_id!==ELogosDesignSystemID.LOGOS&&
                    <Logo dsid={ds_id}/>
                }
            </div>
            <div>
                <p>
                    <span>©</span><span>{new Date().getFullYear()}</span><span> Logos DAO</span>
                </p>
                <p>
                    Gentoo is a trademark of the Gentoo Foundation, Inc. The contents of this document, unless otherwise expressly stated, are licensed under the CC-BY-SA-3.0 license. The Gentoo Name and Logo Usage Guidelines apply.
                </p>
                <br/>
                <div>
                    {
                        seo.social_media.map((sm) => {
                            switch (sm.provider){
                                case "twitter":
                                    return <span><a href={`https://twitter.com/${sm.handler}`}>Twitter</a></span>
                                default:
                                    return null;
                            }
                        })
                    }
                </div>
            </div>
        </footer>
    )
}