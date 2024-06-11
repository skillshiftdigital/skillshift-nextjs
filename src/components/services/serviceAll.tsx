import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
// internal
import icon_1 from '@/assets/images/icon/icon_09.svg';
import icon_2 from '@/assets/images/icon/icon_55.svg';
import icon_3 from '@/assets/images/icon/icon_56.svg';
import icon_4 from '@/assets/images/icon/icon_57.svg';
import icon_5 from '@/assets/images/icon/icon_58.svg';
import shape from '@/assets/images/shape/shape_05.svg';
import service_data from '@/data/service-data';
import FeedbackOne from '../feedback/feedback-one';
import PartnersSliderOne from '../partners/partners-slider-one';
import FancyBannerFive from '../fancy-banner/fancy-banner-five';
import FaqSectionOne from '../faq/faq-section-one';
import BlockFeatureOne from "@/components/block-feature/servicesAll";


// card item 
function CardItem({ icon, title, subtitle }: { icon: StaticImageData; title: string; subtitle: string }) {
  return (
    <div className="card-style-twelve mb-40 lg-mb-20">
      <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p>{subtitle}</p>
    </div>
  )
}

const ServiceOneArea = () => {
  const services = service_data.filter(s => s.page === 'servicesAll' || s.page === 'home-4');
  return (
    <>
      {/* block feature one start */}
      <BlockFeatureOne />
      {/* block feature one end */}

      
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

export default ServiceOneArea;