import Image, { StaticImageData } from "next/image";
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
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";


type Service = {
  slug: string | { current: string };
};

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

interface ServiceDetailsPageProps {
  validCategoryData: sanityTypes;
  validServices: sanityTypes[];
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ validCategoryData, validServices }) => {
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
        <title>{data.title} - SkillShift</title>
        <meta name="description" content={data.shortDescription} />
      </Head>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title={data.title}
            subtitle="Offering solutions & services to address a spectrum of digital agency needs"
            page="Services"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />

          <div className={`block-feature-one position-relative ${data.style_2 ? "light-bg-deep mt-150 lg-mt-80 pt-120 lg-pt-60 pb-130 lg-pb-60" : "pt-75"}`}>
            {!data.style_2 && (
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
                        <Link href={`/service/${typeof service.slug === 'string' ? service.slug : (service.slug as { current: string }).current}`}>
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
    const categoryResponse = await fetch(`https://skillshift-nextjs.vercel.app/api/sanity?type=category&slug=${categorySlug}`);
    if (!categoryResponse.ok) {
      return {
        notFound: true,
      };
    }
    const categoryData: sanityTypes[] = await categoryResponse.json();
    const validCategoryData = categoryData.find(doc => !doc._id.startsWith('drafts.'));

    if (!validCategoryData) {
      return {
        notFound: true,
      };
    }

    const categoryId = validCategoryData._id;
    const servicesResponse = await fetch(`https://skillshift-nextjs.vercel.app/api/sanity?type=services-digital-agencies&categoryId=${categoryId}`);
    if (!servicesResponse.ok) {
      return {
        notFound: true,
      };
    }
    const servicesResult: sanityTypes[] = await servicesResponse.json();
    const validServices = servicesResult.filter(service => !service._id.startsWith('drafts.'));

    return {
      props: {
        validCategoryData,
        validServices,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ServiceDetailsPage;
