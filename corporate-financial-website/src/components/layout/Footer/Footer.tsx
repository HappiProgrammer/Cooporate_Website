'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { title: 'Investment Management', href: '/services/investment-management' },
      { title: 'Wealth Advisory', href: '/services/wealth-advisory' },
      { title: 'Corporate Finance', href: '/services/corporate-finance' },
      { title: 'Risk Management', href: '/services/risk-management' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Leadership', href: '/about/leadership' },
      { title: 'Careers', href: '/careers' },
      { title: 'Locations', href: '/locations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Insights', href: '/insights' },
      { title: 'News', href: '/insights/news' },
      { title: 'Events', href: '/insights/events' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: siteConfig.social.linkedin,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: siteConfig.social.twitter,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
];

export function Footer({ 
  columns = defaultColumns, 
  socialLinks = defaultSocialLinks 
}: FooterProps) {
  return (
    <footer className="bg-brand-primary text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                {siteConfig.name}
              </h2>
              <p className="text-brand-accent mb-6 max-w-md">
                Leading financial advisory and investment management services for institutions and high-net-worth individuals worldwide.
              </p>
              
              {/* Newsletter signup */}
              <div className="max-w-md">
                <h3 className="text-lg font-medium text-brand-accent mb-3">Stay Updated</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-brand-secondary border border-brand-accent text-white placeholder-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                  <Button size="sm" variant="primary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-medium text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-accent hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-brand-accent text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-brand-accent hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}