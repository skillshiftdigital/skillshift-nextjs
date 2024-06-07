import React from "react";
import Image from "next/image";
import { sanityTypes } from "@/types/sanityTypes";
import icon_13 from "@/assets/images/icon/icon_84.svg";
import ils_icon from "@/assets/images/assets/ils_03.svg";

const QuoteBlock = () => {
  return (
    // Quote Block
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8 order-lg-last">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <div className="light-bg-deep quote-wrapper position-relative mb-60 lg-mb-40">
                <div className="d-xl-flex align-items-start">
                  <Image src={icon_13} alt="icon" className="lazy-img icon" />
                  <div className="ps-xl-5">
                    <blockquote>
                      Quick solutions coupled with extraordinary performance— a
                      recommendation that is great though.
                    </blockquote>
                    <div>
                      <span className="fw-bold">James Bond.</span> USA
                    </div>
                  </div>
                </div>
                <Image
                  src={ils_icon}
                  alt="ils_icon"
                  className="lazy-img shapes shape_01"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Quote Block END
  );
};

export default QuoteBlock;
