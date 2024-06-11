/* // ./src/utils/sanity/client.ts
import {createClient} from 'next-sanity'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const token = process.env.SANITY_TOKEN

export const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2024-05-27',
}) */

  import sanityClient from '@sanity/client';

  const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true, // Set to false if you want fresh data
    token: process.env.SANITY_API_READ_TOKEN, // Only if you need to use authenticated requests
  });
  
  export default client;
  