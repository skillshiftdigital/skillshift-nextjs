import React from "react";
import BlogDetailsCommentArea from "./blog-details-comment-area";
import BlogDetailsForm from "@/components/forms/blog-details-form";
import { WPPost } from "@/types/blog-d-t-slug";

const BlogDetailsArea = ({ blog }: { blog: WPPost }) => {
  const {
    publishedAt: date,
    title,
    author,
    body,
    //featured_media_src_url,
  } = blog;
 console.log("blog", blog);

  return (
    <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                //style={{ backgroundImage: `url(${featured_media_src_url})` }}
              >
                <div className="date">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </figure>
              <div className="post-data">
                <div className="post-info">
                  <span>{author.name}</span>
                </div>
                <div className="blog-title">
                  <h4>{title}</h4>
                </div>
                <div className="post-details-meta">
                  <h4>{body}</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;