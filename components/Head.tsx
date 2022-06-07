import NextHead from 'next/head'
import {FC} from "react";
import {useLogosSite} from "../context/SiteProvider";
import {useRouter} from "next/router";

export const Head: FC<any> = () => {
    const {config: {seo}, sitemap} = useLogosSite();
    const {asPath} = useRouter();

    const pageNavItem = sitemap.find(n => `/${n.path.join("/")}` === asPath);
    const twitter = seo.social_media.find(s => s.provider === "twitter");
    const pageTitle = pageNavItem? `${seo.title} | ${pageNavItem.metadata.title}` : seo.title;
    const imageUrl = `${seo.url}/compiled-assets/${seo.image}`;

    return (
        <NextHead>
            <title>{pageTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name={"description"} content={seo.description}/>

            {/* Twitter */}
            {
                twitter&&
                <>
                    <meta name="twitter:card" content="summary_large_image"  />
                    <meta name="twitter:creator" content={twitter.handler}  />
                    <meta name="twitter:site" content={`@${twitter.handler}`}/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={seo.description}/>
                    <meta name="twitter:image" content={imageUrl}/>
                </>
            }

            {/* Open Graph */}
            <meta property="og:url" content={`${seo.url}/${asPath}`} key="ogurl" />
            <meta property="og:image" content={imageUrl} key="ogimage" />
            <meta property="og:site_name" content={pageTitle} key="ogsitename" />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta property="og:description" content={seo.description} key="ogdesc" />
        </NextHead>
    )
}