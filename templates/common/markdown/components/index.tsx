import Link from "next/link";
import { ICreateMarkdownConfigsParams } from "../configs";
import {CodeWrapper} from "./parser-components/Code";
import {CustomMarkdownH} from "./parser-components/H";
import {Youtube} from "./ui-components/Youtube/Youtube";

export const logosReactMarkdownComponents = (params: ICreateMarkdownConfigsParams) => ({
    code: CodeWrapper,
    h1: CustomMarkdownH,
    h2: CustomMarkdownH,
    h3: CustomMarkdownH,
    h4: CustomMarkdownH,
    h5: CustomMarkdownH,
    h6: CustomMarkdownH,
    //@ts-ignore
    a: ({node, children, href = "", ..._props}) => {
        const autoEmbedYoutube = [1, "1", "true", "yes"].includes(
            params.pageMetadata.auto_embed_youtube ??
            String(params.siteConfig.markdown?.autoEmbedYoutube ?? true)
        );

        if(autoEmbedYoutube && href.indexOf("www.youtube") > -1){
            return <Youtube url={href} title={(node.children[0]||{}).value}/>
        }

        if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0){
            return <a {..._props} href={href}>{children}</a>
        }
        return (
            <Link href={href}>
                <a {..._props}>{children}</a>
            </Link>
        )
    }
})
