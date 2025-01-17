import React, { useEffect, useState } from "react";
import UserContext from "./Context/UserContext";
import { Outlet } from "react-router-dom";
import Firebase from "../Firebase";

const UserRoute = () => {
  const [state, setstate] = useState([]);
  const [images, setimages] = useState([]);
  const [alldata, setalldata] = useState([]);
  const [loading, setloading] = useState(false);
  const [users, setusers] = useState({});
  useEffect(() => {
    setloading(true);
    Firebase.child("Blogs").on("value", function (snap) {
      if (snap.val()) {
        let array = [];
        Object.keys(snap.val()).map((user) => {
          Object.keys(snap.val()[user]).map((key) => {
            if (snap.val()[user][key].Status === "Active") {
              const object = snap.val()[user][key];
              object.BlogKey = key;
              object.User = user;
              array.push(object);
            }
          });
        });
        setalldata(array);
        array.sort((a, b) => b.Date - a.Date);
        const newarray = array.slice(0, 12);
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
        setalldata([]);
      }
    });
    Firebase.child("Users").on("value", function (snap) {
      if (snap.val()) return setusers(snap.val());
      else return setusers({});
    });
    setTimeout(() => setloading(false), 2000);
  }, []);
  return (
    <UserContext.Provider
      value={{
        fetchlatestblogs: state,
        fetchlatestimages: images,
        users: users,
        loading: loading,
        alldata: alldata,
      }}
    >
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserRoute;
