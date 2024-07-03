import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import client from '@/utils/sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Define the structure of a BlogPost
interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  slug: { current: string };
  author: { _ref: string };
  mainImage: { asset: { _ref: string } };
  body: { _key: string, _type: string, children: { _key: string, _type: string, text: string }[], style: string }[];
  categories: { _key: string, _ref: string }[];
}

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage.asset._ref).width(800).url()}
          alt={post.title}
        />
      )}
      <div>
        {post.body.map((block) => (
          <div key={block._key}>
            {block.children.map((child) => (
              <p key={child._key}>{child.text}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
    *[_type == "blogPost"] {
      slug {
        current
      }
    }
  `;
  const posts = await client.fetch(query);

  const paths = posts.map((post: { slug: { current: string } }) => ({
    params: { blogSlug: post.slug.current },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { blogSlug } = context.params!;
  const query = `
    *[_type == "blogPost" && slug.current == $blogSlug][0] {
      _id,
      title,
      publishedAt,
      slug,
      author,
      mainImage,
      body,
      categories
    }
  `;
  const post = await client.fetch(query, { blogSlug });

  return {
    props: {
      post,
    },
    revalidate: 1, // Revalidate at most once every second
  };
};

export default BlogPostPage;
