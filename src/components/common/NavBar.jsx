import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 w-full bg-[#0d1117] text-white sticky top-0 z-10">
      <div className="text-2xl font-bold">
        <Link to="/" className="text-white">MyBlog</Link>
      </div>

      <div className='flex items-center gap-4'>
        <NavLink to="/" className="text-white">Blogs</NavLink>

        {user && (
          <>
            <NavLink to="/blogs/create" className="text-white">Create</NavLink>
            <NavLink to="/my-blogs" className="text-white">My Blogs</NavLink>
            <NavLink to="/profile" className="text-white">Profile</NavLink>
            <button onClick={handleLogout} className="text-white">
              Logout
            </button>
          </>
        )}

        {!user && (
          <>
            <NavLink to="/login" className="text-white">Login</NavLink>
            <NavLink to="/signup" className="text-white">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;