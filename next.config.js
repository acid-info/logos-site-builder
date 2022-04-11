/** @type {import('next').NextConfig} */
const createNextPluginPreval = require('next-plugin-preval/config');
const withNextPluginPreval = createNextPluginPreval();

const nextConfig = withNextPluginPreval({
  reactStrictMode: true,
})

module.exports = nextConfig
