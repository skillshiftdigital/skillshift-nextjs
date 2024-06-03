// code: src/utils/sanity/types.ts
export interface Service {
    _id: string;
    title: string;
    description: string;
    slug: { 
        current: string;
    };
    overview: string;
  }
  