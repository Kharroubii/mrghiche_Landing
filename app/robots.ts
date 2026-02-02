import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/signin', '/api/'],
    },
    sitemap: 'https://mrghiche.com/sitemap.xml',
  };
}