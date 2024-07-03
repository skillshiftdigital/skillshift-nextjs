// pages/blog/[blogSlug].tsx

import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import client from "@/utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterOne from "@/layout/footer/footer-one";
import shape from "@/assets/images/shape/shape_26.svg";
import service_bg from "@/assets/images/media/img_32.jpg";
import { PortableText } from '@portabletext/react';


const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Define the structure of a BlogPost
interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  slug: { current: string };
  author: { name: string };
  mainImage: { asset: { _ref: string } };
  body: any;
  categories: { _key: string, _ref: string }[];
}

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}

        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Insights & resources"
            subtitle="Explore our latest insights and resources, including blogs, articles, and more."
            page="insights"
            shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />

          <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
            <div className="container">
              <div className="row gx-xl-5">
                <div className="col-lg-12">

                  <article className="blog-meta-two style-two">
                  <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${urlFor(post.mainImage.asset._ref).width(800).url()})` }}
              >
                  <div className="date">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  </figure>

                  <div className="post-data">
                    {/* ADD AUTHOR NAME HERE */}
                    {/* <div className="post-info">
                    {post.author._ref}

                    </div> */}
                    <div className="post-info">
                      {post.author.name} 
                    </div>


                <div className="blog-title">
                    <h4>{post.title}</h4>
                </div>    

                    <div className="post-details-meta">
                      <PortableText value={post.body} />
                    </div>
                  </div>
                  </article>

                </div>
              </div>
            </div>
          </div>
          
          

          <FooterOne />
        </main>
      </div>
    </Wrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
            *[_type == "blogPost"] {
              slug {
              current
              }
            }
            `;
  const posts = await client.fetch(query);

  const paths = posts.map((post: { slug: { current: string } }) => ({
    params: { blogSlug: post.slug.current },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { blogSlug } = context.params!;
  const query = `
            *[_type == "blogPost" && slug.current == $blogSlug][0] {
              _id,
              title,
              publishedAt,
              slug,
              author ->{name},
              mainImage,
              body,
              categories
            }
            `;
  const post = await client.fetch(query, { blogSlug });

  return {
    props: {
      post,
    },
    revalidate: 1, // Revalidate at most once every second
  };
};

export default BlogPostPage;