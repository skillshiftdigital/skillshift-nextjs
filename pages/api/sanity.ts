import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '../../src/utils/sanity/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { type, slug, categoryId } = req.query;

  if (!type) {
    res.status(400).json({ message: 'Missing type parameter' });
    return;
  }

  let query;
  if (type === 'services-digital-agencies' && categoryId) {
    query = `*[_type == "${type}" && "${categoryId}" in categories[]._ref]{
      title,
      overview,
      shortDescription,
      objectivesPre,
      objectives,
      objectivesPost,
      services,
      addOns,
      customSolutions,
      pricing,
      whyChoose,
      _id,
      slug
    }`;
  } else if (type && slug) {
    query = `*[_type == "${type}" && slug.current == "${slug}"]{
      title,
      overview,
      shortDescription,
      objectivesPre,
      objectives,
      objectivesPost,
      services,
      addOns,
      customSolutions,
      pricing,
      whyChoose,
      _id
    }`;
  } else {
    res.status(400).json({ message: 'Missing slug parameter for type' });
    return;
  }

  try {
    const data = await sanityClient.fetch(query);
    res.status(200).json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}
