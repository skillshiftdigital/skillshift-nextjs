import React from "react";
import { sanityTypes } from "@/types/sanityTypes";
import Image, { StaticImageData } from "next/image";
import shape from "@/assets/images/shape/shape_05.svg";
import icon_1 from "@/assets/images/icon/icon_01.svg";

interface ServiceDetailsProps {
  data: sanityTypes | null;
}

const subServices = ({ data }: ServiceDetailsProps) => {
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

  return (
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
              <div key={service._key} className="col-xl-4 col-md-6 wow fadeInUp">
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
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default subServices;