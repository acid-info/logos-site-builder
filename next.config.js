/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { isServer }) => {
        // if (isServer) {
        //
        // }
        config.module.rules.push({
            test: /\.svg$/,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            use: ["@svgr/webpack"]
        });
        return config;
    }
}
