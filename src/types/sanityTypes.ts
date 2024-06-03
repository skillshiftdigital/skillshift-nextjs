// src/types/sanityTypes.ts

export interface Service {
    _key: string;
    description: string;
    serviceTitle: string;
  }
  
  export interface AddOn {
    _key: string;
    addOnTitle: string;
    description: string;
    includes: { _key: string; title: string }[];
    price: string;
  }
  
  export interface CustomSolution {
    _key: string;
    includes: string[];
    price: string;
    solutionTitle: string;
  }
  
  export interface Pricing {
    _key: string;
    includes: string[];
    package: string;
    price: string;
  }
  
  export interface WhyChoose {
    _key: string;
    description: string;
    title: string;
  }
  
  export interface sanityTypes {
    title: string;
    overview: string;
    objectives: string[];
    services: Service[];
    addOns: AddOn[];
    customSolutions: CustomSolution[];
    pricing: Pricing[];
    whyChoose: WhyChoose[];
  }
  