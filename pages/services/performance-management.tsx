// pages/strategic-vision.tsx

import { useEffect, useState } from 'react';
import { sanityTypes } from '../../src/types/sanityTypes';
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_27.svg";
import ServiceDetailsArea from "@/components/services/service-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

const defaultData: sanityTypes = {
  title: "",
  overview: "",
  objectives: [],
  services: [],
  addOns: [],
  customSolutions: [],
  pricing: [],
  whyChoose: [],
};

const ServiceDetailsPage = () => {
const [data, setData] = useState<sanityTypes | null>(defaultData); // Note: Ensure `defaultData` matches `sanityTypes`

  useEffect(() => {
    async function fetchData() {
      try {
        // Include the correct type and slug parameters in the request URL
        const response = await fetch('/api/sanity?type=services-digital-agencies&slug=performance-management');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: sanityTypes[] = await response.json();
        setData(result[0]); // Assuming the API returns an array with one item
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title={data?.title}
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
        <FooterThree style_2={true} />
      </div>
    </Wrapper>
  );
}

export default ServiceDetailsPage;
