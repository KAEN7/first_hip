/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_DOMAIN,
    changefreq: "daily",
    priority: 1,
    sitemapSize: 7000,
    generateRobotsTxt: true,
    exclude: [],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/exclude"],
            },
        ],
    },
};
