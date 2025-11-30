import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogsService } from "../../services/blogsService";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    BlogsService.getBySlug(slug).then(res => setBlog(res.data));
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;