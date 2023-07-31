/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SHOPIFY_STORE_URL: process.env.SHOPIFY_STORE_URL,
        SHOPIFY_API_PUBLIC_ACCESS_TOKEN: process.env.SHOPIFY_API_PUBLIC_ACCESS_TOKEN,
        SHOPIFY_API_PRIVATE_ACCESS_TOKEN: process.env.SHOPIFY_API_PRIVATE_ACCESS_TOKEN
    },
    images: {
        remotePatterns: [
            {hostname: 'cdn.shopify.com' },
            {hostname: 'images.unsplash.com/'}
        ]
    },
    // experimental: {
    //     serverActions: true
    // }
}


module.exports = nextConfig
