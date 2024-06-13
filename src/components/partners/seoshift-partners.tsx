'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import logo_1 from "@/assets/images/logo/google_bigquery-ar21.svg";
import logo_2 from "@/assets/images/logo/pinecone_logo_black.png";
import logo_3 from "@/assets/images/logo/mongodb-ar21.svg";
import logo_4 from "@/assets/images/logo/google-sheets-full-logo-1.svg";
import logo_5 from "@/assets/images/logo/Looker.png";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 5,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

// slider logos
const slider_logos:StaticImageData[] = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_3, logo_1];

const SeoshiftPartners = () => {
  return (
    <Slider {...slider_setting} className="partner-slider-one">
      {slider_logos.map((logo, i) => (
        <div key={i} className="item">
          <div className="logo d-flex align-items-center justify-content-center">
            <Image src={logo} alt="logo" style={{ height: "auto" }} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SeoshiftPartners;
