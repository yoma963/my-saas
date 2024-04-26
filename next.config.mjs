/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildID, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias.canvas = false
        config.resolve.alias.encoding = false
        return config
    }
};

export default nextConfig;
