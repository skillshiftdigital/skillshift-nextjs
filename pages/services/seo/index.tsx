// ./src/pages/services/seo.tsx
import React from 'react';
import { GetStaticProps } from 'next';
import { fetchAllTypes } from '../../../src/utils/sanity/services';

interface Service {
  serviceTitle: string;
  description: string;
  subServices: { subServiceTitle: string; details: string[] }[];
}

interface PricingPackage {
  package: string;
  description: string;
  price: string;
  includes: string[];
}

interface AddOnService {
  addOnTitle: string;
  description: string;
  price: string;
  includes: { title: string; description: string }[];
}

interface CustomSolution {
  solutionTitle: string;
  price: string;
  includes: string[];
}

interface Reason {
  title: string;
  description: string;
}

interface ServiceData {
  title: string;
  overview: string;
  services: Service[];
  pricing: PricingPackage[];
  addOns: AddOnService[];
  customSolutions: CustomSolution[];
  whyChoose: Reason[];
  slug: string;
}

interface Props {
  services: ServiceData[];
}

const ServicesPage: React.FC<Props> = ({ services }) => {
  if (!services || services.length === 0) return <p>No services available</p>;

  const service = services[0]; // Assuming there's only one "services" document

  return (
    <>
    

    <section id="services" className="py-100 services-section division">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-title mb-70">
              <h2 className="s-50 w-700">{service.title}</h2>
              <p className="s-21 color--grey">{service.overview}</p>
            </div>
          </div>
        </div>
        <div className="row">
         
        </div>
        <div className="row">
          <h2 className="s-50 w-700">Pricing Packages</h2>
          
        </div>
        <div className="row">
          <h2 className="s-50 w-700">Add-On Services</h2>
          
        </div>
        <div className="row">
          <h2 className="s-50 w-700">Custom Solutions</h2>
          
        </div>
        <div className="row">
        </div>
      </div>
    </section>
    </>
    )
};

export const getStaticProps: GetStaticProps = async () => {
  const services = await fetchAllTypes("SEO"); // Change "Commerce" to any other service title as needed
  return {
    props: {
      services,
    },
  };
};


export default ServicesPage;
