import React, { Suspense, useContext } from "react";
import AdminHeader from "../AdminComp/AdminHeader";
import AdminFooter from "../AdminComp/AdminFooter";
import BlogComponent from "../AdminComp/BlogComponent";
import AdminBlogContext from "../Context/AdminBlogContext";

const BlogShow = () => {
  const { fetchblogs, loader } = useContext(AdminBlogContext);
  return (
    <div>
      <AdminHeader />
      <Suspense
        fallback={
          <div className="preloaders">
            <div className="loaders"></div>
          </div>
        }
      >
        <BlogComponent data={fetchblogs} load={loader} />
      </Suspense>
      <AdminFooter />
    </div>
  );
};

export default BlogShow;
