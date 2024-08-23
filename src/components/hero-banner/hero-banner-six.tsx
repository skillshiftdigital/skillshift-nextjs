import React from "react";
import Link from "next/link";
import Image from "next/image";
import shape_1 from '@/assets/images/shape/shape_43.svg';
import shape_2 from '@/assets/images/shape/shape_42.svg';
import backgroundImage from '@/assets/images/media/globalData.webp'; // Import your background image
import PartnersSliderOne from "../partners/partners-slider-one";

const imgStyle = {
  height: 'auto'
}

const HeroBannerSix = () => {
  return (
    <div className="hero-banner-six pt-170 md-pt-110 position-relative">
      <div className="container position-relative">
        <div className="row justify-content-between">
          <div className="col-md-6 wow fadeInLeft">
            <div className="pt-20 pb-50">
              <h1 className="hero-heading fw-bold">
                Global SEO Affordability Study
              </h1>
              <p className="text-lg pt-35 lg-pt-30 pb-35 lg-pb-20">
                Unveiling the hidden impact of SEO tool accessibility on digital equality and market integrity across the globe.
              </p>
              <div className="d-flex flex-wrap">
                <Link href="https://www.skillshift.com.au/global-seo-affordability-study" className="btn-eighteen tran3s me-4 mt-10">
                  Read the Study
                </Link>
                <Link href="/contact" className="btn-nineteen tran3s mt-10">
                  Discuss Findings
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-md-flex justify-content-end wow fadeInRight">
            <div className="media-wrapper position-relative ms-lg-5">
              <div className="background-image-container">
                <Image
                  src={backgroundImage}
                  alt="SEO Affordability Study"
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <Image
                src={shape_1}
                alt="shape"
                className="lazy-img shapes bg-shape"
                style={imgStyle}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="partner-logo-one pt-60 md-pt-50">
              <p className="fw-500 text-dark mb-40">
                Featured in leading publications and supported by industry giants
              </p>
              <PartnersSliderOne />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={shape_2}
        alt="shape"
        className="lazy-img shapes shape_01"
        style={imgStyle}
      />
    </div>
  );
};

export default HeroBannerSix;