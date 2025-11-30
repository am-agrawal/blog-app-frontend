import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogsService } from "../../services/blogsService";

function BlogCreate() {
  const { slug } = useParams();
  const isEdit = Boolean(slug);

  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    if (isEdit) {
      BlogsService.getBySlug(slug).then(res =>
        setForm({ title: res.data.title, content: res.data.content })
      );
    }
  }, [slug]);

  const handleSubmit = async () => {
    if (isEdit) {
      await BlogsService.update(slug, form);
    } else {
      await BlogsService.create(form);
    }
  };

  return (
    <div>
      <h1>{isEdit ? "Edit Blog" : "Create Blog"}</h1>

      <input
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        value={form.content}
        onChange={e => setForm({ ...form, content: e.target.value })}
      />
      <button onClick={handleSubmit}>
        {isEdit ? "Update" : "Create"}
      </button>
    </div>
  );
}

export default BlogCreate;