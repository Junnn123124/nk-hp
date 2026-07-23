import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // 실제 도메인을 구매하시면 이 URL을 변경해야 합니다.
  const baseUrl = 'https://nkuct-website.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
