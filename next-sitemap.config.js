/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://next-hippo-blog.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 10000,
  changefreq: 'daily',
  priority: 1,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [''],
      },
    ],
  },
}
