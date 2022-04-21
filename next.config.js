/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sidebar-data.ts');
        }
        return config;
    }
}
