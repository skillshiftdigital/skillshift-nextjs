/* // ./src/utils/sanity/services.ts

import { client } from './client';

export async function fetchAllTypes(serviceTitle: string) {
  const query = `*[_type == "services" && title == $serviceTitle]`;
  try {
    const documents = await client.fetch(query, { serviceTitle })
    console.log('Successfully connected to Sanity and fetched documents:', documents);
    return documents;
  } catch (err) {
    console.error('Error connecting to Sanity or fetching documents:', err);
  }
}

 */