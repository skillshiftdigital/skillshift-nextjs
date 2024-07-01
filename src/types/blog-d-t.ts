//@/components/types/blog-d-t.ts

export type WPPost = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media_src_url: string;
  slug: string;
  content: { rendered: string };

};

