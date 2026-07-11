// Service data interfaces
export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stats: string;
  services: string[];
  targetClients: string[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
  color: string;
}

// Service page props
export interface ServicePageProps {
  params: {
    serviceSlug: string;
  };
}

// Service card props for listing
export interface ServiceCardProps {
  service: Service;
  className?: string;
}