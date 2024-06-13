import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_97.svg";
import icon_2 from "@/assets/images/icon/icon_27.svg";
import shape from "@/assets/images/shape/shape_45.svg";
import arrow from "@/assets/images/icon/icon_09.svg";
import business_man from "@/assets/images/team/Bemoi-George-Managing-Director-skillshift.png";
import service_data from "@/data/service-data";

// img style
const imgStyle = {
  height: "auto",
};

const WhyChoose = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(4, 6);
  return (
    <div className="block-feature-twelve position-relative pt-130 lg-pt-80 pb-180 lg-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <div className="title-one mb-40 lg-mb-20">
              <h2 className="color-deep">
Why choose skillshift?              </h2>
            </div>
          </div>
        </div>
        <div className="row gx-xl-5">
          <div className="col-lg-8 d-flex mt-40 md-mt-20">
            <div className="card-style-eighteen position-relative">
              <div className="row h-100">
                <div className="col-lg-7 order-lg-last">
                  <div className="pt-45">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                      <Image src={icon_1} alt="icon" className="lazy-img" />
                    </div>
                    <blockquote>
                      “We like to win, to grow and to feel the difference we make in the world.”
                    </blockquote>
                    <h6>
                      - Bemoi George. <span>Managing Director, skillshift</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end justify-content-center order-lg-first">
                  <Image
                    src={business_man}
                    alt="man-img"
                    className="lazy-img"
                    style={imgStyle}
                  />
                </div>
              </div>
            </div>
          </div>
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-two bg-white vstack tran3s w-100">
                <h4 className="fw-bold mt-50 mb-25">Our Promise</h4>
                <p className="mb-20">
                Our promise is to guide, enhance, and revolutionize the way businesses and digital agencies interact with the digital world.
                </p>
                <Link href="/about-us"
                  className="arrow-btn tran3s mt-auto stretched-link"
                >
                  <Image src={arrow} alt="arrow-icon" className="lazy-img" />
                </Link>
              </div>
            </div>
          
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-two bg-white vstack tran3s w-100">
                <h4 className="fw-bold mt-50 mb-25">Our Expertise</h4>
                <p className="mb-20">
                  Our team is a group of global agency veterans, data scientists, and digital experts who really gets it.
                </p>
                <Link href="/contact"
                  className="arrow-btn tran3s mt-auto stretched-link"
                >
                  <Image src={arrow} alt="arrow-icon" className="lazy-img" />
                </Link>
              </div>
            </div>

          <div className="col-lg-8 d-flex mt-40 md-mt-20">
            <div className="card-style-nineteen">
              <div className="row">
                <div className="col-lg-7">
                  <h2 className="color-deep fw-bold mt-20">Our technology</h2>
                  <p className="text-md mt-30 lg-mt-20 mb-35">
                  Gain access to specialized knowledge and insights powered by our propriety technology.
                  </p>
                  <Link href="/contact"
                    className="btn-seven d-inline-flex align-items-center"
                  >
                    <span className="text">Learn More</span>
                    <div className="icon tran3s rounded-circle d-flex align-items-center">
                      <Image src={icon_2} alt="icon" className="lazy-img" />
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 ms-auto">
                  <div className="counter-block-one md-mt-40">
                    <div className="main-count fw-bold">
                      <span className="counter">3</span>k+
                    </div>
                    <p className="m0">Transactional datasets</p>
                  </div>
                  <div className="counter-block-one mt-60 md-mt-20">
                    <div className="main-count fw-bold">
                      <span className="counter">2</span>x
                    </div>
                    <p className="m0">Return on tech investment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default WhyChoose;
