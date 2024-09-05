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
        <title>
          Skillshift - Digital Transformation and Business Consulting in
          Australia
        </title>
        <meta
          name="description"
          content="SkillShift offers digital transformation and business consulting services, helping companies achieve their goals through technology and strategic advice."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.skillshift.com.au/" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Skillshift - Digital Transformation and Business Consulting in Australia"
        />
        <meta
          property="og:description"
          content="SkillShift offers digital transformation and business consulting services, helping companies achieve their goals through technology and strategic advice."
        />
        <meta
          property="og:image"
          content="https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg"
        />
        <meta property="og:url" content="https://www.skillshift.com.au/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Skillshift - Digital Transformation and Business Consulting in Australia"
        />
        <meta
          name="twitter:description"
          content="SkillShift offers digital transformation and business consulting services, helping companies achieve their goals through technology and strategic advice."
        />
        <meta
          name="twitter:image"
          content="https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg"
        />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SkillShift",
              image:
                "https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg",
              "@id": "https://www.skillshift.com.au",
              url: "https://www.skillshift.com.au",
              telephone: "+61-0432-695-309",
              address: {
                "@type": "PostalAddress",
                streetAddress: "55 Pyrmont Bridge Road",
                addressLocality: "Pyrmont",
                addressRegion: "New South Wales",
                postalCode: "2009",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-33.8723422",
                longitude: "151.1946724",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.linkedin.com/company/skillshiftdigital",
              ],
            }),
          }}
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
           */}{" "}
          {/* block feature three end */}
          {/* faq section start */}
          <FaqSectionOne />
          {/* faq section end */}
          {/* fancy banner two start */}
          <FancyBannerTwo />
          {/* fancy banner two end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}