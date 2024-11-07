/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
            },
            {
                hostname: "lh3.googleusercontent.com",
            }
        ],
        disableStaticImages: true,
    }
}

module.exports = nextConfig
