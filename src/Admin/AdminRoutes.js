import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminBlogContext from "./Context/AdminBlogContext";
import Firebase from "../Firebase";
const AdminRoutes = () => {
  const [data, setdata] = useState(null);
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setloader(true);
    const user = JSON.parse(localStorage.getItem("Users"));
    if (!user) {
      alert("Unauthorised user");
      window.history.replaceState(null, null, "/Login");
      return navigate("/", { replace: true });
    }
    Firebase.child("Blogs")
      .child(user)
      .on("value", function (snap) {
        if (snap.val()) return setdata(snap.val());
        else return setdata(null);
      });
    setTimeout(() => setloader(false), 1500);
  }, []);
  return (
    <AdminBlogContext.Provider value={{ fetchblogs: data, loader: loader }}>
      <Outlet />
    </AdminBlogContext.Provider>
  );
};

export default AdminRoutes;
