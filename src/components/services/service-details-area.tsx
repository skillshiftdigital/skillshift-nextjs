// src/components/services/service-details-area.tsx

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { sanityTypes } from "@/types/sanityTypes";
import PricingArea from "@/components/pricing/pricing-area";

// internal
import service_img from "@/assets/images/media/img_53-min.webp";
import icon_1 from "@/assets/images/icon/icon_72.svg";
import icon_2 from "@/assets/images/icon/icon_73.svg";
import icon_3 from "@/assets/images/icon/icon_74.svg";
import icon_4 from "@/assets/images/icon/icon_75.svg";
import icon_5 from "@/assets/images/icon/icon_76.svg";
import icon_6 from "@/assets/images/icon/icon_77.svg";
import icon_7 from "@/assets/images/icon/icon_78.svg";
import icon_8 from "@/assets/images/icon/icon_79.svg";
import icon_9 from "@/assets/images/icon/icon_80.svg";
import icon_10 from "@/assets/images/icon/icon_81.svg";
import icon_11 from "@/assets/images/icon/icon_82.svg";
import icon_12 from "@/assets/images/icon/icon_83.svg";
import icon_13 from "@/assets/images/icon/icon_84.svg";
import ils_icon from "@/assets/images/assets/ils_03.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import icon from "@/assets/images/assets/ils_04.svg";

interface ServiceNavItem {
  icon: StaticImageData;
  title: string;
  active?: boolean;
}

interface CardItemProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

interface ServiceDetailsProps {
  data: sanityTypes | null;
}

// ServiceNav Component
// ServiceNav
function ServiceNav({
  icon,
  title,
  active,
}: {
  icon: StaticImageData;
  title: string;
  active?: boolean;
}) {
  return (
    <li>
      <Link
        href="#"
        className={`d-flex align-items-center w-100 ${active ? "active" : ""}`}
      >
        <Image src={icon} alt="icon" className="lazy-img" />
        <span>{title}</span>
      </Link>
    </li>
  );
}

// CardItem
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  );
}
// style
const imgStyle = {
  height: "auto",
};

// ServiceDetailsArea Component
const ServiceDetailsArea = ({ data }: ServiceDetailsProps) => {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-lg-12 order-lg-last">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>{data?.title}</h2>
              <p>{data?.overview}</p>
              <div className="img-meta mb-60 lg-mb-40">
                <Image
                  src={service_img}
                  alt="service_img"
                  className="lazy-img w-100 rounded-4"
                  width={5231}
                  height={3487}
                  layout="responsive"
                  style={imgStyle}
                  objectFit="cover"
                />
              </div>
              <h3>We help you with</h3>
              <p>{data?.objectivesPre}</p>
              <ul className="style-none list-item pb-20">
                {data?.objectives?.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
              <p>{data?.objectivesPost}</p>
              <div className="block-feature-ten position-relative mt-150 lg-mt-80 pb-100 lg-pb-60">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-8 wow fadeInUp">
                      <div className="title-one mb-50 lg-mb-20">
                        <h2>How we do it.</h2>
                      </div>
                    </div>
                  </div>

                  <div className="line-wrapper position-relative">
                    <div className="row gx-lg-5">
                      {data?.services?.map((service) => (
                        <div
                          key={service._key}
                          className="col-xl-4 col-md-6 wow fadeInUp"
                        >
                          <CardItem
                            icon={icon_1} // replace with the appropriate icon for each service
                            title={service.serviceTitle}
                            subtitle={service.description}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Image
                  src={shape}
                  alt="shape"
                  className="lazy-img shapes shape_01"
                />
              </div>
              <h3>Our Process.</h3>
              <p>
              We keep things simple and effective. Our process ensures that we understand your needs, create a solid plan, and deliver results that help you achieve your goals.
              </p>
              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      icon={icon_10}
                      title="Discovery"
                      subtitle="
                      We start by getting to know you and your needs through honest conversations and research."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon={icon_11}
                      title="Strategy"
                      subtitle="We craft a straightforward, effective plan that aligns with your goals and uses the best industry practices."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon={icon_12}
                      title="Implementation"
                      subtitle="We put the plan into action and stick around to support you, making sure everything runs smoothly and continues to improve."
                    />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
};

export default ServiceDetailsArea;
