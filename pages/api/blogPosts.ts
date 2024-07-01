//api/blogPosts.ts


import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@/utils/sanity/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { slug } = req.query;

  // 参数验证
  if (!slug || typeof slug !== 'string') {
    res.status(400).json({ message: 'Invalid or missing slug parameter.' });
    return;
  }

  // 使用参数化查询以增强安全性
  const query = `*[_type == "blogPost" && slug.current == $slug]{
    title,
    slug,
    author->{name, image},
    categories[]->{title, slug},
    publishedAt,
    body
  }`;

  try {
    // 执行查询，传递参数
    const data = await sanityClient.fetch(query, { slug });

    // 如果没有找到数据，返回404
    if (!data || data.length === 0) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    // 成功响应
    res.status(200).json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}