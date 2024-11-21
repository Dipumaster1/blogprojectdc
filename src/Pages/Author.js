import React from "react";
import Header from "../Components/Header";
import Authorcomp from "../Components/AuthorComponent/Authorcomp";
import Footer from "../Components/Footer";

const Author = () => {
  return (
    <div>
      <Header authors="active" />
      <Authorcomp />
      <Footer />
    </div>
  );
};

export default Author;
