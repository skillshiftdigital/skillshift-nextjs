import React from "react";
import BlogDetailsCommentArea from "./blog-details-comment-area";
import BlogDetailsForm from "@/components/forms/blog-details-form";
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

const BlogDetailsArea = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${urlFor(blog.mainImage.asset._ref).width(800).url()})` }}
              >
                <div className="date">
                  {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </figure>
              <div className="post-data">
                <div className="post-info">
                  {blog.body && blog.body.length > 0 && blog.body[0].children && blog.body[0].children.length > 0
                    ? blog.body[0].children[0].text
                    : 'No content available'}
                </div>
                <div className="blog-title">
                  <h4>{blog.title}</h4>
                </div>
                <div className="post-details-meta">
                  {blog.body.map((block) => (
                    <div key={block._key}>
                      {block.children.map((child) => (
                        <p key={child._key}>{child.text}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <BlogDetailsCommentArea />
            <div className="blog-comment-form grey-bg">
              <h3 className="blog-inner-title">Add Your Comments</h3>
              <p>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  className="text-decoration-underline fw-500"
                >
                  Sign in
                </a> to post your comment or signup if you do not have any account.
              </p>
              <BlogDetailsForm />
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            {/* <BlogSidebar /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
