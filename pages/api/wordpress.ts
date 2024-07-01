// pages/api/wordpress.ts

import type { NextApiRequest, NextApiResponse } from 'next';

const WP_API_URL = 'https://skillshift.com.au/wp-json/wp/v2/posts';

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media: number;  // ID of the featured media
  slug: string;  // Adding slug to interface
  _embedded?: any;  // Embedded field for additional linked resources
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<WPPost[] | WPPost | { message: string }>) {
  const { slug } = req.query;

  try {
    let url = `${WP_API_URL}?_embed`;
    if (slug) {
      url += `&slug=${slug}`;
    }

    console.log("Fetching URL:", url); // Debug log


    const response = await fetch(url);
    console.log("Response Status:", response.status); // Debug log

    if (!response.ok) {
      throw new Error(`Failed to fetch posts, Status code: ${response.status}`);
    }
    const posts: WPPost[] = await response.json();

    // Check if we're expecting a single post return and handle appropriately
    const dataToSend = slug ? posts[0] : posts.map(post => ({
      ...post,
      featured_media_src_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg',  // Default image if none
    }));

    res.status(200).json(dataToSend);
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    res.status(500).json({ message: 'Error fetching data from WordPress' });
  }
}
