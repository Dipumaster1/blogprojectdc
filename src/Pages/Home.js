import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeBlog from "../Components/HomeComponents/HomeBlog";
import HomeLatestBlog from "../Components/HomeComponents/HomeLatestBlog";
import HomeInstaSlider from "../Components/HomeComponents/HomeInstaSlider";
import TrendingNow from "../Components/HomeComponents/TrendingNow";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <div>
      <Header home="active" />
      <TrendingNow />
      <HomeBlog />
      <HomeLatestBlog />
      <HomeInstaSlider />
      <Footer />
      {/* <Newsletter/> */}
    </div>
  );
};
export default Home;
