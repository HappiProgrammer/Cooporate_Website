'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { Icon, IconType } from '@/components/ui/Icon';

export default function FiveArrowsPage() {
  const alternativeStrategies = [
    {
      title: 'Private Equity',
      description: 'Direct investments in private companies across growth, buyout, and venture capital strategies.',
      features: ['Growth equity', 'LBO transactions', 'Venture capital', 'Secondary purchases'],
      aum: '€8bn+'
    },
    {
      title: 'Real Estate',
      description: 'Property investments spanning commercial, residential, and specialized real estate sectors.',
      features: ['Commercial property', 'Residential development', 'Logistics centers', 'Healthcare facilities'],
      aum: '€4bn+'
    },
    {
      title: 'Infrastructure',
      description: 'Long-term infrastructure investments in essential public services and utilities.',
      features: ['Transportation', 'Energy infrastructure', 'Utilities', 'Digital infrastructure'],
      aum: '€2bn+'
    },
    {
      title: 'Hedge Funds',
      description: 'Alternative investment strategies offering diversification and absolute return potential.',
      features: ['Long/short equity', 'Credit strategies', 'Macro trading', 'Relative value'],
      aum: '€1bn+'
    }
  ];

  const investmentApproach = [
    {
      approach: 'Active Management',
      description: 'Hands-on approach with direct involvement in portfolio companies and investment decisions.'
    },
    {
      approach: 'Long-term Horizon',
      description: 'Patient capital approach focusing on sustainable value creation over extended periods.'
    },
    {
      approach: 'Value Creation',
      description: 'Focus on operational improvements and strategic initiatives to enhance portfolio company performance.'
    },
    {
      approach: 'ESG Integration',
      description: 'Comprehensive environmental, social, and governance considerations in all investment decisions.'
    }
  ];

  const caseStudies = [
    {
      title: 'Technology Platform Acquisition',
      strategy: 'Private Equity',
      value: '€1.2bn',
      outcome: 'Acquired controlling stake in European fintech platform, driving 300% revenue growth through strategic expansion and product development.'
    },
    {
      title: 'Mixed-Use Development',
      strategy: 'Real Estate',
      value: '€850m',
      outcome: 'Developed integrated mixed-use complex in prime London location, achieving 12% annual returns through rental income and capital appreciation.'
    },
    {
      title: 'Renewable Energy Portfolio',
      strategy: 'Infrastructure',
      value: '€600m',
      outcome: 'Constructed and operate solar and wind facilities across Southern Europe, generating stable long-term cash flows with positive environmental impact.'
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
            <span className="text-slate-900 font-medium">Five Arrows</span>
          </div>
        </PageContainer>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <PageContainer className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-sm text-sm font-medium mb-6">
                FIVE ARROWS
              </span>
              <Display1 className="mb-6">
                Alternative Investment<br/>Strategies & Solutions
              </Display1>
              <Text as="p" variant="body-large" className="mb-8 text-slate-700 max-w-3xl">
                Specialized alternative investment management across private equity, real estate, 
                infrastructure, and hedge funds for sophisticated investors seeking enhanced returns and diversification.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary">
                  Explore Alternative Strategies
                </Button>
                <Button size="lg" variant="outline">
                  View Investment Opportunities
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
              { value: '€15bn+', label: 'Alternative Assets' },
              { value: '75+', label: 'Active Investments' },
              { value: '18%', label: 'Average IRR' },
              { value: '4', label: 'Alternative Strategies' }
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

      {/* Alternative Strategies */}
      <section className="py-20 bg-slate-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Our Alternative Strategies
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-3xl mx-auto">
              Diversified alternative investment approaches designed to generate alpha and enhance portfolio diversification.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {alternativeStrategies.map((strategy, index) => (
              <Card key={index} variant="elevated" padding="lg" className="h-full border-l-4 border-brand-accent">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Heading level="h3" className="text-xl font-semibold text-slate-900">
                      {strategy.title}
                    </Heading>
                    <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-sm">
                      {strategy.aum} AUM
                    </span>
                  </div>
                  <Text variant="body" className="text-slate-600 mb-6">
                    {strategy.description}
                  </Text>
                  <div>
                    <Text variant="body-small" className="text-slate-500 font-medium mb-2">
                      Investment Focus:
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

      {/* Investment Approach */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Our Investment Approach
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Disciplined approach combining deep operational expertise with strategic value creation.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {investmentApproach.map((approach, index) => (
              <Card key={index} variant="outlined" padding="lg">
                <div>
                  <Heading level="h3" className="text-lg font-semibold text-slate-900 mb-3">
                    {approach.approach}
                  </Heading>
                  <Text variant="body" className="text-slate-600">
                    {approach.description}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Target Investors */}
      <section className="py-20 bg-slate-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Suitable Investors
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Our alternative investment strategies are designed for qualified investors with appropriate risk tolerance.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Institutional Investors',
                description: 'Pension funds, insurance companies, and endowments seeking alternative diversification and enhanced returns.',
                requirements: 'Minimum €10m commitment',
                icon: 'bank'
              },
              {
                title: 'High-Net-Worth Individuals',
                description: 'Sophisticated individual investors with significant capital allocation to alternatives.',
                requirements: 'Minimum €1m commitment',
                icon: 'person'
              },
              {
                title: 'Family Offices',
                description: 'Multi-generational family wealth managers seeking long-term value creation opportunities.',
                requirements: 'Minimum €5m commitment',
                icon: 'family'
              }
            ].map((investor, index) => (
              <Card key={index} variant="elevated" padding="lg" className="text-center">
                <div className="mb-4 flex justify-center">
                                  <Icon name={investor.icon as IconType} size={40} className="text-brand-primary" />
                                </div>
                <Heading level="h3" className="mb-3 text-lg font-semibold">
                  {investor.title}
                </Heading>
                <Text variant="body" className="text-slate-600 mb-4">
                  {investor.description}
                </Text>
                <div className="mt-auto pt-4">
                  <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-sm text-xs font-medium">
                    {investor.requirements}
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
              Alternative Investment Success
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Demonstrating value creation through our alternative investment strategies.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} variant="outlined" padding="lg">
                <div>
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-sm text-xs font-medium">
                      {study.strategy}
                    </span>
                    <span className="text-sm font-medium text-slate-500 ml-2">
                      {study.value}
                    </span>
                  </div>
                  <Heading level="h3" className="text-lg font-semibold text-slate-900 mb-3">
                    {study.title}
                  </Heading>
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

      {/* Risk Disclosure */}
      <section className="py-16 bg-brand-primary/5">
        <PageContainer>
          <Card variant="outlined" padding="lg">
            <div className="text-center">
              <Heading level="h3" className="text-lg font-semibold text-brand-primary mb-3">
                Important Risk Information
              </Heading>
              <Text variant="body" className="text-brand-secondary max-w-3xl mx-auto">
                Alternative investments involve significant risks including potential loss of capital, illiquidity, 
                leverage, and market volatility. These investments are suitable only for qualified investors who 
                understand and accept these risks. Past performance is not indicative of future results. 
                Please consult with your financial advisor before making investment decisions.
              </Text>
            </div>
          </Card>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center text-white">
            <Display1 className="mb-6 text-center text-white">
              Ready to Explore Alternatives?
            </Display1>
            <Text as="p" variant="body-large" className="mb-10 text-white max-w-2xl mx-auto">
              Our alternative investment team offers exclusive opportunities for qualified investors seeking enhanced returns and portfolio diversification.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
                View Current Opportunities
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}