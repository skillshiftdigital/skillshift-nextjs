// src/pages/api/all-services.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import client from '@/utils/sanity/client';

const query = `*[_type == "services-digital-agencies"]`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const services = await client.fetch(query);
    res.status(200).json({ services });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
}
