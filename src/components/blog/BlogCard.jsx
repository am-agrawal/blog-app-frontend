import React from 'react'
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const { id, slug, title, excerpt, author_name, created_at } = blog;

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>
        <Link to={`/${slug}`} style={styles.link}>
          {title}
        </Link>
      </h2>

      <p style={styles.excerpt}>{excerpt}</p>

      <div style={styles.footer}>
        <span style={styles.author}>By {author_name}</span>
        <span style={styles.date}>
          {new Date(created_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default BlogCard;

//
// ─── Inline Styles (replace with CSS or Tailwind later) ───────────────────────
//

const styles = {
  card: {
    border: "1px solid #333",
    borderRadius: "10px",
    padding: "1.2rem",
    marginBottom: "1rem",
    background: "#161b22",
    color: "white",
  },
  title: {
    marginBottom: "0.5rem",
  },
  excerpt: {
    opacity: 0.8,
    marginBottom: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    opacity: 0.7,
    fontSize: "0.9rem",
  },
  author: {},
  date: {},
};
