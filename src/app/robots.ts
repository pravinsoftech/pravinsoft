import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/login/', '/student/'],
    },
    sitemap: 'https://www.pravinsoft.in/sitemap.xml',
  }
}
