## Setup content repository
- use and clone [logos site-builder content template](https://github.com/acid-info/logos-sb-content-repo-template). 
- Create a secret for the repo and name it `VERCEL_WEBHOOK_PRODUCTION` and `VERCEL_WEBHOOK_STAGING` and add the given url as value
- 🥳


# Run locally
1. Install dependencies `yarn install` or `npm install`
2. Fetch and build data from source `yarn build:data` or `npm run build:data`
3. Start the development server  `yarn dev` or `npm run dev`
4. Visit `http://localhost:3000` to view your application

## ENV
```dotenv
CONTENT_SOURCE_TYPE=[git,]
CONTENT_SOURCE_URL="url to download (zip) git repo"
```

## limitations 
Local development is not complete yet and can only work with remote sources (Git). There is an issue listed, follow the latest state [here](https://github.com/acid-info/logos-site-builder/issues/56)
