// pages/blog/category/[categoryName].tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/utils/sanity/client';
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterTwo from "@/layout/footer/footer-two";
import BlogGridArea from "@/components/blogs/blog-grid-area";
import shape from "@/assets/images/shape/shape_26.svg";
import service_bg from "@/assets/images/media/img_32.jpg";
import Head from 'next/head';

// Define the structure of a BlogPost
interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  slug: { current: string };
  author: { name: string };
  mainImage: { asset: { _ref: string } };
  body: { _key: string, _type: string, children: { _key: string, _type: string, text: string }[], style: string }[];
  categories: { title: string }[];
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const CategoryPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const router = useRouter();
  const { categoryName } = router.query;

  useEffect(() => {
    if (categoryName) {
      const fetchPosts = async () => {
        const query = `
          *[_type == "blogPost" && "${categoryName}" in categories[]->title] {
            _id,
            title,
            publishedAt,
            slug,
            author->{name},
            mainImage,
            body,
            categories[]->{title}
          }
        `;
        const result = await client.fetch(query, { categoryName });
        setPosts(result);
      };

      fetchPosts();
    }
  }, [categoryName]);

  return (
    <Wrapper>
      <Head>
        <title>{categoryName} - skillshift Resources</title>
        <meta name="description" content={`All posts in the category "${categoryName}", from skillshift Resources where we share what we learned about ${categoryName}. We welcome your feedback.`} />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title={`Posts about ${categoryName}`}
            subtitle={`All posts about ${categoryName}, reach out to discuss more.`}
            page="category"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />
          {/* breadcrumb end */}

          {/* blog grid area start */}
          <BlogGridArea posts = {posts}  />
          {/* blog grid area end */}
        </main>
      </div>
    </Wrapper>
  );
};

export default CategoryPosts;
