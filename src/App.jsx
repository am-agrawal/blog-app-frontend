import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogsList from './pages/blogs/BlogsList';
import BlogDetail from './pages/blogs/BlogDetail';
import BlogCreate from './pages/blogs/BlogCreate';
import MyBlogs from './pages/blogs/MyBlogs';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Profile from './pages/profile/Profile';
import NotFound from './pages/notFound/NotFound';
import NavBar from './components/common/NavBar';

function App() {
  return (
    <div className='w-full h-full'>
    <BrowserRouter>
      <NavBar />
      <Routes>

        {/* Auth */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* User */}
        <Route path="/profile" element={<Profile />} />

        {/* Blogs */}
        <Route path="/" element={<BlogsList />} />
        <Route path="/:slug" element={<BlogDetail />} />
        <Route path="/create" element={<BlogCreate />} />
        <Route path="/edit/:slug" element={<BlogCreate />} />
        <Route path="/my-blogs" element={<MyBlogs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
