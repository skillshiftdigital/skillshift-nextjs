import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Wrapper from "@/layout/wrapper";
import HeaderTwoDark from "@/layout/header/header-two-dark";
import FooterOne from "@/layout/footer/footer-one";
import ils_1 from "@/assets/images/assets/ils_05.svg";
import ils_2 from "@/assets/images/assets/ils_06.svg";
import Head from "next/head";

const NotFound = () => {
  return (
    <Wrapper>
      <Head>
        <title>404</title>
        <meta name="description" content="404" />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwoDark />
        {/* header end */}
        <main>
          <div className="error-page text-center d-flex align-items-center justify-content-center flex-column white-bg position-relative">
            <h1 className="font-magnita">404</h1>
            <h2 className="fw-bold">Page Not Found</h2>
            <p className="text-lg mb-45">
Well, it happens. The page you are looking for is not available.
            </p>
            <div>
              <Link href="/" className="btn-four">
                Go home
              </Link>
            </div>
            <Image src={ils_1} alt="shape" className="lazy-img shapes shape_01"/>
            <Image src={ils_2} alt="shape" className="lazy-img shapes shape_02"/>
          </div>
        </main>
      </div>
      <FooterOne />
    </Wrapper>
  );
};

export default NotFound;
