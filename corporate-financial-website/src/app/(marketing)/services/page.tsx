'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';

export default function ServicesPage() {
  const services = [
    // Main business divisions
    {
      title: 'Wealth Management',
      description: 'Comprehensive wealth planning and management services for families, entrepreneurs, and institutions with a focus on long-term wealth preservation.',
      stats: '£40bn+ Assets',
      services: ['Family Office Services', 'Estate Planning', 'Investment Management', 'Tax Advisory'],
      color: 'border-blue-500',
      href: '/services/wealth-management'
    },
    {
      title: 'Global Advisory',
      description: 'M&A, restructuring, and strategic advisory services with deep sector expertise across global markets.',
      stats: '1,200+ Transactions',
      services: ['Mergers & Acquisitions', 'Debt Advisory', 'Restructuring', 'Strategic Advisory'],
      color: 'border-green-500',
      href: '/services/global-advisory'
    },
    {
      title: 'Asset Management',
      description: 'Institutional investment solutions across equities, fixed income, and alternative asset classes with a focus on sustainable returns.',
      stats: '€35bn+ AUM',
      services: ['Equity Strategies', 'Fixed Income', 'Multi-Asset Solutions', 'Sustainable Investing'],
      color: 'border-brand-primary',
      href: '/services/asset-management'
    },
    {
      title: 'Five Arrows',
      description: 'Alternative asset management including private equity, real estate, infrastructure, and hedge funds for sophisticated investors.',
      stats: '€15bn+ Assets',
      services: ['Private Equity', 'Real Estate', 'Infrastructure', 'Hedge Funds'],
      color: 'border-brand-secondary',
      href: '/services/five-arrows'
    },
    // Individual services
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for financial institutions and corporations.',
      stats: '95% Risk Reduction',
      services: ['Financial Risk Assessment', 'Operational Risk Management', 'Regulatory Compliance', 'Crisis Management'],
      color: 'border-red-500',
      href: '/services/risk-management'
    },
    {
      title: 'Investment Management',
      description: 'Active portfolio management strategies across global markets with focus on risk-adjusted returns.',
      stats: '15% Average Returns',
      services: ['Equity Management', 'Fixed Income Strategies', 'Multi-Asset Portfolios', 'Quantitative Analysis'],
      color: 'border-indigo-500',
      href: '/services/investment-management'
    },
    {
      title: 'Corporate Finance',
      description: 'Strategic financial advisory services for corporate clients including capital structure optimization and fundraising.',
      stats: '$50B+ Capital Raised',
      services: ['Capital Structure Advisory', 'Fundraising & IPOs', 'Debt Financing', 'Financial Restructuring'],
      color: 'border-teal-500',
      href: '/services/corporate-finance'
    },
    {
      title: 'Wealth Advisory',
      description: 'Specialized advisory services for high-net-worth individuals on wealth planning and preservation strategies.',
      stats: '500+ Families Served',
      services: ['Wealth Planning', 'Investment Strategy', 'Legacy Planning', 'Family Governance'],
      color: 'border-brand-accent',
      href: '/services/wealth-advisory'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <PageContainer className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-sm text-sm font-medium mb-6">
                OUR BUSINESS DIVISIONS
              </span>
              <Display1 className="mb-6 text-center">
                Specialized Expertise Across<br/>Four Core Divisions
              </Display1>
              <Text as="p" variant="body-large" className="mb-10 max-w-2xl mx-auto text-slate-700">
                Each division brings deep specialist knowledge to serve our clients&apos; diverse financial needs with independent advice.
              </Text>
              <Button size="lg" variant="primary">
                Explore Our Divisions
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Business Divisions */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Our Services
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-3xl mx-auto">
              Comprehensive financial solutions across our core business divisions and specialized services.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" hoverable className={`h-full flex flex-col border-l-4 ${service.color}`}>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Heading level="h3" className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </Heading>
                    <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-sm">
                      {service.stats}
                    </span>
                  </div>
                  <Text variant="body" className="text-slate-600 mb-6">
                    {service.description}
                  </Text>
                  <div className="mb-6">
                    <Text variant="body-small" className="text-slate-500 font-medium mb-2">
                      Key Services:
                    </Text>
                    <ul className="space-y-1">
                      {service.services.map((subService, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                          {subService}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href={service.href}>
                  <Button variant="primary" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Why Our Clients Choose Us
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Distinctive advantages that set us apart in delivering exceptional financial outcomes.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: '25+',
                label: 'Years of Experience',
                description: 'Decades of proven track record in institutional finance'
              },
              {
                stat: '$50B+',
                label: 'Assets Under Management',
                description: 'Scale that enables superior investment opportunities'
              },
              {
                stat: '98%',
                label: 'Client Retention',
                description: 'Long-standing relationships built on trust and results'
              },
              {
                stat: '25',
                label: 'Global Offices',
                description: 'Worldwide presence for seamless client service'
              }
            ].map((metric, index) => (
              <Card key={index} variant="outlined" padding="lg" className="text-center">
                <Heading level="h3" className="text-4xl font-bold text-sky-700 mb-2">
                  {metric.stat}
                </Heading>
                <Text variant="body" className="font-semibold text-slate-900 mb-2">
                  {metric.label}
                </Text>
                <Text variant="body-small" className="text-slate-600">
                  {metric.description}
                </Text>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center text-white">
            <Heading level="h2" className="mb-6 text-white">
              Ready to Discuss Your Financial Needs?
            </Heading>
            <Text as="p" variant="body-large" className="mb-10 text-sky-100 max-w-2xl mx-auto">
              Connect with our team of specialists to explore how our services can help you achieve your financial objectives.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Our Capabilities
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}