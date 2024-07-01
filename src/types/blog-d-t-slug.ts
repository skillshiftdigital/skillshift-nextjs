type Author = {
    name: string;
    image: string;
  };
  
  export type WPPost = {
    title: string;
    slug: string;
    author: Author;
    publishedAt: string;
  };