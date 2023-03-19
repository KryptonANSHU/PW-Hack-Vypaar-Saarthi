module.exports = {
    env: {
        API: process.env.API,
        EMAIL_LAMBDA_URL: process.env.EMAIL_LAMBDA_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
        TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
        MAGICLINK_PUBLISHABLE_KEY: process.env.MAGICLINK_PUBLISHABLE_KEY,
        NEXT_PUBLIC_URL: process.env.FRONTEND_URL,
    },
    images: {
        domains: [
            "localhost",
            "images.unsplash.com",
    ],
    },
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: "/backend/:path*",
                destination: `${process.env.API}/:path*`,
            },
            {
                source: "/frontend/:path*",
                destination: "http://localhost:3000/:path*",
            },
        ];
    },
};
