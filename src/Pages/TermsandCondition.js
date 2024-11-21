import React from "react";
import Header from "../Components/Header";
import TermsComp from "../Components/TermsAndCondition/TermsComp";
import Footer from "../Components/Footer";

const TermsandCondition = () => {
  return (
    <div>
      <Header page="active" />
      <TermsComp />
      <Footer />
    </div>
  );
};

export default TermsandCondition;
