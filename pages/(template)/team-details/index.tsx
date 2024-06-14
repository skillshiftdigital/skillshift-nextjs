import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwoDark from "@/layout/header/header-two-dark";
import FooterOne from "@/layout/footer/footer-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TeamTwoArea from "@/components/team/team-v2-area";
import TeamDetailsArea from "@/components/team/team-details-area";


const TeamDetailsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwoDark />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Single Team Details"
            subtitle="Find the team members details here with all the information"
            page="Team"
            style_2={true}
            col="col-xxl-7 col-xl-6 m-auto"
          />
          {/* breadcrumb end */}

          {/* team details area start */}
          <TeamDetailsArea />
          {/* team details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default TeamDetailsPage;
