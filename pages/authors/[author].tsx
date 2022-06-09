import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {
    ILogosAuthor,
    ILogosMarkdownMetadataBase,
    INavigationItemProps,
    ISiteConfigs,
    TLogosPublicDataEntry
} from "../../types/data.types";
import {readFile} from "fs/promises";
import {join} from "path";
import {existsSync} from "fs";
import {logosTemplates} from "../../configs/templates";
import {defaultTemplateName} from "../../configs/defaults";
import {AuthorProfile} from "../../templates/common/containers/AuthorProfile/AuthorProfile";
import {LogosHead} from "../../components/LogosHead";


const sidebar: INavigationItemProps[] = require("../../public/compiled/sidebar.flat.json");
const siteConfigs: ISiteConfigs = require("../../public/compiled/config.json");

interface IProps extends TLogosPublicDataEntry<ILogosAuthor&ILogosMarkdownMetadataBase>{
    pages: INavigationItemProps[]
}

const DefaultPage: NextPage<IProps> = (props) => {
    const {filename, pages, ...markdown} = props;
    const component = logosTemplates[siteConfigs.template||defaultTemplateName];
    return component({
        markdown,
        children: <>
            <LogosHead data={{
                localPath: `/data/authors/${filename}`,
                path: ["authors", markdown.metadata.short_name],
                isDir: false,
                metadata: {
                    ...markdown.metadata,
                    title: markdown.metadata.name
                },
                children: []
            }}/>
            <AuthorProfile pages={pages} data={markdown.metadata} />
            </>
    });
}

export const getStaticPaths: GetStaticPaths = async() => {
    const authorDataPath = join(process.cwd(), "public/compiled/data/authors.min.json");

    if(!existsSync(authorDataPath)){
        return {
            paths: [],
            fallback: false
        }
    }

    const authors: TLogosPublicDataEntry<ILogosAuthor>[] = JSON.parse(await readFile(authorDataPath, "utf-8"));

    return {
        paths: authors.map(a => ({
            params: {
                author: a.metadata.short_name
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async(ctx) => {
    const params = ctx.params!
    const authorDataPath = join(process.cwd(), "public/compiled/data/authors.min.json");

    if(!params||!params.author || !existsSync(authorDataPath)){
        return {
            notFound: true,
        }
    }

    const authors: TLogosPublicDataEntry<ILogosAuthor>[] = JSON.parse(await readFile(authorDataPath, "utf-8"));
    const author = authors.find((a) => a.metadata.short_name === params.author);

    if(!author){
        return {
            notFound: true,
        }
    }

    const pages = sidebar.filter((s) => s.metadata.author && s.metadata.author === author.metadata.short_name)

    return {
        props: {
            ...author,
            pages,
            toc: []
        }
    }
}

export default DefaultPage