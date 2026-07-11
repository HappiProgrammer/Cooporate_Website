'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { CorporateBackgroundSection } from '@/components/content/CorporateBackgroundSection';

export default function LocationsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', name: 'All Offices' },
    { id: 'north-america', name: 'North America' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia-pacific', name: 'Asia Pacific' },
    { id: 'middle-east', name: 'Middle East' },
  ];

  const offices = [
    {
      name: 'New York Headquarters',
      region: 'north-america',
      address: {
        street: '123 Financial District',
        suite: 'Suite 1000',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'United States'
      },
      phone: '+1 (555) 123-4567',
      email: 'ny@company.com',
      services: ['Investment Management', 'Wealth Advisory', 'Corporate Finance'],
      image: '🗽',
      isHeadquarters: true
    },
    {
      name: 'London Office',
      region: 'europe',
      address: {
        street: '456 City Center',
        suite: 'Floor 15',
        city: 'London',
        state: '',
        zip: 'EC2V 7HH',
        country: 'United Kingdom'
      },
      phone: '+44 20 1234 5678',
      email: 'london@company.com',
      services: ['Investment Management', 'ESG Investing', 'Risk Management'],
      image: '💂',
      isHeadquarters: false
    },
    {
      name: 'Singapore Office',
      region: 'asia-pacific',
      address: {
        street: '789 Central Business District',
        suite: 'Level 30',
        city: 'Singapore',
        state: '',
        zip: '048615',
        country: 'Singapore'
      },
      phone: '+65 6123 4567',
      email: 'singapore@company.com',
      services: ['Wealth Advisory', 'Private Markets', 'Asian Equities'],
      image: '🦁',
      isHeadquarters: false
    },
    {
      name: 'Dubai Office',
      region: 'middle-east',
      address: {
        street: '101 Sheikh Zayed Road',
        suite: 'Tower 2, Floor 45',
        city: 'Dubai',
        state: '',
        zip: '',
        country: 'United Arab Emirates'
      },
      phone: '+971 4 123 4567',
      email: 'dubai@company.com',
      services: ['Wealth Advisory', 'Islamic Finance', 'Regional Investments'],
      image: '🏙️',
      isHeadquarters: false
    },
    {
      name: 'Toronto Office',
      region: 'north-america',
      address: {
        street: '789 Bay Street',
        suite: 'Suite 2500',
        city: 'Toronto',
        state: 'ON',
        zip: 'M5G 2C8',
        country: 'Canada'
      },
      phone: '+1 (416) 123-4567',
      email: 'toronto@company.com',
      services: ['Investment Management', 'Pension Fund Advisory', 'Canadian Markets'],
      image: '🍁',
      isHeadquarters: false
    },
    {
      name: 'Frankfurt Office',
      region: 'europe',
      address: {
        street: '234 Neue Mainzer Strasse',
        suite: 'Floor 20',
        city: 'Frankfurt',
        state: '',
        zip: '60311',
        country: 'Germany'
      },
      phone: '+49 69 1234 5678',
      email: 'frankfurt@company.com',
      services: ['European Equities', 'Fixed Income', 'Corporate Finance'],
      image: '🇩🇪',
      isHeadquarters: false
    },
    {
      name: 'Tokyo Office',
      region: 'asia-pacific',
      address: {
        street: '567 Marunouchi',
        suite: 'Floor 35',
        city: 'Tokyo',
        state: '',
        zip: '100-0005',
        country: 'Japan'
      },
      phone: '+81 3-1234-5678',
      email: 'tokyo@company.com',
      services: ['Japanese Equities', 'Asian Fixed Income', 'Wealth Advisory'],
      image: '🗼',
      isHeadquarters: false
    },
    {
      name: 'Sydney Office',
      region: 'asia-pacific',
      address: {
        street: '890 Barangaroo Avenue',
        suite: 'Level 40',
        city: 'Sydney',
        state: 'NSW',
        zip: '2000',
        country: 'Australia'
      },
      phone: '+61 2 1234 5678',
      email: 'sydney@company.com',
      services: ['Australian Markets', 'Commodities', 'Wealth Advisory'],
      image: '🦘',
      isHeadquarters: false
    }
  ];

  const filteredOffices = selectedRegion === 'all' 
    ? offices 
    : offices.filter(office => office.region === selectedRegion);

  const officeStats = [
    { label: 'Global Offices', value: offices.length.toString() },
    { label: 'Countries', value: '8' },
    { label: 'Continents', value: '4' },
    { label: 'Headquarters', value: offices.filter(o => o.isHeadquarters).length.toString() }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Corporate Background */}
      <CorporateBackgroundSection
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        heading="Our Worldwide Network"
        description="With offices spanning four continents, we provide local expertise with global reach to serve our international client base effectively."
        ctaText="View Office Details"
        alignment="left"
        minHeight="h-[600px]"
      >
        <div className="mt-6 grid grid-cols-2 gap-4 max-w-xs">
          <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg">
            <Heading level="h3" className="text-xl font-bold text-primary-600 mb-1">8</Heading>
            <Text variant="caption" className="text-gray-700">Global Offices</Text>
          </div>
          <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-lg">
            <Heading level="h3" className="text-xl font-bold text-primary-600 mb-1">4</Heading>
            <Text variant="caption" className="text-gray-700">Continents</Text>
          </div>
        </div>
      </CorporateBackgroundSection>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <PageContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {officeStats.map((stat, index) => (
              <div key={index} className="text-center">
                <Heading level="h3" className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </Heading>
                <Text variant="body" className="text-secondary-600">
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Regions Filter */}
      <section className="py-8 bg-secondary-50">
        <PageContainer>
          <div className="flex flex-wrap gap-2 justify-center">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedRegion === region.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-700 hover:bg-secondary-100 border border-secondary-200'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Offices Grid */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffices.map((office, index) => (
              <Card key={index} variant="elevated" padding="lg" hoverable className="h-full flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl">{office.image}</div>
                    {office.isHeadquarters && (
                      <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                        Headquarters
                      </span>
                    )}
                  </div>
                  
                  <Heading level="h3" className="mb-2">
                    {office.name}
                  </Heading>
                  
                  <div className="space-y-2 mb-4 text-secondary-600">
                    <div>{office.address.street}</div>
                    {office.address.suite && <div>{office.address.suite}</div>}
                    <div>
                      {office.address.city}
                      {office.address.state && `, ${office.address.state}`}
                      {office.address.zip && ` ${office.address.zip}`}
                    </div>
                    <div>{office.address.country}</div>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    <div className="font-medium text-primary-600">{office.phone}</div>
                    <div className="text-secondary-600">{office.email}</div>
                  </div>
                  
                  <div>
                    <Text variant="caption" className="text-secondary-500 font-medium mb-2 block">
                      Services Offered:
                    </Text>
                    <div className="flex flex-wrap gap-1">
                      {office.services.map((service, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-secondary-200">
                  <Button variant="link" className="p-0 h-auto font-medium">
                    Get Directions →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredOffices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🏢</div>
              <Heading level="h3" className="mb-3">
                No offices found
              </Heading>
              <Text variant="body" className="text-secondary-600 mb-6">
                Try selecting a different region or check back later.
              </Text>
              <Button variant="outline" onClick={() => setSelectedRegion('all')}>
                View All Offices
              </Button>
            </div>
          )}
        </PageContainer>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-secondary-50">
        <PageContainer>
          <div className="text-center mb-12">
            <Heading level="h2" className="mb-4">
              Global Coverage
            </Heading>
            <Text variant="body-large" className="text-secondary-600 max-w-2xl mx-auto">
              Our strategic office locations ensure we can serve clients wherever they operate around the world.
            </Text>
          </div>
          
          <div className="bg-white rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <Heading level="h3" className="mb-2">
                Interactive Office Map
              </Heading>
              <Text variant="body" className="text-secondary-600 mb-4">
                Coming soon: Interactive map showing all our global office locations
              </Text>
              <Button variant="outline">
                View Office Details
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}