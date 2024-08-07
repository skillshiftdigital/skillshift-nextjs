// pages/index.tsx

import Wrapper from "@/layout/wrapper";
import HeaderTwoDark from "@/layout/header/header-two-dark";
import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import FancyBannerOne from "@/components/fancy-banner/fancy-banner-one";
import BlockFeatureOne from "@/components/block-feature/servicesNine";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import BlockFeatureTwo from "@/components/block-feature/block-feature-two";
import FaqSectionOne from "@/components/faq/faq-section-one";
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
          content="SkillShift offers digital transformation and business consulting services, helping companies achieve their goals through technology and strategic advice."
        />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwoDark />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerSix />
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
