import {visit} from "unist-util-visit";
import {hasProperty} from "hast-util-has-property";
import {MermaidBlock} from "./MermaidBlock";
import {ECustomBlockNames} from "../../configs";
import {AsciiWrapper} from "../../components/ui-components/Ascii/AsciiWrapper";
import {Paragraph} from "../../components/ui-components/Paragraph";
import ReactMarkdown from "react-markdown";
import {MathJax} from "better-react-mathjax";

export default function rehypeLogos(options: any) {
    return (tree: any) => {
        visit(tree, "element", (node: any, index: any, parent: any) => {
            if (hasProperty(node, "className")) {
                const {className} = node.properties;
                const isCodeBlock = /language-(\w+)/.exec(className || '');

                if(isCodeBlock){
                    const blockName = isCodeBlock[1] as ECustomBlockNames;
                    switch (blockName){
                        case ECustomBlockNames.ASCII:{
                            parent.properties.className = `logos-${blockName}-wrapper`
                            parent.children = [{
                                "type": "element",
                                "tagName": "div",
                                "properties": {
                                    "children": <AsciiWrapper>{node.children.map((c: any) => String(c.value))}</AsciiWrapper>
                                },
                                "children": []
                            }]
                            return;
                        }

                        case ECustomBlockNames.PARAGRAPH:{
                            parent.tagName = "div";
                            parent.properties.className = `logos-${blockName} xx`
                            parent.children = [
                                {
                                    "type": "element",
                                    "tagName": "article",
                                    "properties": {
                                        "children": (
                                            <Paragraph>
                                                {
                                                    node.children.map((c: any, i: number) => (
                                                        <ReactMarkdown key={`r-${i}`}>
                                                            {String(c.value)}
                                                        </ReactMarkdown>
                                                    ))
                                                }
                                            </Paragraph>
                                        )
                                    },
                                    "children": []
                                }
                            ]
                            return;
                        }

                        case ECustomBlockNames.MERMAID:{
                            const text = node.children[0].value
                            parent.children[index] = {
                                "type": "element",
                                "tagName": "div",
                                "properties": {
                                    "children": <MermaidBlock code={text}/>,
                                    className: `logos-${blockName} xx`
                                },
                                "children": []
                            }
                            return;
                        }

                        default:{
                            parent.properties.className = "codeblock-wrapper"
                            break;
                        }
                    }
                }
                else if(className.indexOf("math") > -1){
                    const math = "$"+String(node.children[0].value)+"$";
                    const inline = className.indexOf("math-inline") > -1;
                    parent.children[index] = {
                        "type": "element",
                        "tagName": "span",
                        "properties": {
                            "children": <MathJax inline={inline}>{math}</MathJax>
                        },
                        "children": []
                    }
                }
            }
        })
    }
}