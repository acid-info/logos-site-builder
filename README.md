# Run locally
1. Install dependencies `yarn install` or `npm install`
2. Fetch and build data from source `yarn build:data` or `npm run build:data`
3. Start the development server  `yarn dev` or `npm run dev`
4. Visit `http://localhost:3000` to view your application

## Setup content repository
- use and clone [logos site-builder content template](https://github.com/acid-info/logos-sb-content-repo-template).

## ENV
```dotenv
CONTENT_SOURCE_TYPE=[git,]
CONTENT_SOURCE_URL="url to download (zip) git repo"
```

## limitations
Local development is not complete yet and can only work with remote sources (Git). There is an issue listed, follow the latest state [here](https://github.com/acid-info/logos-site-builder/issues/56)

# Deployment
We host and deploy using vercel. And we trigger the build using Github actions.
- Create a secret for the repo and name it `VERCEL_WEBHOOK_PRODUCTION` and `VERCEL_WEBHOOK_STAGING` and add the given url as value.


# Overview

## Problem statement & background

Initially, we started with developing the design system which we are going to use to build not only the Logos website but hopefully across all other web-based projects falling under the Logos branding. However, during the process of developing the Design System, Ned came up with the idea of making a modular system that can build and create all those products for us and other people with a design that looks very similar to documentation websites. At this moment we considered using existing documentation builder frameworks such as [docusaurus.io](http://docusaurus.io/). But this would come with one big drawback which is a limitation in **customisability and expandability**

> While we might have a clear design at the moment, there will be many hidden corners and functionalities which require a high level of customization, and hence using an existing framework that is designed for only documentation website making, will not cut it. It is important to put a difference between a UI that looks like a documentation website with a website that is supposed to only function as documentation. In our case, the Logos website and all its related projects will have almost the same documentation-looking UI, but with lots of different features and functionalities and probably occasional pages with a customized design underneath.
>

Besides that, the Design System is not and should not be involved with any content manner. It is a decoupled system that only delivers a unique design and style all over the projects.

## Proposed work

Given all this, the idea comes from an always tempting question; **why not build our own “site builder”?**  Not a library but a code-base-like framework that embeds our Design System and takes care of most of the needs you need to have a 2022 website.

### Functionalities & features

<aside>
💡 In case any of the following sounds abstract and/or you would need more reference, please have a look at the next block **Implementation & architect,** and also the diagrams.

</aside>

- **CMS integration**; we can develop one or multiple modules which can inject content into the website from different sources such as Github, [Gitea.io](http://Gitea.io), [Notion.so](http://Notion.so), or local files.
- **Content containers**; we can see this as what I guess Ned has been referring to as “modules”. I can see them as pre-config components which render a particular content with a particular structure and sometimes with built-in functionality. (e.g; SideBar, BodyContent, NFT module, etc...)
- **Page templating;** this is where we can define pre-composed layout templates (including responsive versions) At the moment we only have one layout which looks like the one below👇 . But the idea is to design more along the way.

  ![Screenshot 2022-04-04 at 13.12.29.png](/public/assets/docs/Screenshot_2022-04-04_at_13.12.29.png)

- **Multi-language** (TBD)
    - Using internationalized routing with [i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization#Naming)
- **Other universal and built-in functionalities**
    - Cross pages search
    - Inside page search
    - Wallet connection?
    - Token  / NFT creation module
    - Crowdfunding module
    - ENS username registration module?
    - what else?

## Implementation & architect

The site builder framework will go hand in hand with the design system. While the design system is in charge of delivering the UI design and keeping it constant across the ecosystem, the site-builder is in charge of delivering the content management as well as the page templating and eventually building the website.

### High-level concept diagram

![Logos Sitemap - Diagram - Logos branding software landscape (1).jpg](/public/assets/docs/Logos_Sitemap_-_Diagram_-_Logos_branding_software_landscape_(1).jpg)

### High level architect

The aim is to not create a library but more a codebase that functions as a framework, something like a template with built-in modules.

- Therefore we choose [NextJs](https://nextjs.org/) (a react framework) as the main framework to build on top of it. Nextjs comes with a set of great functionalities and optimizations which guarantees the entire process of development to go smooth and flawless. Besides that, it is open-source with a great active community.
- We choose `Typescript` over `Javascript` just because we want to be safe 😀 . Apart from all the great things we know about TS, using typescript enables us to be consistent across all the projects (type definitions as one source of truth), and different modules know how to communicate with each other.
- For each of the content providers (Github, notion, etc) we will implement one or multiple NPM packages. This can give easy options for each team to easily fetch content from the source of their choice.
    - Apart from the pre-defined page templates, using NextJS makes it easy to easily add more custom pages and/or customized and expand each of these templates.
    - Example 1 - Expand a template

    ```tsx
    <Template1 sidebar={MyCustomSideBar}>
    	<ACustomHeader/>
    </Template1>
    ```

    - Example 2 - create a customised pages

    ```tsx
    const MyCustomizedPageRender: IProps<D> = ({data}) => (
    	<div>
    		<Templates.Sidebar content={data.sidebar}/>
    		<MyCustomBodyComponent content={data.content}/>
    	</div>
    )
    
    export default withContent<D>(MyCustomizedPageRender);
    ```


![Logos Sitemap - Diagram - Copy of Logos branding software landscape (1).jpg](/public/assets/docs/Logos_Sitemap_-_Diagram_-_Copy_of_Logos_branding_software_landscape_(1).jpg)

# Scope

## Requirements
- [x] Markdown parser  (Remark)
- [x] Code block highlight and theming
- [] Works with notion as well?
- [x] Theme builder (color pallets)
- [x] search fn

## Future work

## Non-requirements

# Designs

# Related documents

---

