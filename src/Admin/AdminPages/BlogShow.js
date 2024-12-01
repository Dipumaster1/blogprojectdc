import React, { Suspense, useContext, useEffect, useState } from "react";
import AdminHeader from "../AdminComp/AdminHeader";
import AdminFooter from "../AdminComp/AdminFooter";
import AdminBlogContext from "../Context/AdminBlogContext";
const BlogComponent = React.lazy(() => import("../AdminComp/BlogComponent"));

const BlogShow = () => {
  const { fetchblogs, loader } = useContext(AdminBlogContext);
  const [category, setcategory] = useState([]);
  useEffect(() => {
    if (fetchblogs) {
      const response = Object.keys(fetchblogs).map(
        (key) => fetchblogs[key].Category
      );
      const object = new Set(response);
      const array = [...object];
      const resultingarray = Object.keys(fetchblogs);
      let finalarray = [];
      for (let i = 0; i < array.length; i++) {
        const newcate = array[i];
        let count = 0;

        for (let j = 0; j < resultingarray.length; j++) {
          if (fetchblogs[resultingarray[j]].Category == newcate) {
            count++;
          }
        }
        const objects = {
          Category: newcate,
          Times: count,
        };
        finalarray.push(objects);
      }
      setcategory(finalarray);
    } else setcategory([]);
  }, [fetchblogs]);
  return (
    <div>
      <AdminHeader blog="active" />
      <Suspense
        fallback={
          <div className="preloaders">
            <div className="loaders"></div>
          </div>
        }
      >
        <BlogComponent category={category} data={fetchblogs} load={loader} />
      </Suspense>
      <AdminFooter />
    </div>
  );
};

export default BlogShow;
