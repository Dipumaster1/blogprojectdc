import React, { Suspense, useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import UserContext from "./Context/UserContext";
import Firebase from "../Firebase";
import ScrollToTop from "../Components/ScrollToTop";
const BlogDetailComp = React.lazy(() =>
  import("../Components/BlogComponents/BlogDetailComp")
);

const Blogdetails = () => {
  const navigate = useNavigate();
  const { alldata } = useContext(UserContext);
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [array, setarray] = useState([]);
  const [nextblog, setnextblog] = useState(null);
  const [current, setcurrent] = useState(
    JSON.parse(localStorage.getItem("BlogDetails"))
  );
  const [previousblog, setpreviousblog] = useState(null);
  useEffect(() => {
    setloading(true);
    if (alldata) {
      if (!current) return navigate("/");
      const result = alldata.filter((obj) => obj.BlogKey === current);
      if (result.length === 0) return navigate("/");
      setdata(result[0]);
    }
    setloading(false);
  }, [alldata, current]);
  useEffect(() => {
    if (data) {
      setloading(true);
      Firebase.child(`Blogs/${data?.User}`).on("value", function (snap) {
        if (snap.val()) {
          const result = Object.keys(snap.val())?.map((key) => {
            const object = snap.val()[key];
            object.BlogKey = key;
            return object;
          });
          setarray(result);

          let currentblogindex = null;
          for (let i = 0; i < result.length; i++) {
            if (result[i].BlogKey === data.BlogKey) {
              currentblogindex = i;
              break;
            }
          }
          const next = currentblogindex + 1;
          const previous = currentblogindex - 1;
          if (next < result.length) setnextblog(result[next]);
          else setnextblog(null);
          if (previous > -1) setpreviousblog(result[previous]);
          else setpreviousblog(null);
        } else return setarray([]);
      });
      setloading(false);
    }
  }, [data]);
  return (
    <div>
      <Header blog="active" />
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
        <BlogDetailComp
          data={data}
          thisuserallblog={array}
          previous={previousblog}
          next={nextblog}
          fun={setcurrent}
        />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blogdetails;
