// components/blogs/BlogGridArea.tsx

'use client'
import React, { useEffect, useState } from "react";
import BlogGridItem from "./blog-item/blog-grid-item";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/ui/pagination";
import { WPPost } from "@/types/blog-d-t";

const BlogGridArea = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/wordpress');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const { currentItems, handlePageClick, pageCount } = usePagination<WPPost>(posts, 4);

  return (
    <div className="blog-section-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="position-relative">
          <div className="row gx-xxl-5">
            {currentItems.map((post, index) => (
              <div key={index} className="col-md-6">
                <BlogGridItem blog={post} />
              </div>
            ))}
          </div>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>
    </div>
  );
};

export default BlogGridArea;
