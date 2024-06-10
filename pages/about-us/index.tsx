import React from "react";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/media/img_26.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_25.svg";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import PartnersSliderOne from "@/components/partners/partners-slider-one";
import TeamSectionThree from "@/components/team/team-section-three";
/* import HomeFourBlogs from "@/components/blogs/home-4-blogs";
 */import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import Head from "next/head";


const AboutUsPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>About - skillshift </title>
        <meta
          name="description"
          content="We are a digital consulting firm assisting digital businesses to grow with a focus on people, data & growth."
        />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Hello, we are skillshift."
            subtitle="We are a digital consulting firm assisting digital agencies to grow with a focus on people, data & growth."
            page="About Us"
            bg_img={about_bg}
            shape={shape}
            style_2={true}
          />
          {/* breadcrumb end */}

          {/* text feature one area start */}
          <TextFeatureThree style_2={false} />
          {/* text feature one area end */}
          
          {/* text feature one area start */}
          <TextFeatureOne />
          {/* text feature one area end */}

          {/* block feature one area start */}
{/*           <BlockFeatureOne style_2={true} />
 */}          {/* block feature one area end */}

          {/* team three start */}
          <TeamSectionThree />
          {/* team three end */}

          {/* feedback one start */}
{/*           <FeedbackOne cls="top-border pt-80 pb-80" />
 */}          {/* feedback one end */}

          {/* partner logo start */}
          <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <PartnersSliderOne />
            </div>
          </div>
          {/* partner logo end */}



          {/* blogs start */}
{/*           <HomeFourBlogs cls="mt-180 lg-mt-80 mb-180 lg-mb-80" />
 */}          {/* blogs end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default AboutUsPage;
