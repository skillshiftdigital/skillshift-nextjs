// components/blogs/blog-grid-area.tsx

'use client';
import React from 'react';
import usePagination from '@/hooks/use-pagination';
import Pagination from '@/ui/pagination';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
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
  author: { name: string };
  mainImage: { asset: { _ref: string } };
  body: { _key: string, _type: string, children: { _key: string, _type: string, text: string }[], style: string }[];
  categories: { title: string }[];
}

interface BlogGridAreaProps {
  posts: BlogPost[];
}

const BlogGridArea: React.FC<BlogGridAreaProps> = ({ posts }) => {
  const { currentItems, handlePageClick, pageCount } = usePagination<BlogPost>(posts, 4);

  return (
    <div className="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="position-relative">
          <div className="row gx-xxl-5">
            {currentItems.map((post) => (
              <div key={post._id} className="col-md-6">
                <article className="blog-meta-two mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.1s">
                  <figure
                    className="post-img rounded-5 position-relative d-flex align-items-end m0"
                    style={{
                      backgroundImage: post.mainImage && post.mainImage.asset ? `url(${urlFor(post.mainImage.asset._ref).width(800).url()})` : 'defaultBackgroundImageUrl',
                    }}
                  >
                    <Link href={`/blog/${post.slug.current}`}>
                      <div className="stretched-link rounded-5 date tran3s">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </Link>
                  </figure>
                  <div className="post-data">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <Link href={`/blog/${post.slug.current}`}>
                        <h4 className="blog-title">{post.title}</h4>
                      </Link>
                      <Link href={`/blog/${post.slug.current}`}>
                        <div className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
                          <i className="bi bi-arrow-up-right"></i>
                        </div>
                      </Link>
                    </div>
                    <div className="post-info">
                      {post.body && post.body.length > 0 && post.body[0].children && post.body[0].children.length > 0
                        ? post.body[0].children[0].text
                        : 'No content available'}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>
    </div>
  );
};

export default BlogGridArea;
