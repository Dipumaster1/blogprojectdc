import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AuthorDetailsComp from "../Components/AuthorComponent/AuthorDetailsComp";

const AuthorDetails = () => {
  return (
    <div>
      <Header authors="active" />
      <AuthorDetailsComp />
      <Footer />
    </div>
  );
};

export default AuthorDetails;
