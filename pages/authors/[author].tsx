import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ILogosAuthor, ISiteConfigs, TLogosPublicDataEntry} from "../../types/data.types";
import {readFile} from "fs/promises";
import {join} from "path";
import {existsSync} from "fs";
import {logosTemplates} from "../../configs/templates";
import {defaultTemplateName} from "../../configs/defaults";

const siteConfigs: ISiteConfigs = require("../../public/compiled/config.json");

const DefaultPage: NextPage<TLogosPublicDataEntry<ILogosAuthor>> = (props) => {
    const {filename, ...markdown} = props;
    const component = logosTemplates[siteConfigs.template||defaultTemplateName];
    return component({
        markdown
    });
}

export const getStaticPaths: GetStaticPaths = async() => {
    const authorDataPath = join(process.cwd(), "public/compiled/data/authors");

    if(!existsSync(authorDataPath)){
        return {
            paths: [],
            fallback: false
        }
    }

    const authors: TLogosPublicDataEntry<ILogosAuthor>[] = JSON.parse(await readFile(authorDataPath, "utf-8"));
    console.log(authors)

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
    const authorDataPath = join(process.cwd(), "public/compiled/data/authors");

    console.log("authorDataPath", authorDataPath)

    if(!params||!params.author || !existsSync(authorDataPath)){
        return {
            notFound: true,
        }
    }


    const authors: TLogosPublicDataEntry<ILogosAuthor>[] = JSON.parse(await readFile(authorDataPath, "utf-8"));
    const author = authors.find((a) => a.metadata.short_name === params.author);

    return {
        props: {
            data: author
        }
    }
}

export default DefaultPage