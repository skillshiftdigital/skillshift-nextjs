// src/utils/sanity/client.ts

import sanityClient from './client';
import { sanityTypes } from '@/types/sanityTypes';

export const fetchAllServices = async (): Promise<sanityTypes[]> => {
  const query = `*[_type == "services-digital-agencies"]{
    title,
    overview,
    shortDescription,
    objectivesPre,
    objectives,
    objectivesPost,
    services,
    addOns,
    customSolutions,
    pricing,
    whyChoose,
    _id,
    slug
  }`;

  return await sanityClient.fetch(query);
};

export const fetchServiceBySlug = async (slug: string): Promise<sanityTypes[]> => {
  const query = `*[_type == "services-digital-agencies" && slug.current == $slug]{
    title,
    overview,
    shortDescription,
    objectivesPre,
    objectives,
    objectivesPost,
    services,
    addOns,
    customSolutions,
    pricing,
    whyChoose,
    _id,
    slug
  }`;

  return await sanityClient.fetch(query, { slug });
};

export const fetchServicesByCategoryId = async (categoryId: string): Promise<sanityTypes[]> => {
  const query = `*[_type == "services-digital-agencies" && "${categoryId}" in categories[]._ref]{
    title,
    overview,
    shortDescription,
    objectivesPre,
    objectives,
    objectivesPost,
    services,
    addOns,
    customSolutions,
    pricing,
    whyChoose,
    _id,
    slug
  }`;

  return await sanityClient.fetch(query, { categoryId });
};
