import React, { Suspense, useContext, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeLatestBlog from "../Components/HomeComponents/HomeLatestBlog";
//import Newsletter from "../Components/Newsletter";
import UserContext from "./Context/UserContext";
const TrendingNow = React.lazy(() =>
  import("../Components/HomeComponents/TrendingNow")
);
const HomeBlog = React.lazy(() =>
  import("../Components/HomeComponents/HomeBlog")
);
const HomeInstaSlider = React.lazy(() =>
  import("../Components/HomeComponents/HomeInstaSlider")
);

const Home = () => {
  const { fetchlatestimages, fetchlatestblogs, loading } =
    useContext(UserContext);
  useEffect(() => localStorage.clear(), []);
  return (
    <div>
      <Header home="active" />
      {loading && (
        <div className="preloaders">
          <div className="loaders"></div>
        </div>
      )}

      <Suspense
        fallback={
          <div className="preloaders">
            <div className="loaders"></div>
          </div>
        }
      >
        {fetchlatestblogs && fetchlatestblogs.length > 3 && (
          <TrendingNow data={fetchlatestblogs} />
        )}
      </Suspense>

      <Suspense
        fallback={
          <div className="preloaders">
            <div className="loaders"></div>
          </div>
        }
      >
        <HomeBlog data={fetchlatestblogs} />
      </Suspense>

      <HomeLatestBlog />

      <Suspense
        fallback={
          <div className="preloaders">
            <div className="loaders"></div>
          </div>
        }
      >
        <HomeInstaSlider data={fetchlatestimages} />
      </Suspense>
      <Footer />
      {/* <Newsletter/> */}
    </div>
  );
};
export default Home;
