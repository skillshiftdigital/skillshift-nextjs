// src/pages/services/all-services.tsx
import React from 'react';
import { GetServerSideProps, NextPageContext } from 'next';
import Wrapper from '@/layout/wrapper';
import HeaderTwo from '@/layout/header/header-two';
import BreadcrumbOne from '@/components/breadcrumb/breadcrumb-one';
import FooterOne from '@/layout/footer/footer-one';
import service_bg from '@/assets/images/media/img_32.jpg';
import FancyBannerThree from '@/components/fancy-banner/fancy-banner-three';
import shape from '@/assets/images/shape/shape_26.svg';
import NewsletterBanner from '@/components/newsletter/newsletter-banner';
import { sanityTypes } from '@/types/sanityTypes';
import BlockAllServices from '@/components/block-feature/block-all-services';
import client from '@/utils/sanity/client';
import Head from 'next/head';

interface ServicePageProps {
  services: sanityTypes[];
}

const ServicePage: React.FC<ServicePageProps> = ({ services }) => {
  return (
    <Wrapper>
      <Head>
        <title>All Services - skillshift </title>
        <meta
          name="description"
          content="Explore our comprehensive range of solutions and services designed to meet the diverse needs of digital businesses. From innovative strategies to cutting-edge technologies, we provide tailored solutions that drive growth, enhance efficiency, and foster success in the digital landscape."
        />
      </Head>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Our offerings & Services"
            subtitle="Offering solutions & services to address a spectrum of business issues."
            page="Services"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />
          <BlockAllServices services={services} />
          <FancyBannerThree />
          <NewsletterBanner />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const services = await client.fetch(`*[_type == "services-digital-agencies" && !(_id in path('drafts.**'))]`);
    return {
      props: {
        services,
      },
    };
  } catch (error) {
    return {
      props: {
        services: [],
      },
    };
  }
};

export default ServicePage;
