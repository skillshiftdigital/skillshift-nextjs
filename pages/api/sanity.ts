// pages/api/sanity.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '../../src/utils/sanity/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { type, slug } = req.query;

  if (!type || !slug) {
    res.status(400).json({ message: 'Missing type or slug parameter' });
    return;
  }

  const query = `*[_type == "${type}" && slug.current == "${slug}"]{
    title,
    overview,
    objectives,
    services,
    addOns,
    customSolutions,
    pricing,
    whyChoose
  }`;

  try {
    const data = await sanityClient.fetch(query);
    res.status(200).json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}
