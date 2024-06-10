import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import ContactArea from "@/components/contact/contact-area";
import FooterOne from "@/layout/footer/footer-one";
import shape from "@/assets/images/shape/shape_33.svg";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import Head from "next/head";


const ContactPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Contact - skillshift</title>
        <meta
          name="description"
          content="Get in touch to receive more information about our services' technologies, pricing, and more."
        />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Contact us for more info"
            subtitle="Get in touch to receive more information about our services' technologies, pricing, and more."
            page="Contact"
            shape={shape}
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
