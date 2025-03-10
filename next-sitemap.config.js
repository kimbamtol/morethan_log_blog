/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://toritori3434.vercel.app', // 실제 배포된 도메인 입력
  generateRobotsTxt: true, // robots.txt 자동 생성 활성화
  sitemapSize: 5000, // 한 파일에 최대 5000개의 URL 포함 (필요에 따라 조정)
  exclude: ['/admin/*'], // 제외할 경로 (필요에 따라 수정)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' }
    ],
    sitemap: 'https://toritori3434.vercel.app/sitemap-0.xml', // sitemap.xml 대신 sitemap-0.xml 사용
  },
};
