import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Display1, Heading, Text } from '@/components/ui/Typography';
import { PageContainer } from '@/components/layout/PageContainer';
import { ServiceService } from '@/services/ServiceService';
import { ServicePageProps } from '@/types/services';

// Generate static params for all services
export async function generateStaticParams() {
  return ServiceService.getAllServiceSlugs();
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = ServiceService.getServiceBySlug(params.serviceSlug);
  
  // Debug logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Service slug received:', params.serviceSlug);
    console.log('Service found:', service ? service.title : 'Not found');
  }

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <PageContainer className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <span className={`inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-sm text-sm font-medium mb-6 border-l-4 ${service.color.replace('border', 'border-')}`}>
                {service.stats}
              </span>
              <Display1 className="mb-6">
                {service.title}
              </Display1>
              <Text as="p" variant="body-large" className="mb-10 text-slate-700 max-w-3xl">
                {service.longDescription}
              </Text>
              <Button size="lg" variant="primary">
                Get Started
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <PageContainer>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Our Service Offerings
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific needs and objectives.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.services.map((serviceItem, index) => (
              <Card key={index} variant="outlined" padding="lg" className="h-full">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <Heading level="h3" className="text-lg font-semibold text-slate-900 mb-2">
                      {serviceItem}
                    </Heading>
                  </div>
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
              Who We Serve
            </Heading>
            <Text variant="body-large" className="text-slate-600 max-w-2xl mx-auto">
              Our services are designed for sophisticated clients with complex financial needs.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.targetClients.map((client, index) => (
              <Card key={index} variant="filled" padding="md" className="text-center">
                <Text variant="body" className="font-medium text-slate-800">
                  {client}
                </Text>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Case Study */}
      {service.caseStudy && (
        <section className="py-20 bg-white">
          <PageContainer>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-sm text-sm font-medium mb-4">
                  CASE STUDY
                </span>
                <Heading level="h2" className="mb-4">
                  {service.caseStudy.title}
                </Heading>
                <Text variant="body-large" className="text-slate-600">
                  {service.caseStudy.description}
                </Text>
              </div>
              
              <Card variant="elevated" padding="lg">
                <div className="grid md:grid-cols-3 gap-6">
                  {service.caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <Heading level="h3" className="text-2xl font-bold text-sky-700 mb-2">
                        {result.split(' ')[0]}
                      </Heading>
                      <Text variant="body-small" className="text-slate-600">
                        {result.substring(result.indexOf(' ') + 1)}
                      </Text>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </PageContainer>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center text-white">
            <Heading level="h2" className="mb-6 text-white">
              Ready to Discuss Your {service.title} Needs?
            </Heading>
            <Text as="p" variant="body-large" className="mb-10 text-sky-100 max-w-2xl mx-auto">
              Connect with our team of specialists to explore how our {service.title.toLowerCase()} services can help you achieve your objectives.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-900">
                Contact Our Team
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}