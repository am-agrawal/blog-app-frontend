import api from "./api";
import config from '../configs/config';

export const BlogsService = {
  getAll: (page = 1) => api.get(`/api/blog?skip=${(page - 1) * config.blogs.pageSize}&limit=${config.blogs.pageSize}`),
  getBySlug: (slug) => api.get(`/api/blog/${slug}`),
  create: (data) => api.post("/blogs", data),
  update: (slug, data) => api.put(`/api/blog/${slug}`, data),
  remove: (slug) => api.delete(`/api/blog/${slug}`),
  myBlogs: () => api.get("/api/blog/me"),
};
