'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';

export default function WealthManagementPage() {
  const services = [
    {
      title: 'Family Office Services',
      description: 'Comprehensive wealth management for ultra-high-net-worth families with dedicated family office structures.',
      features: ['Multi-generational planning', 'Investment oversight', 'Lifestyle management', 'Philanthropy advisory']
    },
    {
      title: 'Estate Planning',
      description: 'Strategic succession planning to preserve and transfer wealth across generations efficiently.',
      features: ['Trust structures', 'Tax optimization', 'Legacy planning', 'Charitable giving strategies']
    },
    {
      title: 'Investment Management',
      description: 'Customized portfolio construction aligned with family values and long-term wealth preservation goals.',
      features: ['Discretionary management', 'Sustainable investing', 'Alternative allocations', 'Risk management']
    },
    {
      title: 'Tax Advisory',
      description: 'Proactive tax planning and compliance services to optimize wealth retention and minimize liabilities.',
      features: ['International tax planning', 'Compliance services', 'Structural optimization', 'Regular reviews']
    }
  ];

  const caseStudies = [
    {
      title: 'Multi-Generational Family Wealth Transfer',
      client: 'European Industrial Dynasty',
      outcome: 'Successfully structured £2.3bn wealth transfer across three generations with minimal tax impact.'
    },
    {
      title: 'International Family Office Establishment',
      client: 'Middle Eastern Business Family',
      outcome: 'Established comprehensive family office serving 45 family members across 12 jurisdictions.'
    },
    {
      title: 'Sustainable Investment Portfolio',
      client: 'US Tech Entrepreneur Family',
      outcome: 'Transitioned $850m portfolio to 100% sustainable investments while maintaining performance targets.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-slate-50 py-4">
        <PageContainer>
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-sky-700 transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Wealth Management</span>
          </div>
        </PageContainer>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <PageContainer className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-6">
                WEALTH MANAGEMENT
              </span>
              <Display1 className="mb-6">
                Preserving and Growing<br/>Multi-Generational Wealth
              </Display1>
              <Text as="p" variant="body-large" className="mb-8 text-slate-700 max-w-3xl">
                Comprehensive wealth management services designed for families, entrepreneurs, and institutions 
                seeking to preserve, grow, and transfer wealth across generations with purpose and precision.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary">
                  Speak With Our Advisors
                </Button>
                <Button size="lg" variant="outline">
                  Download Capabilities
                </Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <PageContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '£40bn+', label: 'Assets Under Management' },
              { value: '150+', label: 'Family Offices Managed' },
              { value: '25+', label: 'Years Experience' },
              { value: '45', label: 'Countries Served' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-slate-50 rounded-2xl p-6">
                <Heading level="h3" className="text-3xl md:text-4xl font-bold text-sky-700 mb-2">
                  {stat.value}
                </Heading>
                <Text variant="body" className="text-slate-600">
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Our Wealth Management Services
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-3xl mx-auto">
              Comprehensive services tailored to meet the unique needs of high-net-worth families and individuals.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full">
                <div>
                  <Heading level="h3" className="text-xl font-semibold text-slate-900 mb-4">
                    {service.title}
                  </Heading>
                  <Text variant="body" className="text-slate-600 mb-6">
                    {service.description}
                  </Text>
                  <div>
                    <Text variant="body-small" className="text-slate-500 font-medium mb-2">
                      Key Services:
                    </Text>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Target Clients */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Who We Serve
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              We partner with discerning clients who share our commitment to excellence and long-term wealth preservation.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ultra-High-Net-Worth Families',
                description: 'Multi-generational families seeking comprehensive wealth preservation and transfer strategies.',
                icon: '👨‍👩‍👧‍👦'
              },
              {
                title: 'Entrepreneurs & Business Owners',
                description: 'Successful business leaders transitioning wealth from active enterprises to diversified portfolios.',
                icon: '💼'
              },
              {
                title: 'Institutional Investors',
                description: 'Foundations, endowments, and family trusts requiring sophisticated investment management.',
                icon: '🏛️'
              }
            ].map((client, index) => (
              <Card key={index} variant="outlined" padding="lg" className="text-center">
                <div className="text-4xl mb-4">{client.icon}</div>
                <Heading level="h3" className="mb-3 text-lg font-semibold">
                  {client.title}
                </Heading>
                <Text variant="body" className="text-slate-600">
                  {client.description}
                </Text>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Success Stories
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Real examples of how we&apos;ve helped clients achieve their wealth management objectives.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} variant="elevated" padding="lg">
                <div>
                  <Heading level="h3" className="text-lg font-semibold text-slate-900 mb-3">
                    {study.title}
                  </Heading>
                  <div className="mb-4">
                    <Text variant="body-small" className="text-sky-700 font-medium">
                      Client: {study.client}
                    </Text>
                  </div>
                  <Text variant="body" className="text-slate-600 mb-4">
                    {study.outcome}
                  </Text>
                  <Button variant="link" size="sm" className="text-sky-700 hover:text-sky-800">
                    Read Full Case Study →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center text-white">
            <Display1 className="mb-6 text-center text-white">
              Ready to Preserve Your Legacy?
            </Display1>
            <Text as="p" variant="body-large" className="mb-10 text-sky-100 max-w-2xl mx-auto">
              Connect with our wealth management specialists to discuss how we can help safeguard and grow your family&apos;s wealth for generations to come.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-700">
                Contact Our Team
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}