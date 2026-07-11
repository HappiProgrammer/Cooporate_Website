import { createClient, EntrySkeletonType } from 'contentful';
import { contentfulConfig } from '@/config/contentful';

// Create Contentful clients
export const contentfulClient = createClient({
  space: contentfulConfig.spaceId,
  accessToken: contentfulConfig.accessToken,
  environment: contentfulConfig.environment,
});

export const contentfulPreviewClient = createClient({
  space: contentfulConfig.spaceId,
  accessToken: contentfulConfig.preview.accessToken,
  host: 'preview.contentful.com',
  environment: contentfulConfig.environment,
});

// Type guard to check if we're in preview mode
export const isPreviewMode = (token?: string): boolean => {
  return !!token && token === contentfulConfig.preview.accessToken;
};

// Generic function to get entries
export async function getEntries<T extends EntrySkeletonType>(contentType: string, query: any = {}) {
  try {
    const entries = await contentfulClient.getEntries<T>({
      content_type: contentType,
      ...query,
    });
    return entries;
  } catch (error) {
    console.error(`Error fetching entries for ${contentType}:`, error);
    throw error;
  }
}

// Generic function to get entry by ID
export async function getEntryById<T extends EntrySkeletonType>(entryId: string) {
  try {
    const entry = await contentfulClient.getEntry<T>(entryId);
    return entry;
  } catch (error) {
    console.error(`Error fetching entry ${entryId}:`, error);
    throw error;
  }
}

// Generic function to get entries with preview support
export async function getEntriesWithPreview<T extends EntrySkeletonType>(
  contentType: string,
  previewToken?: string,
  query: any = {}
) {
  const client = previewToken 
    ? contentfulPreviewClient 
    : contentfulClient;
  
  try {
    const entries = await client.getEntries<T>({
      content_type: contentType,
      ...query,
    });
    return entries;
  } catch (error) {
    console.error(`Error fetching entries for ${contentType}:`, error);
    throw error;
  }
}