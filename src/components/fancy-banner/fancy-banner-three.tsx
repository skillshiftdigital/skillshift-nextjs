import React from "react";
import Image from "next/image";
import Link from "next/link";
import icon from "@/assets/images/icon/icon_30.svg";

const FancyBannerThree = () => {
  return (
    <>
      <div className="fancy-banner-three position-relative wow fadeInUp">
        <div className="container">
          <div className="row align-content-center">
            <div className="col-lg-8 col-md-9">
              <div className="title-one mb-20 lg-mb-10">
                <h2 className="text-white">
                  Request more details.
                </h2>
              </div>
              <p className="text-lg m0 text-white opacity-75">
                Get in touch and we can provide more details about process, what&apos;s included in each program as well as required investment.
              </p>
            </div>
            <div className="col-lg-4 col-md-3">
              <Link href="/contact"
                className="quote-btn tran5s rounded-circle d-flex align-items-center justify-content-center ms-auto"
              >
                <Image src={icon} alt="icon" className="lazy-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FancyBannerThree;
