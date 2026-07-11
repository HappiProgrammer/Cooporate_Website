'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';

export default function GlobalAdvisoryPage() {
  const services = [
    {
      title: 'Mergers & Acquisitions',
      description: 'Comprehensive M&A advisory services from deal origination to execution across all sectors and geographies.',
      features: ['Deal sourcing & screening', 'Valuation & structuring', 'Due diligence', 'Negotiation support'],
      stats: '850+ Transactions'
    },
    {
      title: 'Debt Advisory',
      description: 'Strategic debt structuring and refinancing solutions for corporations and financial institutions.',
      features: ['Capital structure optimization', 'Debt placement', 'Refinancing advisory', 'Credit facility structuring'],
      stats: '€120bn+ Advised'
    },
    {
      title: 'Restructuring',
      description: 'Expert guidance through corporate restructurings, workouts, and turnaround situations.',
      features: ['Financial restructuring', 'Operational turnaround', 'Distressed M&A', 'Stakeholder management'],
      stats: '150+ Restructurings'
    },
    {
      title: 'Strategic Advisory',
      description: 'High-level strategic consulting to drive business transformation and competitive advantage.',
      features: ['Growth strategy', 'Market entry', 'Partnership structuring', 'Portfolio optimization'],
      stats: '75+ Strategic Reviews'
    }
  ];

  const sectors = [
    { name: 'Financial Services', description: 'Banks, insurance, asset management' },
    { name: 'Industrial', description: 'Manufacturing, automotive, chemicals' },
    { name: 'Technology', description: 'Software, hardware, digital services' },
    { name: 'Healthcare', description: 'Pharmaceuticals, biotech, medical devices' },
    { name: 'Consumer Goods', description: 'Retail, food & beverage, luxury' },
    { name: 'Energy & Utilities', description: 'Oil & gas, renewables, utilities' }
  ];

  const caseStudies = [
    {
      title: 'Cross-Border Acquisition Financing',
      client: 'European Industrial Conglomerate',
      sector: 'Industrial',
      value: '$2.8bn',
      outcome: 'Successfully structured financing for acquisition of US-based manufacturing company, achieving optimal leverage ratio.'
    },
    {
      title: 'Complex Restructuring',
      client: 'Global Retail Chain',
      sector: 'Consumer Goods',
      value: '€1.2bn',
      outcome: 'Led comprehensive restructuring of distressed retail portfolio, preserving 80% of stakeholder value.'
    },
    {
      title: 'Strategic Partnership',
      client: 'Asian Technology Firm',
      sector: 'Technology',
      value: '$1.5bn',
      outcome: 'Facilitated strategic partnership with European counterpart, enabling market expansion and technology sharing.'
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
            <span className="text-slate-900 font-medium">Global Advisory</span>
          </div>
        </PageContainer>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <PageContainer className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                GLOBAL ADVISORY
              </span>
              <Display1 className="mb-6">
                Strategic Financial Advisory<br/>Across Global Markets
              </Display1>
              <Text as="p" variant="body-large" className="mb-8 text-slate-700 max-w-3xl">
                Independent financial advisory services delivering sophisticated solutions for complex transactions 
                across mergers & acquisitions, debt advisory, restructuring, and strategic consulting.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary">
                  Speak With Our Advisors
                </Button>
                <Button size="lg" variant="outline">
                  Download Transaction Experience
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
              { value: '1,200+', label: 'Transactions Advised' },
              { value: '€350bn+', label: 'Transaction Value' },
              { value: '47', label: 'Countries Active' },
              { value: '25+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-slate-50 rounded-2xl p-6">
                <Heading level="h3" className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
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
              Our Advisory Services
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-3xl mx-auto">
              Comprehensive financial advisory services tailored to meet the complex needs of our institutional and corporate clients.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full border-l-4 border-green-500">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Heading level="h3" className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </Heading>
                    <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
                      {service.stats}
                    </span>
                  </div>
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
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
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

      {/* Sector Expertise */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Sector Expertise
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Deep industry knowledge across key sectors where we deliver exceptional transaction outcomes.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <Card key={index} variant="outlined" padding="md" className="text-center hover:shadow-md transition-shadow">
                <Heading level="h3" className="text-lg font-semibold text-slate-900 mb-2">
                  {sector.name}
                </Heading>
                <Text variant="body-small" className="text-slate-600">
                  {sector.description}
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
              Transaction Highlights
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Demonstrating our expertise in delivering complex financial advisory solutions.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} variant="elevated" padding="lg">
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium mb-2">
                      {study.sector}
                    </span>
                    <span className="text-sm font-medium text-slate-500 ml-2">
                      {study.value}
                    </span>
                  </div>
                  <Heading level="h3" className="text-lg font-semibold text-slate-900 mb-3">
                    {study.title}
                  </Heading>
                  <Text variant="body-small" className="text-sky-700 font-medium mb-3">
                    Client: {study.client}
                  </Text>
                  <Text variant="body" className="text-slate-600 mb-4">
                    {study.outcome}
                  </Text>
                  <Button variant="link" size="sm" className="text-green-700 hover:text-green-800">
                    View Transaction Details →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center text-white">
            <Display1 className="mb-6 text-center text-white">
              Ready to Execute Your Next Transaction?
            </Display1>
            <Text as="p" variant="body-large" className="mb-10 text-green-100 max-w-2xl mx-auto">
              Our global team of advisors brings deep expertise and local market knowledge to every transaction, regardless of complexity or geography.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Discuss Your Transaction
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                Meet Our Team
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}