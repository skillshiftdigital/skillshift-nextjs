type ImageAsset = {
  _ref: string;
  _type: "reference";
};

type Image = {
  _type: "image";
  asset: ImageAsset;
};

type Author = {
  name: string;
  image: Image;
};

type CategorySlug = {
  current: string;
  _type: "slug";
};

type Category = {
  title: string;
  slug: CategorySlug;
};

export type WPPost = {
  title: string;
  slug: { current: string; _type: "slug" };
  author: Author;
  publishedAt: string;
  body: string | null; // can be null
  categories: Category[]; // 
};