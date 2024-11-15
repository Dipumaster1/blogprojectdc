import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./AdminPages/AddBlog";
import BlogShow from "./AdminPages/BlogShow";
import MyAccount from "./AdminPages/MyAccount";
import AdminBlogDetail from "./AdminPages/AdminBlogDetail";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="AddBlog" element={<AddBlog />} />
      <Route path="/" element={<BlogShow />} />
      <Route path="AdminBlogDetail" element={<AdminBlogDetail />} />
      <Route path="MyAccount" element={<MyAccount />} />
    </Routes>
  );
};

export default AdminRoutes;
