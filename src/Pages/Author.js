import React, { Suspense, useContext } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserContext from "./Context/UserContext";
const Authorcomp = React.lazy(() =>
  import("../Components/AuthorComponent/Authorcomp")
);
const Author = () => {
  const { users, loading } = useContext(UserContext);
  return (
    <div>
      <Header author="active" />
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
        <Authorcomp users={users} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Author;
