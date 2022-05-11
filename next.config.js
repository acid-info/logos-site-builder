/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/content/index');
            require('./scripts/generate-theme-style');
            require('./scripts/generate-theme-assets');
        }
        config.module.rules.push({
            test: /\.svg$/,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            use: ["@svgr/webpack"]
        });
        return config;
    }
}
