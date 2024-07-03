import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/utils/sanity/client';
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterTwo from "@/layout/footer/footer-two";
import BlogGridArea from "@/components/blogs/blog-grid-area";
import shape from "@/assets/images/shape/shape_26.svg";
import service_bg from "@/assets/images/media/img_32.jpg";
import Image from 'next/image';

// Define the structure of a BlogPost
interface BlogPost {
    _id: string;
    title: string;
    publishedAt: string;
    slug: { current: string };
    author: { _ref: string };
    mainImage: { asset: { _ref: string } };
    body: { _key: string, _type: string, children: { _key: string, _type: string, text: string }[], style: string }[];
    categories: { _key: string, _ref: string }[];
  }
  
  const builder = imageUrlBuilder(client);
  
  function urlFor(source: any) {
    return builder.image(source);
  }
  
  const BlogPosts: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const query = `
          *[_type == "blogPost"] {
            _id,
            title,
            publishedAt,
            slug,
            author,
            mainImage,
            body,
            categories
          }
        `;
        const result = await client.fetch(query);
        setPosts(result);
      };
  
      fetchPosts();
    }, []);
  
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
          {/* breadcrumb end */}

                    {/* blog grid area start */}
                    <BlogGridArea />
          {/* blog grid area end */}

          
      <div>
        <h1>Blog Posts</h1>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <h2>{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage.asset._ref).width(200).url()}
                    alt={post.title}
                    width={200}
                    height={200}
                  />
                )}
                <p>
                  {post.body && post.body.length > 0 && post.body[0].children && post.body[0].children.length > 0
                    ? post.body[0].children[0].text
                    : 'No content available'}
                </p>
                <a href={`/blog/${post.slug.current}`}>Read more</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
      </main>

      </div>
      </Wrapper>
    );
  };
  
  export default BlogPosts;