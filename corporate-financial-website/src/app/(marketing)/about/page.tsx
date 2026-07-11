'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { CorporateBackgroundSection } from '@/components/content/CorporateBackgroundSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Corporate Background */}
      <CorporateBackgroundSection
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
        heading="Leading Financial Excellence Since 1985"
        description="For over three decades, we've been trusted partners in helping institutions and individuals navigate complex financial landscapes with confidence and precision."
        ctaText="Our Leadership Team"
        alignment="right"
        minHeight="h-[600px]"
        showCTA={false}
      >
        <div className="mt-6 space-y-4">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Our Story
          </span>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">25+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">$50B+ AUM</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">25 Global Offices</span>
            </div>
          </div>
        </div>
      </CorporateBackgroundSection>

      {/* Company History */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Heading level="h2" className="mb-6">
                Founded on Principles of Trust and Integrity
              </Heading>
              <Text as="p" variant="body" className="mb-6 text-secondary-700">
                Established in 1985, our firm began with a simple mission: to provide exceptional financial guidance to institutions and high-net-worth individuals who demanded more than conventional wisdom.
              </Text>
              <Text as="p" variant="body" className="mb-6 text-secondary-700">
                What started as a boutique advisory practice has grown into a globally recognized institution, managing over $50 billion in assets while maintaining our commitment to personalized service and fiduciary responsibility.
              </Text>
              <Text as="p" variant="body" className="mb-8 text-secondary-700">
                Today, we serve clients across 25 countries through our network of offices, combining deep market expertise with innovative technology to deliver superior outcomes.
              </Text>
              <Button variant="primary">
                Our Leadership Team
              </Button>
            </div>
            <div className="bg-secondary-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-secondary-500">
                <div className="text-6xl mb-4">🏛️</div>
                <Text variant="body">Company Headquarters</Text>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-secondary-50">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Our Mission and Values
            </Heading>
            <Text variant="body-large" className="text-secondary-600 max-w-2xl mx-auto">
              Guided by unwavering principles that define who we are and how we serve our clients.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fiduciary Duty',
                description: 'Acting solely in our clients\' best interests, always.',
                icon: '⚖️',
              },
              {
                title: 'Intellectual Rigor',
                description: 'Applying disciplined analysis and evidence-based decision making.',
                icon: '🧠',
              },
              {
                title: 'Long-term Perspective',
                description: 'Building enduring partnerships focused on sustainable outcomes.',
                icon: '⏳',
              },
              {
                title: 'Transparency',
                description: 'Maintaining open communication and clear fee structures.',
                icon: '🔍',
              },
              {
                title: 'Innovation',
                description: 'Embracing technology and new ideas to enhance client service.',
                icon: '🚀',
              },
              {
                title: 'Integrity',
                description: 'Upholding the highest ethical standards in all interactions.',
                icon: '⭐',
              },
            ].map((value, index) => (
              <Card key={index} variant="elevated" padding="lg" className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <Heading level="h3" className="mb-3">
                  {value.title}
                </Heading>
                <Text variant="body" className="text-secondary-600">
                  {value.description}
                </Text>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Leadership Overview */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Leadership Team
            </Heading>
            <Text variant="body-large" className="text-secondary-600 max-w-2xl mx-auto">
              Experienced professionals guiding our strategic vision and client relationships.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Anderson',
                role: 'Chief Executive Officer',
                bio: '25+ years in institutional asset management and global market strategy.',
                image: '👨‍💼',
              },
              {
                name: 'Sarah Chen',
                role: 'Chief Investment Officer',
                bio: 'Former portfolio manager at leading pension funds with expertise in fixed income.',
                image: '👩‍💼',
              },
              {
                name: 'James Rodriguez',
                role: 'Head of Client Relations',
                bio: 'Specializes in ultra-high-net-worth family office services and succession planning.',
                image: '👨‍🎓',
              },
            ].map((leader, index) => (
              <Card key={index} variant="outlined" padding="lg" hoverable>
                <div className="text-center">
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <Heading level="h3" className="mb-2">
                    {leader.name}
                  </Heading>
                  <Text variant="body" className="text-primary-600 font-medium mb-3">
                    {leader.role}
                  </Text>
                  <Text variant="body-small" className="text-secondary-600">
                    {leader.bio}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline">
              Meet Our Full Team
            </Button>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}