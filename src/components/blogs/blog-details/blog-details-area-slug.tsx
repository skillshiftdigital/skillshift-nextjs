import React from "react";
/* import BlogSidebar from "../blog-sidebar";
 */import BlogDetailsCommentArea from "./blog-details-comment-area";
import BlogDetailsForm from "@/components/forms/blog-details-form";
import { WPPost } from "@/types/blog-d-t";

const BlogDetailsArea = ({ blog }: { blog: WPPost }) => {
  const {
    date,
    title: { rendered: titleRendered } = { rendered: 'default' },
    excerpt: { rendered: excerptRendered } = { rendered: 'default' },
    content: { rendered: ContentRendered } = { rendered: 'default' },
    featured_media_src_url,
  } = blog;

  return (
    <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${featured_media_src_url})` }}
              >
                <div className="date">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </figure>
              <div className="post-data">
                <div className="post-info" dangerouslySetInnerHTML={{ __html: excerptRendered }} />
                <div className="blog-title">
                  <h4 dangerouslySetInnerHTML={{ __html: titleRendered }} />
                </div>
                <div className="post-details-meta">
                <h4 dangerouslySetInnerHTML={{ __html: ContentRendered }} />
                </div>
                {/* Example of tag and share links, make sure these are dynamically generated or relevant */}
                {/* <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  <ul className="d-flex align-items-center tags style-none pt-20">
                    <li>Tag:</li>
                    <li>
                      <Link href="#"><a>Finance</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Loan</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Banking</a></Link>
                    </li>
                  </ul>
                  <ul className="d-flex share-icon align-items-center style-none pt-20">
                    <li>Share:</li>
                    <li>
                      <Link href="#"><a><i className="bi bi-facebook"></i></a></Link>
                    </li>
                    <li>
                      <Link href="#"><a><i className="bi bi-twitter"></i></a></Link>
                    </li>
                    <li>
                      <Link href="#"><a><i className="bi bi-instagram"></i></a></Link>
                    </li>
                  </ul>
                </div> */}
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
{/*             <BlogSidebar />
 */}          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
