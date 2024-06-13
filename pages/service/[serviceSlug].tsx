import React, { useEffect, useState } from 'react';
import { sanityTypes } from '@/types/sanityTypes';
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
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import PricingArea from '@/components/pricing/pricing-area';
import AddOnServices from '@/components/block-feature/add-on-services';
import WhyChoose from '@/components/block-feature/why-choose';


interface ServiceDetailsPageProps {
  service: sanityTypes;
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ service }) => {
  const router = useRouter();
  const [data, setData] = useState<sanityTypes | null>(service);

  useEffect(() => {
    if (!service) {
      router.replace('/404');
    } else {
      setData(service);
    }
  }, [router, service]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.shortDescription} />
      </Head>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title={data.title}
            subtitle="Offering solutions & services to address a spectrum of digital businesses needs."
            page="Services"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />
          <ServiceDetailsArea data={data} />
          <AddOnServices addOns={data.addOns} />
          <PricingArea pricing={data.pricing} />
          <WhyChoose />
          <FancyBannerThree />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch('https://skillshift-nextjs.vercel.app/api/sanity?type=services-digital-agencies');
    const services = await response.json();

    // Log the response for debugging
    console.log('Services Response:', services);

    if (!Array.isArray(services)) {
      throw new Error('Expected an array of services');
    }

    const paths = services.map((service: sanityTypes) => ({
      params: { serviceSlug: service.slug.current },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching services:', error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { serviceSlug } = context.params as { serviceSlug: string };

  try {
    const response = await fetch(`https://skillshift-nextjs.vercel.app/api/sanity?type=services-digital-agencies&slug=${serviceSlug}`);
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
      props: { service: publishedDocument },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default ServiceDetailsPage;
