// pages/contact/index.tsx

import React from "react";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ContactArea from "@/components/contact/contact-area";
import FooterOne from "@/layout/footer/footer-one";
import shape from "@/assets/images/shape/shape_33.svg";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import Head from "next/head";
import about_bg from "@/assets/images/media/img_26.jpg";


const ContactPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Contact SkillShift - Get in Touch for Digital Consulting Services</title>
        <meta
          name="description"
          content="Contact SkillShift for more information about our digital consulting services, technologies, pricing, and how we can help your business grow. Get in touch with our experts today."
        />
        <meta property="og:title" content="Contact SkillShift - Get in Touch for Digital Consulting Services" />
        <meta
          property="og:description"
          content="Contact SkillShift for more information about our digital consulting services, technologies, pricing, and how we can help your business grow. Get in touch with our experts today."
        />
        <meta property="og:image" content="https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg" />
        <meta property="og:url" content="https://www.skillshift.com.au/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact SkillShift - Get in Touch for Digital Consulting Services" />
        <meta
          name="twitter:description"
          content="Contact SkillShift for more information about our digital consulting services, technologies, pricing, and how we can help your business grow. Get in touch with our experts today."
        />
        <meta name="twitter:image" content="https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg" />
        <link rel="canonical" href="https://www.skillshift.com.au/contact" />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "SkillShift Contact Page",
              "description": "Contact SkillShift for more information about our digital consulting services, technologies, pricing, and how we can help your business grow.",
              "url": "https://www.skillshift.com.au/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "SkillShift",
                "url": "https://www.skillshift.com.au",
                "logo": "https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+61-432-695-309",
                  "contactType": "customer service",
                  "email": "info@skillshift.com.au",
                  "areaServed": "AU",
                  "availableLanguage": "English"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "55 Pyrmont Bridge Road",
                  "addressLocality": "Pyrmont",
                  "addressRegion": "New South Wales",
                  "postalCode": "2009",
                  "addressCountry": "AU"
                }
              }
            })
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
            title="Contact us for more info."
            subtitle="Get in touch to receive more information about our services' technologies, pricing, and more."
            page="Contact"
            bg_img={about_bg}
            shape={shape}
            style_2={true}
          />
          {/* breadcrumb end */}

          {/* contact area start */}
          <ContactArea />
          {/* contact area end */}

          {/* newsletter start */}
          <NewsletterBanner />
          {/* newsletter end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ContactPage;
