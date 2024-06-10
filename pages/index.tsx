import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import FancyBannerOne from "@/components/fancy-banner/fancy-banner-one";
import BlockFeatureOne from "@/components/block-feature/servicesNine";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import BlockFeatureTwo from "@/components/block-feature/block-feature-two";
import BlockFeatureThree from "@/components/block-feature/block-feature-three";
import TeamSectionOne from "@/components/team/team-section-one";
import FaqSectionOne from "@/components/faq/faq-section-one";
import HomeTwoBlogs from "@/components/blogs/home-2-blogs";
import FancyBannerTwo from "@/components/fancy-banner/fancy-banner-two";
import FooterOne from "@/layout/footer/footer-one";
import Head from "next/head";


export default function skillshifthome() {
  return (
    <Wrapper>
      <Head>
              <title>Skillshift - Digital Transformation and Business Consulting in Australia </title>
        <meta
          name="description"
          content="Skillshift is a digital transformation and business consulting company that provides technology and business consulting services to help companies achieve their business goals."
        />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerTwo />
          {/* hero banner end */}

          {/* fancy banner one start */}
          <FancyBannerOne />
          {/* fancy banner one end */}

          {/* block feature one start */}
          <BlockFeatureOne />
          {/* block feature one end */}

          {/* text feature one start */}
          <TextFeatureOne />
          {/* text feature one end */}

          {/* block feature two start */}
          <BlockFeatureTwo />
          {/* block feature two end */}

          {/* block feature three start */}
{/*           <BlockFeatureThree />
 */}          {/* block feature three end */}

          {/* faq section start */}
          <FaqSectionOne />
          {/* faq section end */}

          {/* blog item start */}
{/*           <HomeTwoBlogs />
 */}          {/* blog item end */}

          {/* fancy banner two start */}
           <FancyBannerTwo />
          {/* fancy banner two end */}
        </main>

        {/* footer start */}
        <FooterOne/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
