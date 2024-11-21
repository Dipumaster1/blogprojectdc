import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlogComp from "../Components/BlogComponents/BlogComp";

const Blog = () => {
  return (
    <div>
      <Header latBlog="active" />
      <BlogComp />
      <Footer />
    </div>
  );
};

export default Blog;
