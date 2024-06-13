// src/components/pricing/pricing-area.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Pricing } from '@/types/sanityTypes';
import icon from '@/assets/images/assets/ils_04.svg';

type PricingCardItemProps = {
  title: string;
  month: string;
  price: string;
  membership: string;
  description: string;
  lists: string[];
};

function PricingCardItem({ title, month, price, membership, lists, description }: PricingCardItemProps) {
  // Format price with commas
  const formattedPrice = parseInt(price).toLocaleString();
  // Calculate quarterly price
  const monthlyPrice = parseInt(price);
  const quarterlyPrice = ((monthlyPrice * 3)).toLocaleString();

  return (
    <div className="pricing-card-one d-flex flex-column w-100 h-100 text-center position-relative">
      <h2 className="fw-bold">{title}</h2>
      <div className="row">
        <div className="col-xxl-9 m-auto">
          <p>{description}</p>
        </div>
      </div>
      <div className="price-banner text-lg-start d-lg-flex justify-content-center align-items-center">
        <div className="price">
          <sup>A$</sup> {formattedPrice}
        </div>
      </div>
      <div className="style-none mb-25">
          *Starting at ${quarterlyPrice}/Quarter
      </div>
      <ul className="style-none mb-35">
        {lists.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <div className="action-btn text-center">
        <Link href="/contact">
          Request more info <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
}

interface PricingAreaProps {
  pricing: Pricing[];
}

const PricingArea: React.FC<PricingAreaProps> = ({ pricing }) => {
  return (
    <div className="pricing-section light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="title-one">
              <h2>Our pricing</h2>
            </div>
            <p className="text-lg pt-10 m0">
              We have different options for every business size.
            </p>
          </div>
        </div>
        <div className="tab-content mt-50 md-mt-30">
          <div
            className="tab-pane show active"
            id="nav-month"
            role="tabpanel"
            aria-labelledby="nav-month-tab"
            tabIndex={0}
          >
            <div className="row gx-xl-5">
              {pricing.map((item, index) => (
                <div key={index} className="col-md-4 mb-65 md-mb-30">
                  <PricingCardItem
                    title={item.package}
                    month="month"
                    price={item.price}
                    membership="Monthly"
                    lists={item.includes}
                    description={item.description || 'For individuals and teams. Get 1 month premium market access'}
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane"
            id="nav-year"
            role="tabpanel"
            aria-labelledby="nav-year-tab"
            tabIndex={0}
          >
            <div className="row gx-xl-5">
              {pricing.map((item, index) => (
                <div key={index} className="col-md-4 mb-65 md-mb-30">
                  <PricingCardItem
                    title={item.package}
                    month="year"
                    price={item.price}
                    membership="Yearly"
                    lists={item.includes}
                    description={item.description || 'For individuals and teams. Get 1 year premium market access'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-banner position-relative">
          <Image src={icon} alt="icon" className="lazy-img shapes screen_01" />
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              <h2>
                Join our skillshift clients club and get free access to our propriety tools.<br /> 
              </h2>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <Link href="/contact" className="btn-four">
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PricingArea;
