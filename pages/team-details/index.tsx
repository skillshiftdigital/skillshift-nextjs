import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import FooterOne from "@/layout/footer/footer-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import TeamTwoArea from "@/components/team/team-v2-area";
import TeamDetailsArea from "@/components/team/team-details-area";
import shape from "@/assets/images/shape/shape_25.svg";

interface IProps {
  col: string;
}

const TeamDetailsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Single Team Details"
            subtitle="Find the team members details here with all the information"
            page="Team"
            style_2={true} 
            shape={shape}          />
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
