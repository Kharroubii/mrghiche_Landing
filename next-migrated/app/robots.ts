import { MetadataRoute } from 'next';

// Fix: Changed return type to any to resolve "Namespace 'next' has no exported member 'Robots'" error in this environment
export default function robots(): any {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://example.com/sitemap.xml',
  };
}