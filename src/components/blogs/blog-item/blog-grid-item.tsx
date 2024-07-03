import React from 'react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/utils/sanity/client';

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

const BlogGridItem = ({ blog }: { blog: BlogPost }) => {
  return (
    <article className="blog-meta-two mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.1s">
      <figure
        className="post-img rounded-5 position-relative d-flex align-items-end m0"
        style={{
          backgroundImage: `url(${urlFor(blog.mainImage.asset._ref).width(800).url()})`,
        }}
      >
        <Link href={`/blog/${blog.slug.current}`}>
          <div className="stretched-link rounded-5 date tran3s">
            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </Link>
      </figure>
      <div className="post-data">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/blog/${blog.slug.current}`}>
            <h4 className="blog-title">{blog.title}</h4>
          </Link>
          <Link href={`/blog/${blog.slug.current}`}>
            <div className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </Link>
        </div>
        <div className="post-info">
          {blog.body && blog.body.length > 0 && blog.body[0].children && blog.body[0].children.length > 0
            ? blog.body[0].children[0].text
            : 'No content available'}
        </div>
      </div>
    </article>
  );
};

export default BlogGridItem;
