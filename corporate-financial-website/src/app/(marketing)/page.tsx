'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  Display1, 
  Display2, 
  Heading1, 
  Heading2, 
  Heading3, 
  Heading4,
  BodyLarge, 
  Body, 
  BodySmall,
  Caption 
} from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { CorporateBackgroundSection } from '@/components/content/CorporateBackgroundSection';
import { ParallaxSection } from '@/components/sections/ParallaxSection';
import { Icon, IconType } from '@/components/ui/Icon';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, hoverMotion } from '@/lib/animations';
import { ScrollAnimated, StaggeredContainer } from '@/components/ui/ScrollAnimated';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <PageContainer className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimated animationType="fade" delay={0.2}>
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-sm text-sm font-medium mb-6">
                GLOBAL FINANCIAL SERVICES
              </span>
            </ScrollAnimated>
            <ScrollAnimated animationType="slide-up" delay={0.4}>
              <Display1 className="mb-6 text-center">
                Independent Financial Advice<br/>Across Four Key Divisions
              </Display1>
            </ScrollAnimated>
            <ScrollAnimated animationType="slide-up" delay={0.6}>
              <BodyLarge className="mb-10 max-w-2xl mx-auto">
                Serving clients globally with expertise in wealth management, global advisory, asset management, and alternative investments.
              </BodyLarge>
            </ScrollAnimated>
            <ScrollAnimated animationType="slide-up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="primary">
                  Explore Our Services
                </Button>
                <Button size="lg" variant="outline">
                  Meet Our Team
                </Button>
              </div>
            </ScrollAnimated>
          </div>
        </PageContainer>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 bg-slate-50">
        <PageContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$50B+', label: 'Assets Under Management' },
              { value: '25+', label: 'Years of Experience' },
              { value: '500+', label: 'Institutional Clients' },
              { value: '25', label: 'Global Offices' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <Heading3 className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </Heading3>
                <Body className="text-secondary-600">
                  {stat.label}
                </Body>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Business Divisions */}
      <section className="py-20 bg-white">
        <PageContainer>
          <ScrollAnimated animationType="fade" className="text-center mb-16">
            <Heading2 className="mb-4">
              Our Business Divisions
            </Heading2>
            <BodyLarge className="text-slate-600 max-w-3xl mx-auto">
              We operate across four complementary divisions, each delivering specialized expertise to serve our clients' diverse needs.
            </BodyLarge>
          </ScrollAnimated>
          
          <StaggeredContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Investment Management',
                  description: 'Institutional-grade portfolio management with proven strategies.',
                  icon: 'chart',
                },
                {
                  title: 'Wealth Advisory',
                  description: 'Personalized wealth planning for high-net-worth individuals.',
                  icon: 'money',
                },
                {
                  title: 'Corporate Finance',
                  description: 'Strategic financial advisory for businesses and corporations.',
                  icon: 'building',
                },
                {
                  title: 'Risk Management',
                  description: 'Comprehensive risk assessment and mitigation strategies.',
                  icon: 'shield',
                },
                {
                  title: 'ESG Investing',
                  description: 'Sustainable investing aligned with environmental and social values.',
                  icon: 'leaf',
                },
                {
                  title: 'Private Equity',
                  description: 'Direct investment opportunities in private markets.',
                  icon: 'briefcase',
                },
              ].map((service, index) => (
                <div key={index}>
                  <Card 
                    variant="elevated" 
                    padding="lg" 
                    className="group hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <Icon name={service.icon as IconType} size={40} className="text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <Heading3 className="mb-3 group-hover:text-brand-primary transition-colors duration-300">
                        {service.title}
                      </Heading3>
                      <Body className="text-secondary-600 mb-4 group-hover:text-secondary-700 transition-colors duration-300">
                        {service.description}
                      </Body>
                      <Button variant="link" size="sm" className="group-hover:text-brand-primary transition-colors duration-300">
                        Learn More →
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </StaggeredContainer>
        </PageContainer>
      </section>

      {/* Parallax Storytelling Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        title="Sustainable Investing for Future Generations"
        description="We believe in creating long-term value through responsible investment practices that benefit both our clients and society. Our ESG framework integrates environmental, social, and governance factors into every investment decision."
        alignment="right"
        overlayOpacity={0.5}
        enableParallax={true}
        ctaText="Explore Our Approach"
        ctaHref="/insights"
      />

      {/* Latest News & Insights */}
      <section className="py-20 bg-slate-50">
        <PageContainer>
          <ScrollAnimated animationType="fade" className="text-center mb-16">
            <Heading2 className="mb-4">
              Latest News & Insights
            </Heading2>
            <BodyLarge className="text-slate-600 max-w-2xl mx-auto">
              Stay updated with our latest announcements, market insights, and thought leadership.
            </BodyLarge>
          </ScrollAnimated>
          
          <StaggeredContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Market Outlook 2024',
                  excerpt: 'Navigating economic uncertainty with strategic portfolio positioning.',
                  date: 'March 15, 2024',
                  category: 'Market Commentary',
                },
                {
                  title: 'ESG Integration in Fixed Income',
                  excerpt: 'How sustainable investing is reshaping the bond market landscape.',
                  date: 'February 28, 2024',
                  category: 'Research',
                },
                {
                  title: 'Private Markets Opportunities',
                  excerpt: 'Identifying attractive alternatives in today\'s challenging environment.',
                  date: 'February 12, 2024',
                  category: 'Investment Strategy',
                },
              ].map((article, index) => (
                <div key={index}>
                  <Card key={index} variant="outlined" padding="lg" hoverable className="h-full">
                    <div>
                      <span className="inline-block px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-sm text-xs font-medium mb-3">
                        {article.category}
                      </span>
                      <Heading4 className="mb-3">
                        {article.title}
                      </Heading4>
                      <BodySmall className="text-secondary-600 mb-4">
                        {article.excerpt}
                      </BodySmall>
                      <div className="flex justify-between items-center">
                        <Caption className="text-secondary-500">
                          {article.date}
                        </Caption>
                        <Button variant="link" size="sm">
                          Read Article →
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </StaggeredContainer>

          <div className="text-center">
            <Button size="lg" variant="primary">
              View All Insights
            </Button>
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-700 to-sky-800">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollAnimated animationType="fade">
              <Display1 className="mb-6 text-center text-white">
                Ready to Begin Your Journey?
              </Display1>
            </ScrollAnimated>
            <ScrollAnimated animationType="slide-up" delay={0.2}>
              <BodyLarge className="mb-10 text-sky-100 max-w-2xl mx-auto">
                Our team of experienced professionals is ready to help you achieve your financial objectives through personalized strategies and institutional expertise.
              </BodyLarge>
            </ScrollAnimated>
            <ScrollAnimated animationType="slide-up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-700">
                  Find an Office
                </Button>
              </div>
            </ScrollAnimated>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}