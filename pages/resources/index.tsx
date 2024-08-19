import React from "react";
import { GetStaticProps } from 'next';
import Image from "next/image";
import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/utils/sanity/client";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterOne from "@/layout/footer/footer-one";
import BlogGridArea from "@/components/blogs/blog-grid-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import shape from "@/assets/images/shape/shape_26.svg";
import service_bg from "@/assets/images/media/img_52-min.jpg";

// Define the structure of a BlogPost
interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  slug: { current: string };
  author: { _ref: string; name: string };
  mainImage: { asset: { _ref: string } };
  body: {
    _key: string;
    _type: string;
    children: { _key: string; _type: string; text: string }[];
    style: string;
  }[];
  categories: { title: string; _key: string; _ref: string }[];
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    *[_type == "blogPost"] {
      _id,
      title,
      publishedAt,
      slug,
      author->{name},
      mainImage,
      body,
      categories[]->{ title, _id },
      publishedAt
    }
  `;
  const posts = await client.fetch(query);

  // Filter out draft posts
  const validPosts = posts.filter((post: BlogPost) => !post._id.startsWith('drafts.'));

  return {
    props: {
      posts: validPosts,
    },
    revalidate: 60 * 60, // Revalidate every hour
  };
};

interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  return (
    <Wrapper>
      <Head>
        <title>Resources - SkillShift</title>
        <meta
          name="description"
          content="Explore SkillShift's resources: guides, case studies, and expert insights on web development, SEO, paid media, and more. Empower your agency to innovate and succeed."
        />
      </Head>
      <div className="main-page-wrapper">
        <HeaderTwo />
        <main>
          <BreadcrumbOne
            title="Insights & Resources"
            subtitle="Explore our latest insights and resources, including blogs, articles, and more."
            page="insights"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />

          <BlogGridArea posts={posts} />

          <FancyBannerThree />

          <NewsletterBanner />

          <FooterOne />
        </main>
      </div>
    </Wrapper>
  );
};

export default BlogPosts;