// components/blogs/blog-item/BlogGridItem.tsx

import React from "react";
import { WPPost } from "@/types/blog-d-t";
import Link from "next/link";

const BlogGridItem = ({ blog }: { blog: WPPost }) => {
  return (
    <article className="blog-meta-two mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.1s">
      <figure className="post-img rounded-5 position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${blog.featured_media_src_url})` }}>
        {/* Link to the blog detail page using the slug */}
        <Link href={`/blog/${blog.slug}`}>
  <div className="stretched-link rounded-5 date tran3s">
    {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
  </div>
</Link>
      </figure>
      <div className="post-data">
  <div className="d-flex justify-content-between align-items-center flex-wrap">
    {/* Make sure to use blog.slug instead of blog.id */}
    <Link href={`/blog/${blog.slug}`}>
      <h4 className="blog-title" dangerouslySetInnerHTML={{ __html: blog.title.rendered }}></h4>
    </Link>
    <Link href={`/blog/${blog.slug}`}>
      <div className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s">
        <i className="bi bi-arrow-up-right"></i>
      </div>
    </Link>
  </div>
  <div className="post-info" dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} />
</div>
    </article>
  );
};


export default BlogGridItem;
