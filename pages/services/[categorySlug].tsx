// pages/services/[categorySlug].tsx

import Image, { StaticImageData } from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sanityTypes } from "@/types/sanityTypes";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterOne from "@/layout/footer/footer-one";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_27.svg";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import arrow from "@/assets/images/icon/icon_09.svg";
import icon from "@/assets/images/icon/icon_76.svg";
import icon_1 from "@/assets/images/icon/icon_03.svg";
import icon_2 from "@/assets/images/icon/icon_04.svg";
import icon_3 from "@/assets/images/icon/icon_05.svg";
import Head from "next/head";

const defaultData: sanityTypes = {
  title: "",
  overview: "",
  objectivesPre: "",
  objectives: [],
  objectivesPost: "",
  services: [],
  addOns: [],
  customSolutions: [],
  pricing: [],
  whyChoose: [],
  shortDescription: "",
  slug: { current: "" },
  _id: "",
};

type Service = {
  slug: string | { current: string };
};

interface ServiceDetailsPageProps {
  validCategoryData: sanityTypes;
  validServices: sanityTypes[];
  style_2?: boolean;
}

// card style one item
function UpperCardItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-one d-flex w-100 mb-35">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <div className="text ps-4">
        <h4 className="fw-bold">{title}</h4>
        <p className="pe-xl-4">{subtitle}</p>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch('https://skillshift-nextjs.vercel.app/api/sanity?type=category');
    const categories = await response.json();

    // Log the response for debugging
    console.log('Categories Response:', categories);

    if (!Array.isArray(categories)) {
      throw new Error('Expected an array of categories');
    }

    const paths = categories.map((category: sanityTypes) => ({
      params: { categorySlug: category.slug.current },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { paths: [], fallback: true };
  }
};


export const getStaticProps: GetStaticProps = async (context) => {
  const { categorySlug } = context.params as { categorySlug: string };

  try {
    console.log(`Fetching data for category slug: ${categorySlug}`);

    // Fetch category data by slug
    const categoryResponse = await fetch(`https://skillshift-nextjs.vercel.app/api/sanity?type=category`);
    const categories: sanityTypes[] = await categoryResponse.json();

    if (!categoryResponse.ok || !categories.length) {
      console.error(`Failed to fetch category data`);
      return {
        notFound: true,
      };
    }

    // Log the fetched categories data
    console.log(`Fetched categories data:`, categories);

    // Find the valid category data based on the slug
    const validCategoryData = categories.find(category => category.slug.current === categorySlug);

    if (!validCategoryData) {
      console.error(`No valid category data found for slug: ${categorySlug}`);
      return {
        notFound: true,
      };
    }

    console.log(`Valid category data for slug: ${categorySlug}`, validCategoryData);

    // Fetch services associated with the valid category
    const categoryId = validCategoryData._id;
    const servicesResponse = await fetch(`https://skillshift-nextjs.vercel.app/api/sanity?type=services-digital-agencies&categoryId=${categoryId}`);
    const servicesResult: sanityTypes[] = await servicesResponse.json();

    if (!servicesResponse.ok || !servicesResult.length) {
      console.error(`Failed to fetch services data for category ID: ${categoryId}`);
      return {
        notFound: true,
      };
    }

    // Filter out draft services
    const validServices = servicesResult.filter(service => !service._id.startsWith('drafts.'));

    console.log(`Valid services for category ID: ${categoryId}`, validServices);

    return {
      props: {
        validCategoryData,
        validServices,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(`Error in getStaticProps for category slug: ${categorySlug}`, error);
    return {
      notFound: true,
    };
  }
};

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ validCategoryData, validServices, style_2 = false }) => {
  const router = useRouter();
  const [data, setData] = useState<sanityTypes | null>(validCategoryData);
  const [services, setServices] = useState<sanityTypes[] | null>(validServices);

  useEffect(() => {
    if (!validCategoryData) {
      router.replace('/404');
    } else {
      setData(validCategoryData);
      setServices(validServices);
    }
  }, [router, validCategoryData, validServices]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Head>
  <title>{`${data.title} Services - SkillShift`}</title>
  <meta name="description" content={data.shortDescription || `Explore our ${data.title} services at SkillShift. We offer solutions to address a spectrum of digital agency needs.`} />
  <meta name="keywords" content={`${data.title}, digital services, business consulting, Australia, SkillShift`} />
  <meta property="og:title" content={`${data.title} Services - SkillShift`} />
  <meta property="og:description" content={data.shortDescription || `Explore our ${data.title} services at SkillShift. We offer solutions to address a spectrum of digital agency needs.`} />
  <meta property="og:image" content="https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg" />
  <meta property="og:url" content={`https://www.skillshift.com.au/services/${data.slug.current}`} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${data.title} Services - SkillShift`} />
  <meta name="twitter:description" content={data?.shortDescription || `Explore our ${data?.title} services at SkillShift. We offer solutions to address a spectrum of digital agency needs.`} />
  <meta name="twitter:image" content="https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg" />
  <link rel="canonical" href={`https://www.skillshift.com.au/services/${data?.slug?.current || ''}`} />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${data?.title || ''} Services`,
      "description": data?.shortDescription || `Explore our ${data?.title || ''} services at SkillShift. We offer solutions to address a spectrum of digital agency needs.`,
      "url": `https://www.skillshift.com.au/services/${data?.slug?.current || ''}`,
      "provider": {
        "@type": "Organization",
        "name": "SkillShift",
        "url": "https://www.skillshift.com.au"
      },
      "offers": services?.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDescription,
          "url": `https://www.skillshift.com.au/service/${service.slug.current}`
        }
      })) || []
    })
  }}
/>
</Head>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title={data?.title || ""}
            subtitle="Offering solutions & services to address a spectrum of digital businesses needs."
            page="Services"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />  

          <div className={`block-feature-one position-relative ${style_2 ? "light-bg-deep mt-150 lg-mt-80 pt-120 lg-pt-60 pb-130 lg-pb-60" : "pt-75"}`}>
            {!style_2 && (
              <div className="upper-wrapper mb-110 lg-mb-80">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                      <UpperCardItem
                        icon={icon_2}
                        title="People-first"
                        subtitle="We want to pass you our knowledge and expertise."
                      />
                    </div>
                    <div className="col-lg-4 wow fadeInUp">
                      <UpperCardItem
                        icon={icon_1}
                        title="Data-led"
                        subtitle="We want to show you new ways of using data and technologies."
                      />
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                      <UpperCardItem
                        icon={icon_3}
                        title="Growth-oriented"
                        subtitle="We want to help you grow and your business to thrive."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="container">
              <div className="position-relative">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-one text-center text-md-start mb-30 sm-mb-10">
                      <h2>We transform ideas into impact</h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  {services?.map((service, index) => (
                    <div key={index} className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                      <div className="card-style-two vstack tran3s w-100 mt-30">
                        <Image src={icon} alt="icon" className="lazy-img icon me-auto" />
                        <Link href="/service/[serviceSlug]" as={`/service/${service.slug.current}`}>
                        <h4 className="fw-bold mt-30 mb-25">{service.title}</h4>
                        </Link>
                        <p className="mb-20">{service.shortDescription}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="section-subheading sm-mt-40">
                  <p className="text-lg">
                    We provide a range of services focused on helping digital businesses grow and thrive.
                  </p>
                  <Link href="/services/all-services" className="btn-three icon-link">
                    <span>See All Services</span>
                    <Image src={arrow} alt="arrow" className="lazy-img icon ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <NewsletterBanner />
        </main>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default ServiceDetailsPage;