// src/components/services/serviceAll.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import icon_1 from '@/assets/images/icon/icon_09.svg';
import icon_2 from '@/assets/images/icon/icon_55.svg';
import icon_3 from '@/assets/images/icon/icon_56.svg';
import icon_4 from '@/assets/images/icon/icon_57.svg';
import icon_5 from '@/assets/images/icon/icon_58.svg';
import shape from '@/assets/images/shape/shape_05.svg';
import FeedbackOne from '../feedback/feedback-one';
import PartnersSliderOne from '../partners/partners-slider-one';
import FancyBannerFive from '../fancy-banner/fancy-banner-five';
import FaqSectionOne from '../faq/faq-section-one';
import BlockAllServices from "@/components/block-feature/block-all-services";
import { sanityTypes } from "@/types/sanityTypes";

const AllServices = ({ services }: { services: sanityTypes[] }) => {
  return (
    <>
      <BlockAllServices services={services} />
      {/* feedback one start */}
{/*       <FeedbackOne cls='pt-120 pb-120' />
 */}      {/* feedback one end */}

      {/* partners logo start */}
      <div className="partner-logo-one pt-80 lg-pt-50 pb-80 lg-pb-50">
          <div className="container">
{/*               <PartnersSliderOne/>
 */}          </div>
        </div>
      {/* partners logo end */}

      {/* fancy banner start */}
{/*       <FancyBannerFive style_2={true} />
 */}      {/* fancy banner end */}

      {/* faq start */}
      <FaqSectionOne cls='mt-150 lg-mt-80 mb-150 lg-mb-80'/>
      {/* faq end */}
    </>
  );
};

export default AllServices;
