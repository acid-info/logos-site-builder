import {CodeWrapper} from "./parser-components/Code";
import {CustomMarkdownH} from "./parser-components/H";

export const logosReactMarkdownComponents = {
    code: CodeWrapper,
    h1: CustomMarkdownH,
    h2: CustomMarkdownH,
    h3: CustomMarkdownH,
    h4: CustomMarkdownH,
    h5: CustomMarkdownH,
    h6: CustomMarkdownH,
    // sup: ({node, children, ..._props}) => {
    //     return 'sup'
    //     // return node;
    //     return (
    //         <sup>
    //             <a className={"anchor"} id={_props.id}/>
    //             <a className={"ha"} href={`#${_props.id}`}>{children}</a>
    //         </sup>
    //     )
    // }
}