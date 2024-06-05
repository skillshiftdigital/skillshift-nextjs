import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterOne from "@/layout/footer/footer-one";
import project_bg from "@/assets/images/media/img_32.jpg";
import shape from "@/assets/images/shape/shape_28.svg";
import ProjectOneArea from "@/components/project/project-v1-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";


const ProjectOnePage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Some of our Projects"
            subtitle="We combine creativity and technical expertise to provide innovative and effective solutions to complex business challenges for our clients."
            page="Project"
            bg_img={project_bg}
            shape={shape}
          />
          {/* breadcrumb end */}

          {/* Project area start */}
          <ProjectOneArea />
          {/* Project area end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterOne/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ProjectOnePage;
