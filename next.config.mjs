/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: '/clampli',
    assetPrefix: '/clampli/',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
