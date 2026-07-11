'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { Icon, IconType } from '@/components/ui/Icon';

export default function AssetManagementPage() {
  const strategies = [
    {
      title: 'Equity Strategies',
      description: 'Active and passive equity management across global markets with focus on sustainable growth.',
      features: ['Global equities', 'Emerging markets', 'Sector specialists', 'ESG integration'],
      aum: '€18bn+'
    },
    {
      title: 'Fixed Income',
      description: 'Comprehensive fixed income solutions spanning government bonds, corporate credit, and alternatives.',
      features: ['Government bonds', 'Corporate credit', 'High yield', 'Inflation-linked securities'],
      aum: '€12bn+'
    },
    {
      title: 'Multi-Asset Solutions',
      description: 'Diversified portfolios combining multiple asset classes for optimal risk-adjusted returns.',
      features: ['Balanced portfolios', 'Target date funds', 'Absolute return strategies', 'Risk parity approaches'],
      aum: '€8bn+'
    },
    {
      title: 'Sustainable Investing',
      description: 'ESG-integrated investment strategies delivering competitive returns with positive impact.',
      features: ['Sustainable equities', 'Green bonds', 'Impact investing', 'Climate transition'],
      aum: '€7bn+'
    }
  ];

  const investmentPhilosophy = [
    {
      principle: 'Long-term Perspective',
      description: 'Focus on sustainable, long-term value creation rather than short-term market movements.'
    },
    {
      principle: 'Risk Management',
      description: 'Comprehensive risk assessment and monitoring to protect and preserve capital.'
    },
    {
      principle: 'Research Driven',
      description: 'Deep fundamental research and analysis informing all investment decisions.'
    },
    {
      principle: 'ESG Integration',
      description: 'Environmental, social, and governance factors integrated across all investment processes.'
    }
  ];

  const caseStudies = [
    {
      title: 'Pension Fund Transition',
      client: 'UK Public Pension Scheme',
      assets: '€5.2bn',
      outcome: 'Successfully transitioned traditional portfolio to ESG-integrated strategy while improving risk-adjusted returns by 15%.'
    },
    {
      title: 'Insurance Portfolio Restructuring',
      client: 'European Insurance Group',
      assets: '€3.8bn',
      outcome: 'Redesigned fixed income allocation reducing duration risk while maintaining yield targets in rising rate environment.'
    },
    {
      title: 'Endowment Fund Diversification',
      client: 'Ivy League University',
      assets: '€2.1bn',
      outcome: 'Implemented multi-asset strategy increasing diversification and achieving 8% annualized returns over 5-year period.'
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
            <span className="text-slate-900 font-medium">Asset Management</span>
          </div>
        </PageContainer>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <PageContainer className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-sm text-sm font-medium mb-6">
                ASSET MANAGEMENT
              </span>
              <Display1 className="mb-6">
                Institutional Investment<br/>Solutions Worldwide
              </Display1>
              <Text as="p" variant="body-large" className="mb-8 text-slate-700 max-w-3xl">
                Professional asset management services delivering consistent, risk-adjusted returns through 
                diversified strategies across equities, fixed income, and alternative investments.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary">
                  Explore Investment Strategies
                </Button>
                <Button size="lg" variant="outline">
                  View Performance Reports
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
              { value: '€35bn+', label: 'Assets Under Management' },
              { value: '25+', label: 'Years Experience' },
              { value: '15', label: 'Investment Strategies' },
              { value: '35', label: 'Countries Invested' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-brand-primary/5 p-6">
                <Heading level="h3" className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
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

      {/* Investment Strategies */}
      <section className="py-20 bg-slate-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Our Investment Strategies
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-3xl mx-auto">
              Diversified investment approaches designed to meet varying risk appetites and return objectives.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full border-l-4 border-brand-primary">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Heading level="h3" className="text-xl font-semibold text-slate-900">
                      {strategy.title}
                    </Heading>
                    <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                      {strategy.aum}
                    </span>
                  </div>
                  <Text variant="body" className="text-slate-600 mb-6">
                    {strategy.description}
                  </Text>
                  <div>
                    <Text variant="body-small" className="text-slate-500 font-medium mb-2">
                      Key Components:
                    </Text>
                    <ul className="space-y-1">
                      {strategy.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span>
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

      {/* Investment Philosophy */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Our Investment Philosophy
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Fundamental principles guiding our approach to institutional asset management.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {investmentPhilosophy.map((principle, index) => (
              <Card key={index} variant="outlined" padding="lg">
                <div>
                  <Heading level="h3" className="text-lg font-semibold text-slate-900 mb-3">
                    {principle.principle}
                  </Heading>
                  <Text variant="body" className="text-slate-600">
                    {principle.description}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Target Clients */}
      <section className="py-20 bg-slate-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Institutional Investors
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              We serve a diverse range of institutional clients with sophisticated investment needs.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pension Funds',
                description: 'Large-scale retirement savings pools requiring long-term, stable returns with careful risk management.',
                icon: 'bank',
                requirements: '€10bn+ AUM'
              },
              {
                title: 'Insurance Companies',
                description: 'Insurance portfolios needing liability-matching strategies and consistent income generation.',
                icon: 'shield',
                requirements: '€5bn+ AUM'
              },
              {
                title: 'Endowments & Foundations',
                description: 'Charitable organizations requiring perpetual capital growth while supporting ongoing missions.',
                icon: 'building',
                requirements: '€1bn+ AUM'
              }
            ].map((client, index) => (
              <Card key={index} variant="elevated" padding="lg" className="text-center">
                <div className="mb-4 flex justify-center">
                                  <Icon name={client.icon as IconType} size={40} className="text-brand-primary" />
                                </div>
                <Heading level="h3" className="mb-3 text-lg font-semibold">
                  {client.title}
                </Heading>
                <Text variant="body" className="text-slate-600">
                  {client.description}
                </Text>
                <div className="mt-auto pt-4">
                  <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                    {client.requirements}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Institutional Success Stories
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Examples of how we've helped institutional investors achieve their long-term objectives.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} variant="outlined" padding="lg">
                <div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                      {study.assets} AUM
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
                  <Button variant="link" size="sm" className="text-brand-primary hover:text-brand-secondary">
                    View Investment Details →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center text-white">
            <Display1 className="mb-6 text-center text-white">
              Ready to Optimize Your Portfolio?
            </Display1>
            <Text as="p" variant="body-large" className="mb-10 text-white max-w-2xl mx-auto">
              Our asset management team delivers institutional-quality investment solutions tailored to your specific objectives and risk tolerance.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
                View Investment Strategies
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}