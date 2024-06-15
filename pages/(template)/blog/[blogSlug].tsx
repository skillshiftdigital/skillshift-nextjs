// /pages/blog/[blogSlug].tsx

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BlogDetailsArea from "@/components/blogs/blog-details/blog-details-area";
import shape from "@/assets/images/shape/shape_35.svg";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import { WPPost } from "@/types/blog-d-t";

const BlogDetailsPage = () => {
  const [blog, setBlog] = useState<WPPost | null>(null);
  const router = useRouter();
  const { blogSlug } = router.query;

  useEffect(() => {
    if (!blogSlug || typeof blogSlug !== 'string') return; // Ensure blogSlug is present and is a string
    const fetchBlog = async () => {
      if (!blogSlug || typeof blogSlug !== 'string') return;
      try {
        const response = await fetch(`/api/wordpress?slug=${blogSlug}`);
        const data: WPPost = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setBlog(null);
      }
    };

    fetchBlog();
  }, [blogSlug]); // Dependency array updated to reflect the use of blogSlug

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Single Blog Details"
            subtitle="Meet our experts, guiding you through financial intricacies with precision"
            page="Blog"
            bg_img={blog_bg}
            style_2={true}
            shape={shape}
          />

          {blog ? (
            <BlogDetailsArea blog={blog} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any blog with slug {blogSlug}</h3>
              </div>
            </div>
          )}

          <FancyBannerThree />
          <NewsletterBanner />
        </main>
        <FooterThree style_2={true} />
      </div>
    </Wrapper>
  );
};

export default BlogDetailsPage;