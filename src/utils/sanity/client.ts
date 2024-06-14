import { createClient } from '@sanity/client';

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true, // Set to false if you want fresh data
    apiVersion: '2024-06-10', // use a UTC date string
    token: process.env.SANITY_API_READ_TOKEN, // Only if you need to use authenticated requests
  });
  
  export default client;
  