import NextHead from 'next/head'
import {FC} from "react";
import {useLogosSite} from "../context/SiteProvider";
import {useRouter} from "next/router";

interface IProps{

}

export const Head: FC<IProps> = () => {
    const {config: {seo, navigation: {home}}, sitemap} = useLogosSite();
    const {asPath} = useRouter();
    const pageNavItem = sitemap.find(n => `/${n.path.join("/")}` === asPath);

    const isHome = pageNavItem && pageNavItem.localPath === home;

    const pageTitle = pageNavItem && !isHome? pageNavItem.metadata.title : seo.title;
    const pageImagePath = pageNavItem&&pageNavItem.metadata.image? pageNavItem.metadata.image : seo.image;
    const pageImageUrl = `${seo.url}/compiled-assets/${pageImagePath}`;
    const pageUrl = `${seo.url}/${asPath}`;
    const pageDescription = pageNavItem&&pageNavItem.metadata.summary? pageNavItem.metadata.summary: seo.description;

    const twitter = seo.social_media.find(s => s.provider === "twitter");

    return (
        <NextHead>
            <title>{pageTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name={"description"} content={pageDescription}/>

            {/* Twitter */}
            {
                twitter&&
                <>
                    <meta name="twitter:card" content="summary_large_image"  />
                    <meta name="twitter:creator" content={twitter.handler}  />
                    <meta name="twitter:site" content={`@${twitter.handler}`}/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={pageDescription}/>
                    <meta name="twitter:image" content={pageImageUrl}/>
                </>
            }

            {/* Open Graph */}
            <meta property="og:url" content={pageUrl} key="ogurl" />
            <meta property="og:image" content={pageImageUrl} key="ogimage" />
            <meta property="og:site_name" content={pageTitle} key="ogsitename" />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta property="og:description" content={pageDescription} key="ogdesc" />
        </NextHead>
    )
}