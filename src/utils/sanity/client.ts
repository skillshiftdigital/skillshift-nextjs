// src/utils/sanity/client.ts

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
  apiVersion: '2024-06-10', // use a UTC date string
  token: process.env.SANITY_API_READ_TOKEN, // Only if you need to use authenticated requests
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export default client;