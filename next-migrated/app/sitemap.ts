import { MetadataRoute } from 'next';

/**
 * Sitemap generator using static routes to ensure build stability.
 */
export default function sitemap(): any {
  const baseUrl = 'https://example.com';

  const staticRoutes = [
    '',
    '/who-we-are',
    '/portfolio',
    '/services',
    '/news',
    '/careers',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return staticRoutes;
}