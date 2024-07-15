import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterOne from "@/layout/footer/footer-one";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_26.svg";
import ServiceOneArea from "@/components/services/serviceNine";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import Head from "next/head";

const ServicePage = () => {
  return (
    <Wrapper>
            <Head>
        <title>Services - skillshift </title>
        <meta
          name="description"
          content="SkillShift offers tailored digital transformation services for Australian businesses, including web development, SEO, and paid media. Our expert team drives performance and innovation."
        />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our offerings & Services"
            subtitle="Offering solutions & services to address a spectrum of business issues."
            page="Services"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />
          {/* breadcrumb end */}

          {/* service v1 area start */}
          <ServiceOneArea />
          {/* service v1 area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner/>
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterOne/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ServicePage;
