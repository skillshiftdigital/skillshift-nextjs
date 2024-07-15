import React from "react";

const FancyBannerOne = () => {
  return (
    <div className="fancy-banner-one position-relative pt-30 md-pt-20 pb-40 md-pb-20 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-end">
            <h2 className="pe-xl-5 pe-md-4" style={{ minHeight: '2.5em' }}>
              skillshift principals
            </h2>
          </div>
          <div className="col-md-6">
            <div className="ps-xl-5 ps-md-4 pe-xxl-5">
              <h3 className="fw-bold" style={{ minHeight: '1.5em' }}>included in 50+</h3>
              <p className="text-md m0" style={{ minHeight: '3em' }}>
                Dedicated upskilling and transformation programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerOne;