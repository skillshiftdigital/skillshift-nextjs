//api/blogPosts.ts


import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@/utils/sanity/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { slug } = req.query;

  // Parameter Validation 
  if (!slug || typeof slug !== 'string') {
    res.status(400).json({ message: 'Invalid or missing slug parameter.' });
    return;
  }

  // Check for phrases
  const query = `*[_type == "blogPost" && slug.current == $slug]{
    title,
    slug,
    author->{name, image},
    categories[]->{title, slug},
    publishedAt,
    body
  }`;

  try {
    // Query, pass parameters
    const data = await sanityClient.fetch(query, { slug });

    // 如果没有找到数据，返回404
    if (!data || data.length === 0) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    // Successful response
    console.log(JSON.stringify(data[0], null, 2));
    res.status(200).json(data[0]);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}