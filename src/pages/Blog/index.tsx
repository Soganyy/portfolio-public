import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogsPage from "./BlogsPage";
import BlogPostPage from "./BlogPostPage";

const Blog: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<BlogsPage />}
        />
        <Route
          path=":postId"
          element={<BlogPostPage />}
        />
      </Routes>
    </div>
  );
};

export default Blog;
