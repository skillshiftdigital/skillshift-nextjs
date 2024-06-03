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
  projectId: 'a3n3iq2v', // Replace with your Sanity project ID
  dataset: 'production', // or your dataset name
  apiVersion: '2023-03-25', // Use a date in the format YYYY-MM-DD
  useCdn: true,// `false` if you want fresh data
  token: 'skGq1oM4EuDFPWhrEAUusPYAGwGVFWzquyHAxODK4wVVY9X6BEhI9YHlJ861O5Qw6ccKvpLvsqMVTnMtQ5JUHWNmqNsXY7TXq7ZrwNR9vIbgHhL86EOsYnegL3RFOX7AeSzaILeQ3S479zUaJWcoHnEW6lCzegivVEUGpCLbSirkjJP1deHX'
});

export default client;
