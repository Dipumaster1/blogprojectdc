import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Firebase, { auth } from "../Firebase";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [obj, setobj] = useState({});
  const [btndisable, setbtndisable] = useState(false);
  const navigate = useNavigate();
  function set(event) {
    setobj({ ...obj, [event.target.name]: event.target.value });
  }
  function EmailCheck(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  async function Submit(e) {
    try {
      e.preventDefault();
      setbtndisable(true);
      if (!obj.Email || !obj.Password) return alert("Field is Empty");
      const response = EmailCheck(obj.Email);
      if (!response) return alert("Email is not valid");

      const result = await auth.signInWithEmailAndPassword(
        obj.Email,
        obj.Password
      );
      localStorage.setItem("Users", JSON.stringify(result.user.uid));
      setobj({});
      navigate("/Blogs");
    } catch (error) {
      return alert("Invalid Credentials");
    } finally {
      setbtndisable(false);
    }
  }
  function create(e) {
    const result = jwtDecode(e.credential);
    Firebase.child("Users")
      .child(result.sub)
      .set(
        {
          Email: result.email,
          Name: result.name,
          ProfileImage: { url: result.picture },
        },
        (err) => {
          if (err) return alert("Something went wrong. Try again later");
          else {
            localStorage.setItem("Users", JSON.stringify(result.sub));
            return navigate("/Blogs");
          }
        }
      );
  }
  return (
    <div className="login-wrap">
      <div className="login-bg">
        <Link to="/" className="navbar-brand">
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
        </Link>
      </div>
      <div className="login-content">
        <Link to={"/"} className="link-one">
          <i className="ri-arrow-left-s-line" />
          Back
        </Link>
        <div className="login-form">
          <h3>Welcome Back</h3>
          <div className="alt-login">
            <GoogleOAuthProvider clientId="598939173507-nov0p5l9fb16gpr977rl81olsvr5apme.apps.googleusercontent.com">
              <GoogleLogin useOneTap={true} onSuccess={create}></GoogleLogin>
            </GoogleOAuthProvider>
            {/* <a style={{width:"100%"}} href="https://www.gmail.com/"><img src="assets/img/icons/google.svg" alt="Image" />Login With
                                Google</a> */}
          </div>
          <div className="text-center">
            <span className="or-text">OR</span>
          </div>
          <form action="#">
            <div className="form-group">
              <input
                type="email"
                value={obj.Email ? obj.Email : ""}
                name="Email"
                onChange={set}
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={obj.Password ? obj.Password : ""}
                name="Password"
                onChange={set}
                placeholder="Password"
              />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-check checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="test_2"
                  />
                  <label className="form-check-label" htmlFor="test_2">
                    Stay Logged In?
                  </label>
                </div>
              </div>
              <div className="col-6 text-end">
                <a href="#">Forgot Password</a>
              </div>
            </div>
            <button
              onClick={Submit}
              disabled={btndisable}
              type="submit"
              className="btn-two w-100 d-block"
            >
              Login
            </button>
            <p className="login-text">
              Don't have an account?<a href="signup.html">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
