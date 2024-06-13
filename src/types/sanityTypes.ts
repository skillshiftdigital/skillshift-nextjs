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
  description: string;
}

export interface WhyChoose {
  _key: string;
  description: string;
  title: string;
}

export interface Slug {
  current: string;
}

export interface sanityTypes {
  _id: string;
  title: string;
  overview: string;
  shortDescription: string;
  objectivesPre: string;
  objectives: string[];
  objectivesPost: string;
  services: Service[];
  addOns: AddOn[];
  customSolutions: CustomSolution[];
  pricing: Pricing[];
  whyChoose: WhyChoose[];
  slug: Slug;
}
