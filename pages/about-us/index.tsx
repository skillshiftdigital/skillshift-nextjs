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
import TeamSectionThree from "@/components/team/team-section-three";
/* import HomeFourBlogs from "@/components/blogs/home-4-blogs";
 */ import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import Head from "next/head";
import WhoWeAre from "@/components/text-feature/who-we-are";

const AboutUsPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>About SkillShift - Digital Consulting for Business Growth</title>
        <meta
          name="description"
          content="SkillShift is a digital consulting firm assisting businesses to grow with a focus on people, data & growth. Learn about our mission, values, and expertise."
        />
        <meta
          property="og:title"
          content="About SkillShift - Digital Consulting for Business Growth"
        />
        <meta
          property="og:description"
          content="SkillShift is a digital consulting firm assisting businesses to grow with a focus on people, data & growth. Learn about our mission, values, and expertise."
        />
        <meta
          property="og:image"
          content="https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg"
        />
        <meta property="og:url" content="https://www.skillshift.com.au/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About SkillShift - Digital Consulting for Business Growth"
        />
        <meta
          name="twitter:description"
          content="SkillShift is a digital consulting firm assisting businesses to grow with a focus on people, data & growth. Learn about our mission, values, and expertise."
        />
        <meta
          name="twitter:image"
          content="https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg"
        />
        <link rel="canonical" href="https://www.skillshift.com.au/about-us" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SkillShift",
              url: "https://www.skillshift.com.au",
              logo: "https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg",
              description:
                "SkillShift is a digital consulting firm assisting businesses to grow with a focus on people, data & growth.",
              founder: {
                "@type": "Person",
                name: "Bemoi George",
              },
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pyrmont",
                addressRegion: "New South Wales",
                addressCountry: "Australia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+61-432-695-309",
                email: "info@skillshift.com.au",
              },
              sameAs: ["https://www.linkedin.com/company/skillshiftdigital"],
              areaServed: {
                "@type": "Country",
                name: "Australia",
              },
              serviceArea: {
                "@type": "Country",
                name: "Australia",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Digital Transformation Consulting",
                    description:
                      "We help businesses adapt and thrive in the digital age.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Data-Driven Business Strategy",
                    description:
                      "We leverage data to inform and optimize business strategies.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Growth-Oriented Solutions",
                    description:
                      "We provide tailored solutions to drive business growth.",
                  },
                },
              ],
            }),
          }}
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
           */}{" "}
          {/* block feature one area end */}
          {/* team three start */}
{/*           <TeamSectionThree />
 */}          {/* team three end */}
          {/* feedback one start */}
          {/*           <FeedbackOne cls="top-border pt-80 pb-80" />
           */}{" "}
          {/* feedback one end */}
          {/* partner logo start */}
          {/*           <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <PartnersSliderOne />
            </div>
          </div> */}
          {/* partner logo end */}
          {/* blogs start */}
          {/*           <HomeFourBlogs cls="mt-180 lg-mt-80 mb-180 lg-mb-80" />
           */}{" "}
          {/* blogs end */}
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
