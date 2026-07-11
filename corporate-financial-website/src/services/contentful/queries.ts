import { contentTypes, fieldIds } from '@/config/contentful';

// Query builders for different content types

export const queries = {
  // Services queries
  services: {
    getAll: () => ({
      content_type: contentTypes.service,
      order: `${fieldIds.service.sortOrder},${fieldIds.service.title}`,
    }),
    
    getBySlug: (slug: string) => ({
      content_type: contentTypes.service,
      'fields.slug': slug,
    }),
    
    getFeatured: (limit: number = 3) => ({
      content_type: contentTypes.service,
      order: `${fieldIds.service.sortOrder}`,
      limit,
    }),
  },

  // Articles queries
  articles: {
    getAll: (limit?: number, skip?: number) => ({
      content_type: contentTypes.article,
      order: `-${fieldIds.article.publishDate}`,
      ...(limit && { limit }),
      ...(skip && { skip }),
    }),
    
    getBySlug: (slug: string) => ({
      content_type: contentTypes.article,
      'fields.slug': slug,
    }),
    
    getByCategory: (category: string, limit?: number) => ({
      content_type: contentTypes.article,
      'fields.category': category,
      order: `-${fieldIds.article.publishDate}`,
      ...(limit && { limit }),
    }),
    
    getLatest: (limit: number = 3) => ({
      content_type: contentTypes.article,
      order: `-${fieldIds.article.publishDate}`,
      limit,
    }),
    
    getRelated: (currentArticleId: string, category: string, limit: number = 3) => ({
      content_type: contentTypes.article,
      'fields.category': category,
      'sys.id[ne]': currentArticleId,
      order: `-${fieldIds.article.publishDate}`,
      limit,
    }),
  },

  // Team members queries
  teamMembers: {
    getAll: () => ({
      content_type: contentTypes.teamMember,
      order: `${fieldIds.teamMember.sortOrder},${fieldIds.teamMember.name}`,
    }),
    
    getByRole: (role: string) => ({
      content_type: contentTypes.teamMember,
      'fields.role': role,
      order: `${fieldIds.teamMember.sortOrder}`,
    }),
    
    getLeadership: () => ({
      content_type: contentTypes.teamMember,
      'fields.role[in]': 'CEO,President,Managing Director,Partner',
      order: `${fieldIds.teamMember.sortOrder}`,
    }),
  },

  // Locations queries
  locations: {
    getAll: () => ({
      content_type: contentTypes.location,
      order: `${fieldIds.location.name}`,
    }),
    
    getHeadquarters: () => ({
      content_type: contentTypes.location,
      'fields.isHeadquarters': true,
    }),
    
    getByService: (service: string) => ({
      content_type: contentTypes.location,
      'fields.servicesOffered[in]': service,
    }),
  },

  // Global settings queries
  globalSettings: {
    get: () => ({
      content_type: contentTypes.globalSettings,
      limit: 1,
    }),
  },

  // Pages queries
  pages: {
    getBySlug: (slug: string) => ({
      content_type: contentTypes.page,
      'fields.slug': slug,
    }),
  },
};

// Helper functions for building complex queries
export const buildSearchQuery = (searchTerm: string, contentTypesArray: string[] = []) => ({
  query: searchTerm,
  ...(contentTypesArray.length > 0 && { content_type: contentTypesArray }),
});

export const buildFilterQuery = (filters: Record<string, any>) => {
  const query: Record<string, any> = {};
  
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query[`fields.${key}`] = value;
    }
  });
  
  return query;
};

// Pagination helpers
export const buildPagination = (page: number = 1, limit: number = 10) => ({
  skip: (page - 1) * limit,
  limit,
});

// Sorting helpers
export const sortOptions = {
  dateDesc: '-fields.publishDate',
  dateAsc: 'fields.publishDate',
  titleAsc: 'fields.title',
  titleDesc: '-fields.title',
  sortOrder: 'fields.sortOrder',
} as const;

export type SortOption = keyof typeof sortOptions;