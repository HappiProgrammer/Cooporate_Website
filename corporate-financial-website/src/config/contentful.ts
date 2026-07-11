// Contentful configuration
export const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  preview: {
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  },
};

// Content type IDs
export const contentTypes = {
  service: 'service',
  article: 'article',
  teamMember: 'teamMember',
  location: 'location',
  globalSettings: 'globalSettings',
  page: 'page',
} as const;

// Field IDs for each content type
export const fieldIds = {
  service: {
    title: 'title',
    slug: 'slug',
    description: 'description',
    content: 'content',
    featuredImage: 'featuredImage',
    icon: 'icon',
    sortOrder: 'sortOrder',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
  },
  article: {
    title: 'title',
    slug: 'slug',
    author: 'author',
    publishDate: 'publishDate',
    content: 'content',
    excerpt: 'excerpt',
    featuredImage: 'featuredImage',
    category: 'category',
    tags: 'tags',
    relatedArticles: 'relatedArticles',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
  },
  teamMember: {
    name: 'name',
    role: 'role',
    biography: 'biography',
    photo: 'photo',
    email: 'email',
    phone: 'phone',
    linkedin: 'linkedin',
    sortOrder: 'sortOrder',
  },
  location: {
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email',
    coordinates: 'coordinates',
    isHeadquarters: 'isHeadquarters',
    servicesOffered: 'servicesOffered',
  },
  globalSettings: {
    siteName: 'siteName',
    siteDescription: 'siteDescription',
    logo: 'logo',
    favicon: 'favicon',
    navigation: 'navigation',
    footerColumns: 'footerColumns',
    socialLinks: 'socialLinks',
    contactEmail: 'contactEmail',
    phoneNumber: 'phoneNumber',
  },
} as const;

export type ContentType = keyof typeof contentTypes;
export type ContentTypeId = typeof contentTypes[keyof typeof contentTypes];