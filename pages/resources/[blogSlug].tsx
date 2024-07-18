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
import service_bg from "@/assets/images/media/img_52-min.jpg";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import ContactForm from "@/components/forms/contact-form";
import Image from "next/image";
import icon_4 from "@/assets/images/logo/skillshift logo green.svg";
import Link from "next/link";
import Head from "next/head";
import CustomPortableText from '@/components/sanity/CustomPortableText';


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
  categories: { title: string}[];
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
       <Head>
        <title>{post.title} - skillshift Resources</title>
        <meta name="description" content={post.body && post.body.length > 0 && post.body[0].children && post.body[0].children.length > 0
                        ? post.body[0].children[0].text
                        : 'No content available'} />
      </Head>
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
                      style={{
                        backgroundImage: `url(${urlFor(post.mainImage.asset._ref).width(800).url()})`,
                      }}
                    >
                      <div className="date">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                    </figure>

                    <div className="post-data">
                      <div className="post-info">
                        <Link href={`/resources/author/${post.author.name}`}>
                          {post.author.name}
                        </Link> 
                        {post.categories && post.categories.length > 0 && (
                          <span>
                            {` / `}
                            {post.categories.map((category, index) => (
                              <span key={category.title}>
                              <Link href={`/resources/category/${category.title}`}>
                                {category.title}
                              </Link>
                                {index < post.categories.length - 1 && ', '}
                              </span>
                            ))}
                          </span>
                        )}
                      </div>

                      <div className="blog-title">
                        <h4>{post.title}</h4>
                      </div>

                      <div className="post-details-meta">
                      <CustomPortableText value={post.body} />
                      </div>
                    </div>

                    <div className="contact-us-section pt-150 lg-pt-80">
                      <div className="bg-wrapper light-bg mt-80 lg-mt-40">
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="d-flex flex-column flex-lg-column-reverse">
                              <div className="row">
                                <div className="col-md-8 col-6 me-auto ms-auto">
                                  <Image
                                    src={icon_4}
                                    alt="icon"
                                    className="lazy-img me-auto ms-auto"
                                  />
                                </div>
                              </div>
                              <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                                <h2>Have questions? Reach out to us.</h2>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-7">
                            <div className="form-style-one ps-xl-5">
                              {/* form start */}
                              <ContactForm />
                              {/* form end */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}

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
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        },
        _type == "mermaidDiagram" => {
          ...,
          code
        }
      },
      categories[] -> {title}
    }
  `;
  const post = await client.fetch(query, { blogSlug });

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default BlogPostPage;
