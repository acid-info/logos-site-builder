/** @type {import('next').NextConfig} */
const docHotReloadPlugin = require("./scripts/doc-hot-reload-plugin.js");
module.exports = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            use: ["@svgr/webpack"]
        });
        config.watchOptions.aggregateTimeout = 600;
        config.plugins.push(
            new docHotReloadPlugin()
        )
        return config;
    }
};
