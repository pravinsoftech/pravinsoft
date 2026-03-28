import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pravinsoft.in'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/courses',
    '/courses/full-stack',
    '/courses/job-assistance',
    '/courses/certification',
    '/courses/trending',
    '/courses/internship',
    '/services',
    '/services/online-training',
    '/services/weekend-training',
    '/services/workshops',
    '/services/real-time-projects',
    '/services/internships',
    '/services/corporate-trainings',
    '/blog',
    '/interview-questions',
    '/placement-registration',
    '/job-assistance',
    '/privacy',
    '/terms',
    '/refund',
    '/disclaimer',
    '/cookies',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
