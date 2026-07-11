export const siteConfig = {
  name: 'Rothschild & Associates',
  description: 'Premium financial advisory and investment management services',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-company.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/yourcompany',
    github: 'https://github.com/yourcompany',
    linkedin: 'https://linkedin.com/company/yourcompany',
  },
  contact: {
    email: 'info@your-company.com',
    phone: '+1 (555) 123-4567',
    address: '123 Financial District, Suite 1000, New York, NY 10001',
  },
  social: {
    facebook: 'https://facebook.com/yourcompany',
    twitter: 'https://twitter.com/yourcompany',
    linkedin: 'https://linkedin.com/company/yourcompany',
    instagram: 'https://instagram.com/yourcompany',
  },
  metadata: {
    title: {
      default: 'Rothschild & Associates',
      template: '%s | Rothschild & Associates',
    },
    description: 'Premium financial advisory and investment management services',
    keywords: [
      'private banking',
      'investment management',
      'wealth management',
      'family office',
      'corporate finance',
      'mergers and acquisitions',
      'capital markets',
      'financial advisory',
      'institutional investing',
      'alternative investments',
    ],
    authors: [{ name: 'Rothschild & Associates Team' }],
    creator: 'Rothschild & Associates',
    publisher: 'Rothschild & Associates',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: '/',
    },
  },
  manifest: {
    name: 'Rothschild & Associates',
    short_name: 'R&A',
    description: 'Premium financial services and investment management',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;