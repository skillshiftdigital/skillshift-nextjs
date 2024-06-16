'use client'
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
// internal
import bg_1 from "@/assets/images/media/img_51-min.webp";
import bg_2 from "@/assets/images/media/img_53-min.webp";
import icon from "@/assets/images/icon/icon_02.svg";

// slider bg
const slider_bg = [bg_1, bg_2];
// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 7000,
};

const HeroBannerTwo = () => {
  return (
    <div className="hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i} style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <Image
              src={bg.src}
              alt={`Background image ${i + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        ))}
      </Slider>
      <div className="container position-relative">
        <div className="row">
          <div className="col-xl-6 col-lg-7 ms-auto">
            <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
              Behind great stories, great people. <br />
            </h1>
            <p
              className="text-xl text-white pt-35 pb-25 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: '80px' }} // Reserve space for the text
            >
              Our services are designed to help you tell your story, connect with your audience, and grow your business.
            </p>
            <Link href="/services"
              className="btn-four icon-link wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ display: 'inline-flex', alignItems: 'center', minHeight: '40px' }} // Ensure correct button styling
            >
              <span>View services.</span>
              <Image src={icon} alt="icon" className="lazy-img icon ms-2" width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
{/*       <Link href="/contact"
        className="more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft"
        target="_blank"
      >
        <i className="bi bi-arrow-up-right"></i>
      </Link> */}
    </div>
  );
};

export default HeroBannerTwo;
