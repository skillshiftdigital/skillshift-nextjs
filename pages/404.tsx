import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Wrapper from "@/layout/wrapper";
import HeaderTwoDark from "@/layout/header/header-two-dark";
import FooterOne from "@/layout/footer/footer-one";
import ils_1 from "@/assets/images/assets/ils_05.svg";
import ils_2 from "@/assets/images/assets/ils_06.svg";
import Head from "next/head";

const funFacts = [
  "The first email was sent by Ray Tomlinson to himself in 1971.",
  "The first video ever uploaded to YouTube was titled 'Me at the zoo' and was uploaded by co-founder Jawed Karim on April 23, 2005.",
  "Facebook has more than 2.8 billion monthly active users as of 2021.",
  "The most liked photo on Instagram is a picture of an egg, posted by the account @world_record_egg.",
  "The term 'podcast' is a combination of 'iPod' and 'broadcast'."
];

const NotFound = () => {
  const [funFact, setFunFact] = useState("");

  useEffect(() => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="404 - Page Not Found" />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwoDark />
        {/* header end */}
        <main>
          <div className="error-page text-center d-flex align-items-center justify-content-center flex-column white-bg position-relative">
            <h1 className="font-magnita animated-404">404</h1>
            <h2 className="fw-bold">Page Not Found</h2>
            <p className="text-lg mb-45">
              Well, it happens. The page you are looking for is not available.
            </p>
            <div>
              <Link href="/" className="btn-four">
                Go home
              </Link>
            </div>
            <div className="fun-fact mt-4">
              <h3>Did you know?</h3>
              <p>{funFact}</p>
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