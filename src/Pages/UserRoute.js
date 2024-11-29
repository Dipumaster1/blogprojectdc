import React, { useEffect, useState } from "react";
import UserContext from "./Context/UserContext";
import { Outlet } from "react-router-dom";
import Firebase from "../Firebase";

const UserRoute = () => {
  const [state, setstate] = useState([]);
  const [images, setimages] = useState([]);
  useEffect(() => {
    Firebase.child("Blogs").on("value", function (snap) {
      if (snap.val()) {
        let array = [];
        Object.keys(snap.val()).map((user) => {
          Object.keys(snap.val()[user]).map((key) => {
            const object = snap.val()[user][key];
            object.User = user;
            array.push(object);
          });
        });
        array.sort((a, b) => b.Date - a.Date);
        const newarray = array.slice(0, 10);
        setstate(newarray);
        let resultingarray = [];
        newarray.map((obj) => {
          if (obj.Images) {
            resultingarray = [...resultingarray, ...obj.Images];
          }
        });
        const myarray = resultingarray.slice(0, 15);
        setimages(myarray);
      } else {
        setstate([]);
        setimages([]);
      }
    });
  }, []);
  return (
    <UserContext.Provider
      value={{ fetchlatestblogs: state, fetchlatestimages: images }}
    >
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserRoute;
