import {visit} from "unist-util-visit";
import {hasProperty} from "hast-util-has-property";
import {MermaidBlock} from "./MermaidBlock";
import {ECustomBlockNames} from "../../configs";
import {AsciiWrapper} from "../../components/ui-components/Ascii/AsciiWrapper";
import {Paragraph} from "../../components/ui-components/Paragraph";
import ReactMarkdown from "react-markdown";

export default function rehypeLogos(options: any) {
    return (tree: any) => {
        visit(tree, "element", (node: any, index: any, parent: any) => {
            if (hasProperty(node, "className")) {
                const {className} = node.properties;
                const match = /language-(\w+)/.exec(className || '')

                if(match){
                    const blockName = match[1] as ECustomBlockNames;

                    switch (blockName){
                        case ECustomBlockNames.ASCII:{
                            parent.children[index] = {
                                "type": "element",
                                "tagName": "div",
                                "properties": {
                                    "children": <AsciiWrapper>{node.children.map((c: any) => String(c.value))}</AsciiWrapper>,
                                    className: `logos-${blockName}`
                                },
                                "children": []
                            }
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
            }
        })
    }
}