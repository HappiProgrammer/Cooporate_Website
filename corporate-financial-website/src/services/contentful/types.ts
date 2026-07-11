// Contentful asset type
export interface Asset {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

// System fields for all entries
export interface SysFields {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
}

// Base entry interface
export interface Entry<T> {
  sys: SysFields;
  fields: T;
}

// Service content type
export interface ServiceFields {
  title: string;
  slug: string;
  description: string;
  content: any; // Rich text content
  featuredImage?: Asset;
  icon?: string;
  sortOrder: number;
  metaTitle?: string;
  metaDescription?: string;
}

export type Service = Entry<ServiceFields>;

// Article content type
export interface ArticleFields {
  title: string;
  slug: string;
  author?: Entry<TeamMemberFields>;
  publishDate: string;
  content: any; // Rich text content
  excerpt: string;
  featuredImage?: Asset;
  category: string;
  tags: string[];
  relatedArticles?: Entry<ArticleFields>[];
  metaTitle?: string;
  metaDescription?: string;
}

export type Article = Entry<ArticleFields>;

// Team member content type
export interface TeamMemberFields {
  name: string;
  role: string;
  biography: any; // Rich text content
  photo?: Asset;
  email?: string;
  phone?: string;
  linkedin?: string;
  sortOrder: number;
}

export type TeamMember = Entry<TeamMemberFields>;

// Location content type
export interface LocationFields {
  name: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  isHeadquarters: boolean;
  servicesOffered: string[];
}

export type Location = Entry<LocationFields>;

// Navigation item
export interface NavigationItem {
  title: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

// Footer column
export interface FooterColumn {
  title: string;
  links: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

// Social links
export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
}

// Global settings content type
export interface GlobalSettingsFields {
  siteName: string;
  siteDescription: string;
  logo?: Asset;
  favicon?: Asset;
  navigation: NavigationItem[];
  footerColumns: FooterColumn[];
  socialLinks: SocialLinks;
  contactEmail: string;
  phoneNumber: string;
}

export type GlobalSettings = Entry<GlobalSettingsFields>;

// Page content type
export interface PageFields {
  title: string;
  slug: string;
  content: any; // Rich text content
  featuredImage?: Asset;
  metaTitle?: string;
  metaDescription?: string;
}

export type Page = Entry<PageFields>;

// Collection response types
export interface ContentfulCollection<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
  sys: {
    type: string;
  };
}

// Error types
export interface ContentfulError {
  sys: {
    id: string;
    type: string;
  };
  message: string;
  details?: any;
}

// Preview token type
export type PreviewData = {
  token: string;
} | undefined;

// Rich text types
export interface RichTextContent {
  nodeType: string;
  content: RichTextContent[];
  data: any;
}

// Image optimization parameters
export interface ImageParams {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'jpg' | 'png' | 'webp';
  fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
}