import React, { useEffect, useState } from "react";
import config from "../../configs/config";
import { BlogsService } from "../../services/blogsService";
import BlogCard from "../../components/blog/BlogCard";
import Pagination from "../../components/common/Pagination";

function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    BlogsService.getAll(page).then(res => {
      setBlogs(res.data.blogs)});
      // const totalCount = res.data.total_count;
      // setTotalPages(Math.ceil(totalCount / config.blogs.pageSize));
  }, [page]);

  return (
    <div>
      <h1>Blogs</h1>

      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}

export default BlogsList;