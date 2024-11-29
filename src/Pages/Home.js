import React, { useContext } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeBlog from "../Components/HomeComponents/HomeBlog";
import HomeLatestBlog from "../Components/HomeComponents/HomeLatestBlog";
import HomeInstaSlider from "../Components/HomeComponents/HomeInstaSlider";
import TrendingNow from "../Components/HomeComponents/TrendingNow";
//import Newsletter from '../Components/Newsletter'
import UserContext from "./Context/UserContext";

const Home = () => {
  const { fetchlatestimages, fetchlatestblogs } = useContext(UserContext);
  return (
    <div>
      <Header />
      {fetchlatestblogs && fetchlatestblogs.length > 3 && (
        <TrendingNow data={fetchlatestblogs} />
      )}
      <HomeBlog />
      <HomeLatestBlog />
      <HomeInstaSlider data={fetchlatestimages} />
      <Footer />
      {/* <Newsletter/> */}
    </div>
  );
};
export default Home;
