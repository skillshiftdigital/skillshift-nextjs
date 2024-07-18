import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import screen_1 from '@/assets/images/assets/screen_22.svg';
import shape_1 from '@/assets/images/shape/shape_43.svg';
import shape_2 from '@/assets/images/shape/shape_42.svg';
import PartnersSliderOne from "../partners/partners-slider-one";

// img style 
const imgStyle = {
  height:'auto'
}

const HeroBannerSix = () => {
  return (
    <div className="hero-banner-six pt-170 md-pt-110 position-relative">
      <div className="container position-relative">
        <div className="row justify-content-between">
          <div className="col-md-6 wow fadeInLeft">
            <div className="pt-20 pb-50">
              <h1 className="hero-heading fw-bold">
                Transform, adapt & grow.
              </h1>
              <p className="text-lg pt-35 lg-pt-30 pb-35 lg-pb-20">
                Over 20 years transforming digital businesses through a blend of technology and psychology.
              </p>
              <div className="d-flex flex-wrap">
                <Link href="/contact"
                  className="btn-eighteen tran3s me-4 mt-10"
                >
                  Contact
                </Link>
                <Link href="/contact" className="btn-nineteen tran3s mt-10">
                  Let’s Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-md-flex justify-content-end wow fadeInRight">
            <div className="media-wrapper position-relative ms-lg-5">


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
              Join leading digital organizations in their next-gen transformation{" "}
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
