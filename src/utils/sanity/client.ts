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
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: process.env.SANITY_USE_CDN === 'true',
  token: process.env.SANITY_TOKEN,
});

export default client;
