import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

// Optimized font loading for Inter (body text)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

// Optimized font loading for Playfair Display (headings)
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: siteConfig.metadata.title.default,
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  authors: siteConfig.metadata.authors,
  creator: siteConfig.metadata.creator,
  publisher: siteConfig.metadata.publisher,
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
  alternates: siteConfig.metadata.alternates,
  openGraph: {
    title: siteConfig.metadata.title.default,
    description: siteConfig.metadata.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.metadata.title.default,
    description: siteConfig.metadata.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
    creator: '@yourcompany',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Mock navigation items - will be replaced with CMS data
  const navItems = [
    {
      title: 'Services',
      href: '/services',
      children: [
        { title: 'Investment Management', href: '/services/investment-management' },
        { title: 'Wealth Advisory', href: '/services/wealth-advisory' },
        { title: 'Corporate Finance', href: '/services/corporate-finance' },
        { title: 'Risk Management', href: '/services/risk-management' },
      ],
    },
    { title: 'About', href: '/about' },
    { title: 'Insights', href: '/insights' },
    { title: 'Careers', href: '/careers' },
    { title: 'Locations', href: '/locations' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased text-slate-900">
        <Header navItems={navItems} />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}