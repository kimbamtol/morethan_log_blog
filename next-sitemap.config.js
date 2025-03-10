/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://toritori3434.vercel.app', // 실제 배포된 도메인
  generateRobotsTxt: true, // robots.txt 자동 생성
  generateIndexSitemap: false, // 🚨 sitemap.xml 자동 생성 방지
  sitemapSize: 5000,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' }
    ],
    additionalSitemaps: [
      'https://toritori3434.vercel.app/sitemap-0.xml' // sitemap.xml을 제거하고 sitemap-0.xml을 직접 설정
    ]
  }
};
