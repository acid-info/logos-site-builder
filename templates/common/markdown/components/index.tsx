import Link from "next/link";
import {CodeWrapper} from "./parser-components/Code";
import {CustomMarkdownH} from "./parser-components/H";
import {Youtube} from "./ui-components/Youtube/Youtube";

export const logosReactMarkdownComponents = {
    code: CodeWrapper,
    h1: CustomMarkdownH,
    h2: CustomMarkdownH,
    h3: CustomMarkdownH,
    h4: CustomMarkdownH,
    h5: CustomMarkdownH,
    h6: CustomMarkdownH,
    //@ts-ignore
    a: ({node, children, href = "", ..._props}) => {

        if(href.indexOf("www.youtube") > -1){
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
}