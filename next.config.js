const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["i.postimg.cc", "res.cloudinary.com", "dl.airtable.com"],
    },
});

module.exports = nextConfig;
