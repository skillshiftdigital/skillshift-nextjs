// pages/[serviceSlug].tsx

import React, { useEffect, useState } from 'react';
import { sanityTypes } from '../../src/types/sanityTypes';
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterOne from "@/layout/footer/footer-one";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_27.svg";
import ServiceDetailsArea from "@/components/services/service-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import Head from 'next/head';

const defaultData: sanityTypes = {
  title: "",
  overview: "",
  objectives: [],
  services: [],
  addOns: [],
  customSolutions: [],
  pricing: [],
  whyChoose: [],
  shortDescription: '',
  objectivesPre: '',
  objectivesPost: '',
  _id: '',
  slug: ''
};

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { serviceSlug } = router.query;
  const [data, setData] = useState<sanityTypes | null>(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!serviceSlug) return;

      try {
        const response = await fetch(`/api/sanity?type=services-digital-agencies&slug=${serviceSlug}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: sanityTypes[] = await response.json();
        const publishedDocument = result.find(doc => !doc._id.startsWith('drafts.'));
        
        if (publishedDocument) {
          setData(publishedDocument);
          setIsLoading(false);
        } else {
          router.replace('/404');
        }
      } catch (error) {
        console.error("Fetch error:", error);
        router.replace('/404');
      }
    }

    fetchData();
  }, [router, serviceSlug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Head>
        <title>{data?.title} </title>
        <meta
          name="description"
          content="{data?.shortDescription}"
        />
      </Head>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title={data?.title || ""}
            subtitle="Offering solutions & services to address a spectrum of financial issues"
            page="Services"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />
          <ServiceDetailsArea data={data} />
          <FancyBannerThree />
          <NewsletterBanner />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { serviceSlug } = context.query;

  try {
    const response = await fetch(`http://localhost:3000/api/sanity?type=services-digital-agencies&slug=${serviceSlug}`);
    if (!response.ok) {
      return {
        notFound: true,
      };
    }
    const result: sanityTypes[] = await response.json();
    const publishedDocument = result.find(doc => !doc._id.startsWith('drafts.'));

    if (!publishedDocument) {
      return {
        notFound: true,
      };
    }

    return {
      props: {}, // Add props if needed
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default ServiceDetailsPage;
