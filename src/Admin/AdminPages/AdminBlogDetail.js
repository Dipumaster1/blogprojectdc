import React, { Suspense, useContext, useEffect, useState } from "react";
import AdminHeader from "../AdminComp/AdminHeader";
import AdminFooter from "../AdminComp/AdminFooter";
import { useNavigate } from "react-router-dom";
import AdminBlogContext from "../Context/AdminBlogContext";
const AdminBlogDetailComp = React.lazy(() =>
  import("../AdminComp/AdminBlogDetailComp")
);

const AdminBlogDetail = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState(null);
  const { fetchblogs } = useContext(AdminBlogContext);
  useEffect(() => {
    if (fetchblogs) {
      const currentblog = JSON.parse(localStorage.getItem("CurrentBlog"));
      if (!currentblog) return navigate("/Blogs");
      if (!fetchblogs[currentblog]) return navigate("/Blogs");

      const result = Object.keys(fetchblogs).filter(
        (key) => key === currentblog
      );
      if (result.length === 0) return navigate("/Blogs");
      setdata(fetchblogs[currentblog]);
    }
  }, [fetchblogs]);
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
        <AdminBlogDetailComp data={data} />
      </Suspense>
      <AdminFooter />
    </div>
  );
};

export default AdminBlogDetail;
