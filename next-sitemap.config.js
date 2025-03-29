/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://toritori3434.vercel.app', // 실제 배포된 도메인
  generateRobotsTxt: true, // robots.txt 자동 생성
  generateIndexSitemap: true, // 🚨 sitemap.xml 자동 생성
  sitemapBaseFileName: 'sitemap', // 🚨 sitemap.xml
  exclude: ['/admin/*'], // 필요 시 제외할 경로 추가
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' }
    ],
    additionalSitemaps: [
      'https://toritori3434.vercel.app/sitemap.xml' // sitemap.xml
    ]
  }
};
