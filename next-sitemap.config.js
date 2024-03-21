/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://next-hippo-blog.vercel.app/',
  generateRobotsTxt: true,
  sitemap: {
    additionalSitemaps: [], // 추가적인 Sitemap 파일이 생성되지 않도록 빈 배열 설정
    sitemapSize: 50000,
  },

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
