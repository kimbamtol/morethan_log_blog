/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://toritori3434.vercel.app', // 실제 배포된 도메인
  generateRobotsTxt: true, // robots.txt 자동 생성
  generateIndexSitemap: false, // 🚨 sitemap.xml 자동 생성 방지
  sitemapBaseFileName: 'sitemap-0', // 🚨 sitemap.xml 대신 sitemap-0.xml 사용
  exclude: ['/admin/*'], // 필요 시 제외할 경로 추가
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' }
    ],
    additionalSitemaps: [
      'https://toritori3434.vercel.app/sitemap-0.xml' // sitemap.xml 대신 sitemap-0.xml을 사용
    ]
  }
};
