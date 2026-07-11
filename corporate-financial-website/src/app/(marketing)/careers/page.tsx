'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { CorporateBackgroundSection } from '@/components/content/CorporateBackgroundSection';

export default function CareersPage() {
  const departments = [
    {
      title: 'Investment Management',
      positions: [
        'Senior Portfolio Manager',
        'Quantitative Analyst',
        'Research Associate',
        'ESG Investment Specialist'
      ],
      icon: '📈'
    },
    {
      title: 'Client Services',
      positions: [
        'Relationship Manager',
        'Client Service Associate',
        'Wealth Planning Specialist',
        'Family Office Coordinator'
      ],
      icon: '👥'
    },
    {
      title: 'Corporate Functions',
      positions: [
        'Risk Analyst',
        'Compliance Officer',
        'Operations Manager',
        'Technology Specialist'
      ],
      icon: '⚙️'
    },
    {
      title: 'Business Development',
      positions: [
        'Business Development Manager',
        'Marketing Director',
        'Communications Specialist',
        'Strategic Partnerships Lead'
      ],
      icon: '🚀'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Market-leading salary and bonus structures',
      icon: '💰'
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning and career advancement opportunities',
      icon: '📚'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options',
      icon: '⚖️'
    },
    {
      title: 'Global Opportunities',
      description: 'International assignments and cross-border projects',
      icon: '🌐'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Corporate Background */}
      <CorporateBackgroundSection
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        heading="Build Your Career in Financial Excellence"
        description="Join a global team of passionate professionals committed to delivering exceptional outcomes for our clients while advancing your career in a supportive environment."
        ctaText="View Open Positions"
        alignment="left"
        minHeight="h-[650px]"
      >
        <div className="mt-6 grid grid-cols-2 gap-4 max-w-xs">
          <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg">
            <Heading level="h3" className="text-xl font-bold text-primary-600 mb-1">200+</Heading>
            <Text variant="caption" className="text-gray-700">Team Members</Text>
          </div>
          <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg">
            <Heading level="h3" className="text-xl font-bold text-primary-600 mb-1">25</Heading>
            <Text variant="caption" className="text-gray-700">Countries</Text>
          </div>
        </div>
      </CorporateBackgroundSection>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Heading level="h2" className="mb-6">
                Our Culture of Excellence
              </Heading>
              <Text as="p" variant="body" className="mb-6 text-secondary-700">
                We foster an environment where intellectual curiosity thrives, collaboration flourishes, and professional growth is actively supported. Our culture is built on mutual respect, continuous learning, and shared commitment to client success.
              </Text>
              <Text as="p" variant="body" className="mb-6 text-secondary-700">
                As a team, we embrace diversity of thought and background, recognizing that our differences strengthen our collective ability to serve clients effectively and innovate in our approach to financial solutions.
              </Text>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <Heading level="h3" className="text-2xl font-bold text-primary-600 mb-1">
                    200+
                  </Heading>
                  <Text variant="body-small" className="text-secondary-600">
                    Team Members
                  </Text>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <Heading level="h3" className="text-2xl font-bold text-primary-600 mb-1">
                    25
                  </Heading>
                  <Text variant="body-small" className="text-secondary-600">
                    Countries Represented
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-secondary-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-secondary-500">
                <div className="text-6xl mb-4">👥</div>
                <Text variant="body">Our Global Team</Text>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Departments */}
      <section className="py-20 bg-secondary-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Open Positions by Department
            </Heading>
            <Text variant="body-large" className="text-secondary-600 max-w-2xl mx-auto">
              Explore opportunities across our various teams and find where your expertise aligns with our needs.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} variant="elevated" padding="lg" hoverable>
                <div className="text-center">
                  <div className="text-5xl mb-4">{dept.icon}</div>
                  <Heading level="h3" className="mb-4">
                    {dept.title}
                  </Heading>
                  <ul className="space-y-2 mb-6 text-left max-w-xs mx-auto">
                    {dept.positions.map((position, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <Text variant="body-small" className="text-secondary-700">
                          {position}
                        </Text>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    View {dept.title} Roles
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Why Work With Us
            </Heading>
            <Text variant="body-large" className="text-secondary-600 max-w-2xl mx-auto">
              We offer competitive compensation and a comprehensive benefits package designed to support your professional and personal well-being.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="outlined" padding="lg" className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <Heading level="h3" className="mb-3 text-lg">
                  {benefit.title}
                </Heading>
                <Text variant="body-small" className="text-secondary-600">
                  {benefit.description}
                </Text>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center text-white">
            <Heading level="h2" className="mb-6 text-white">
              Ready to Take the Next Step?
            </Heading>
            <Text as="p" variant="body-large" className="mb-10 text-primary-100 max-w-2xl mx-auto">
              Join our team of exceptional professionals and contribute to shaping the future of institutional finance.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Browse All Positions
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Recruiting Team
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}