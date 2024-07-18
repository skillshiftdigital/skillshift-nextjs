import React from 'react';
import Image,{ StaticImageData } from 'next/image';
import Link from 'next/link';
// internal
import icon_1 from '@/assets/images/icon/icon_03.svg';
import icon_2 from '@/assets/images/icon/icon_04.svg';
import icon_3 from '@/assets/images/icon/icon_05.svg';
import arrow from '@/assets/images/icon/icon_09.svg'; 
import service_data from '@/data/service-data';

// card style one item 
function UpperCardItem({icon,title,subtitle}:{icon:StaticImageData;title:string;subtitle:string}) {
  return (
    <div className="card-style-one d-flex w-100 mb-35">
    <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
      <Image src={icon} alt="icon" className="lazy-img"/>
     </div>
    <div className="text ps-4">
      <h4 className="fw-bold">{title}</h4>
      <p className="pe-xl-4">{subtitle}</p>
    </div>
  </div>
  )
}

const BlockFeatureOne = ({ services, style_2 = false }: { services: any[], style_2?: boolean }) => {
	return (
		<div className={`block-feature-one ${style_2 ? 'light-bg-deep mt-150 lg-mt-80 pt-120 lg-pt-60 pb-130 lg-pb-60' : 'pt-75'}`}>
			<div className="container">
				<div className="row">
					{services.map((service, index) => (
						<div key={index} className="col-lg-4 col-md-6 d-flex">
							<div className="card-style-two vstack tran3s w-100 mt-30">
								<Image src={service.icon} alt="icon" />
								<h4 className="fw-bold mt-30 mb-25">{service.title}</h4>
								<p className="mb-20">{service.description}</p>
								<Link href={service.link} className="arrow-btn tran3s mt-auto">
									See More
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default BlockFeatureOne;