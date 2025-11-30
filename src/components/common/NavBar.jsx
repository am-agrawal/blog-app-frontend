import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>MyBlog</Link>
      </div>

      {/* Desktop Menu */}
      <div style={{ ...styles.menu, ...(open ? styles.menuOpen : {}) }}>
        <NavLink to="/" style={styles.link}>Blogs</NavLink>

        {user && (
          <>
            <NavLink to="/blogs/create" style={styles.link}>Create</NavLink>
            <NavLink to="/my-blogs" style={styles.link}>My Blogs</NavLink>
            <NavLink to="/profile" style={styles.link}>Profile</NavLink>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        )}

        {!user && (
          <>
            <NavLink to="/login" style={styles.link}>Login</NavLink>
            <NavLink to="/signup" style={styles.link}>Sign Up</NavLink>
          </>
        )}
      </div>

      {/* Mobile Toggle */}
      <button
        style={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
    </nav>
  );
}

export default NavBar;

//
// ─── Inline Styles (You may replace with Tailwind/CSS later) ───────────────────
//

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 1.5rem",
    background: "#0d1117",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
    width: "100%",
    height: "60px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100
  },
  logo: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
  },
  menuOpen: {
    display: "flex", 
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "10px",
    background: "#0d1117",
    padding: "1rem",
    borderRadius: "8px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "0.3rem 0.8rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  hamburger: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    color: "white",
    cursor: "pointer",
    display: "none",
  },
};

// Responsive styling via JS or your global CSS
