'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { CorporateBackgroundSection } from '@/components/content/CorporateBackgroundSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'For general questions about our services and capabilities',
      email: 'info@company.com',
      phone: '+1 (555) 123-4567',
      icon: '💬'
    },
    {
      title: 'Client Services',
      description: 'Existing clients seeking account information or support',
      email: 'clientservices@company.com',
      phone: '+1 (555) 123-4568',
      icon: '👤'
    },
    {
      title: 'Press & Media',
      description: 'Media inquiries and press requests',
      email: 'press@company.com',
      phone: '+1 (555) 123-4569',
      icon: '📰'
    },
    {
      title: 'Careers',
      description: 'Job opportunities and recruitment questions',
      email: 'careers@company.com',
      phone: '+1 (555) 123-4570',
      icon: '💼'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Corporate Background */}
      <CorporateBackgroundSection
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
        heading="We're Here to Help"
        description="Reach out to our team for inquiries about our services, partnership opportunities, or to schedule a consultation with one of our specialists."
        ctaText="Send Us a Message"
        alignment="right"
        minHeight="h-[600px]"
        showCTA={false}
      >
        <div className="mt-6 space-y-3">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            Get In Touch
          </span>
          <div className="pt-2">
            <Text variant="body" className="text-gray-700 font-medium">General Inquiries</Text>
            <Text variant="body-small" className="text-gray-600">info@company.com</Text>
            <Text variant="body-small" className="text-gray-600">+1 (555) 123-4567</Text>
          </div>
        </div>
      </CorporateBackgroundSection>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} variant="elevated" padding="lg" className="text-center h-full">
                <div className="text-4xl mb-4">{method.icon}</div>
                <Heading level="h3" className="mb-3">
                  {method.title}
                </Heading>
                <Text variant="body-small" className="text-secondary-600 mb-4">
                  {method.description}
                </Text>
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-primary-600">{method.email}</div>
                  <div className="text-secondary-500">{method.phone}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-6">
                Send Us a Message
              </Heading>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="services">Services Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Career Opportunity</option>
                    <option value="press">Press/Media Request</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div>
              <Heading level="h3" className="mb-6">
                Office Information
              </Heading>
              
              <div className="space-y-8">
                <div>
                  <Heading level="h4" className="mb-3 text-lg">
                    Global Headquarters
                  </Heading>
                  <div className="space-y-2 text-secondary-600">
                    <div>123 Financial District</div>
                    <div>Suite 1000</div>
                    <div>New York, NY 10001</div>
                    <div className="mt-3">
                      <div className="font-medium text-primary-600">+1 (555) 123-4567</div>
                      <div>info@company.com</div>
                    </div>
                  </div>
                </div>

                <div>
                  <Heading level="h4" className="mb-3 text-lg">
                    European Office
                  </Heading>
                  <div className="space-y-2 text-secondary-600">
                    <div>456 City Center</div>
                    <div>Floor 15</div>
                    <div>London, EC2V 7HH</div>
                    <div className="mt-3">
                      <div className="font-medium text-primary-600">+44 20 1234 5678</div>
                      <div>london@company.com</div>
                    </div>
                  </div>
                </div>

                <div>
                  <Heading level="h4" className="mb-3 text-lg">
                    Asia-Pacific Office
                  </Heading>
                  <div className="space-y-2 text-secondary-600">
                    <div>789 Central Business District</div>
                    <div>Level 30</div>
                    <div>Singapore 048615</div>
                    <div className="mt-3">
                      <div className="font-medium text-primary-600">+65 6123 4567</div>
                      <div>singapore@company.com</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-secondary-200">
                  <Heading level="h4" className="mb-3 text-lg">
                    Business Hours
                  </Heading>
                  <div className="space-y-1 text-secondary-600">
                    <div>Monday - Friday: 8:00 AM - 6:00 PM EST</div>
                    <div>Saturday - Sunday: Closed</div>
                    <div className="mt-3 text-sm text-secondary-500">
                      * Emergency client support available 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}