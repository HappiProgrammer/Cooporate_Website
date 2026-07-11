'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { CorporateBackgroundSection } from '@/components/content/CorporateBackgroundSection';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'market-commentary', name: 'Market Commentary' },
    { id: 'research', name: 'Research' },
    { id: 'economic-outlook', name: 'Economic Outlook' },
    { id: 'investment-strategy', name: 'Investment Strategy' },
    { id: 'esg', name: 'ESG & Sustainability' },
  ];

  const articles = [
    {
      title: '2024 Market Outlook: Navigating Uncertainty with Conviction',
      excerpt: 'As we enter 2024, markets face unprecedented challenges from geopolitical tensions, central bank policies, and structural economic shifts. Our analysis suggests a diversified approach remains paramount.',
      date: 'January 15, 2024',
      category: 'Market Commentary',
      readTime: '5 min read',
      image: '📊',
    },
    {
      title: 'The Evolution of ESG Integration in Fixed Income Markets',
      excerpt: 'Environmental, social, and governance factors are increasingly material to credit analysis. Our research examines how ESG integration is reshaping bond market pricing and risk assessment.',
      date: 'December 28, 2023',
      category: 'Research',
      readTime: '8 min read',
      image: '🌱',
    },
    {
      title: 'Global Economic Outlook: Managing Recession Risks',
      excerpt: 'With recession fears mounting across major economies, we analyze the key indicators to watch and strategies for preserving capital while maintaining growth potential.',
      date: 'December 12, 2023',
      category: 'Economic Outlook',
      readTime: '6 min read',
      image: '🌍',
    },
    {
      title: 'Private Markets in 2024: Opportunities in Alternative Assets',
      excerpt: 'As traditional asset classes face headwinds, private markets offer compelling diversification benefits. We examine the landscape for private equity, venture capital, and real assets.',
      date: 'November 30, 2023',
      category: 'Investment Strategy',
      readTime: '7 min read',
      image: '💼',
    },
    {
      title: 'Climate Risk and Portfolio Construction',
      excerpt: 'Physical and transition risks from climate change are becoming systematic factors in portfolio construction. Our framework helps investors quantify and manage these emerging exposures.',
      date: 'November 15, 2023',
      category: 'ESG & Sustainability',
      readTime: '9 min read',
      image: '🌡️',
    },
    {
      title: 'Interest Rate Strategy in a Changing Monetary Environment',
      excerpt: 'Central banks worldwide are navigating the delicate balance between inflation control and economic stability. We outline tactical positioning for fixed income portfolios in this evolving landscape.',
      date: 'October 25, 2023',
      category: 'Market Commentary',
      readTime: '6 min read',
      image: '🏦',
    },
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category.toLowerCase().includes(activeCategory.replace('-', ' ')));

  return (
    <div className="min-h-screen">
      {/* Hero Section with Corporate Background */}
      <CorporateBackgroundSection
        backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        heading="Market Insights & Perspectives"
        description="Stay informed with our latest research, market commentary, and industry insights from our team of experienced investment professionals."
        ctaText="View Latest Articles"
        alignment="left"
        minHeight="h-[600px]"
      >
        <div className="mt-6">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Thought Leadership
          </span>
        </div>
      </CorporateBackgroundSection>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <PageContainer>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Card key={index} variant="elevated" padding="lg" hoverable className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="text-4xl mb-4">{article.image}</div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <Text variant="caption" className="text-secondary-500">
                      {article.readTime}
                    </Text>
                  </div>
                  
                  <Heading level="h3" className="mb-3 text-lg">
                    {article.title}
                  </Heading>
                  
                  <Text variant="body-small" className="text-secondary-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </Text>
                  
                  <Text variant="caption" className="text-secondary-500">
                    {article.date}
                  </Text>
                </div>
                
                <div className="mt-6">
                  <Button variant="link" className="p-0 h-auto font-medium">
                    Read Article →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📰</div>
              <Heading level="h3" className="mb-3">
                No articles found
              </Heading>
              <Text variant="body" className="text-secondary-600 mb-6">
                Try selecting a different category or check back later for new content.
              </Text>
              <Button variant="outline" onClick={() => setActiveCategory('all')}>
                View All Articles
              </Button>
            </div>
          )}
        </PageContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary-50">
        <PageContainer>
          <div className="max-w-2xl mx-auto text-center">
            <Heading level="h2" className="mb-4">
              Stay Informed
            </Heading>
            <Text as="p" variant="body" className="mb-8 text-secondary-600">
              Subscribe to receive our latest insights, market commentary, and research directly to your inbox.
            </Text>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
            
            <Text variant="caption" className="mt-4 text-secondary-500">
              We respect your privacy. Unsubscribe at any time.
            </Text>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}