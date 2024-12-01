import React, { useState } from "react";
import { Link } from "react-router-dom";
import Firebase, { auth } from "../Firebase";
const Signup = () => {
  const [obj, setobj] = useState({});
  const [btndisable, setbtndisable] = useState(false);
  const d = new Date();
  const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

  function set(event) {
    setobj({ ...obj, [event.target.name]: event.target.value, Date: date });
  }
  function NameChange(event) {
    const name = event.target.value.replace(/[^a-zA-Z\s]/g, "");
    setobj({ ...obj, Name: name });
  }
  function EmailCheck(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  async function Submit(e) {
    try {
      e.preventDefault();
      setbtndisable(true);
      if (!obj.Name || !obj.Email || !obj.Password || !obj.ConfirmPassword)
        return alert("Field is Empty");
      const response = EmailCheck(obj.Email);
      if (!response) return alert("Email is not valid");
      if (obj.Password !== obj.ConfirmPassword)
        return alert("Password not matched");

      const object = {
        Name: obj.Name,
        Email: obj.Email,
      };
      const result = await auth.createUserWithEmailAndPassword(
        obj.Email,
        obj.Password
      );
      setobj({});
      Firebase.child("Users")
        .child(result.user.uid)
        .set(object, (err) => {
          if (err) return alert("Something Went Wrong. Try Again later.");
          else return alert("Account Created Successfully");
        });
    } catch (error) {
      return alert("Account related to this Email is already exist.");
    } finally {
      setbtndisable(false);
    }
  }
  return (
    <div className="login-wrap">
      <div className="login-bg">
        <a className="navbar-brand">
          <img
            className="logo-light"
            src="assets/img/logo-white.webp"
            alt="Image"
          />
          <img
            className="logo-dark"
            src="assets/img/logo-white.webp"
            alt="Image"
          />
        </a>
      </div>
      <div className="login-content">
        <Link to={"/"} className="link-one">
          <i className="ri-arrow-left-s-line" />
          Back
        </Link>
        <div className="login-form">
          <h3>Account-SignUp</h3>
          <div className="alt-login">
            <a style={{ width: "100%" }} href="https://www.gmail.com/">
              <img src="assets/img/icons/google.svg" alt="Image" />
              Login With Google
            </a>
          </div>
          <div className="text-center">
            <span className="or-text">OR</span>
          </div>
          <form action="#">
            <div className="form-group">
              <input
                type="text"
                value={obj.Name ? obj.Name : ""}
                onChange={NameChange}
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                name="Email"
                value={obj.Email ? obj.Email : ""}
                onChange={set}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="Password"
                value={obj.Password ? obj.Password : ""}
                onChange={set}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="ConfirmPassword"
                value={obj.ConfirmPassword ? obj.ConfirmPassword : ""}
                onChange={set}
                placeholder="Confirm Password"
              />
            </div>
            <button
              disabled={btndisable}
              type="submit"
              onClick={Submit}
              className="btn-two w-100 d-block"
            >
              Create Account
            </button>
            <p className="login-text">
              Already have an account?<a href="login.html">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
