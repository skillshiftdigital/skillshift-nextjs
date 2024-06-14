import React from "react";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterTwo from "@/layout/footer/footer-two";
import BlogGridArea from "@/components/blogs/blog-grid-area";
import shape from "@/assets/images/shape/shape_26.svg";
import service_bg from "@/assets/images/media/img_32.jpg";

const BlogGridPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Insights & resources"
            subtitle="Explore our latest insights and resources, including blogs, articles, and more."
            page="insights"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />
          {/* breadcrumb end */}

          {/* blog grid area start */}
          <BlogGridArea />
          {/* blog grid area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterTwo />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogGridPage;
