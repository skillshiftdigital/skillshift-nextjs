// src/components/block-feature/block-all-services.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import icon_1 from '@/assets/images/icon/icon_03.svg';
import icon_2 from '@/assets/images/icon/icon_04.svg';
import icon_3 from '@/assets/images/icon/icon_05.svg';
import arrow from '@/assets/images/icon/icon_09.svg';
import { sanityTypes } from '@/types/sanityTypes';

interface UpperCardItemProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const UpperCardItem: React.FC<UpperCardItemProps> = ({ icon, title, subtitle }) => {
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
};

interface BlockAllServicesProps {
  services: sanityTypes[];
  style_2?: boolean;
}

const BlockAllServices: React.FC<BlockAllServicesProps> = ({ services, style_2 = false }) => {
  return (
    <div
      className={`block-feature-one position-relative ${style_2 ? 'light-bg-deep mt-150 lg-mt-80 pt-120 lg-pt-60 pb-130 lg-pb-60' : 'pt-75'}`}
    >
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
                <h2>We transform ideas into impact </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div
                key={service._id}
                className="col-lg-4 col-md-6 d-flex wow fadeInUp"
                data-wow-delay={`0.${index + 1}s`}
              >
                <div className="card-style-two vstack tran3s w-100 mt-30">
                  <Image
                    src={icon_2} // Replace with the actual service icon if available
                    alt="icon"
                    className="lazy-img icon me-auto"
                  />
                  <h4 className="fw-bold mt-30 mb-25">{service.title}</h4>
                  <p className="mb-20">{service.shortDescription}</p>
                  {service.slug && service.slug.current && (
                    <Link
                      href={`/service/${service.slug.current}`}
                      className="arrow-btn tran3s mt-auto stretched-link"
                    >
                      <Image src={arrow} alt="arrow" className="lazy-img" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockAllServices;
