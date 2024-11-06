import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-wrap">
                <div className="login-bg">
                    <a href="index.html" className="navbar-brand">
                        <img className="logo-light" src="assets/img/logo-white.webp" alt="Image" />
                        <img className="logo-dark" src="assets/img/logo-white.webp" alt="Image" />
                    </a>
                </div>
                <div className="login-content">
                    <Link to={'/'} className="link-one"><i className="ri-arrow-left-s-line" />Back</Link>
                    <div className="login-form">
                        <h3>Welcome Back</h3>
                        <div className="alt-login">
                            <a style={{width:"100%"}} href="https://www.gmail.com/"><img src="assets/img/icons/google.svg" alt="Image" />Login With
                                Google</a>
                        </div>
                        <div className="text-center">
                            <span className="or-text">OR</span>
                        </div>
                        <form action="#">
                            <div className="form-group">
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="number" placeholder="Password" />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-check checkbox">
                                        <input className="form-check-input" type="checkbox" id="test_2" />
                                        <label className="form-check-label" htmlFor="test_2">
                                            Stay Logged In?
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6 text-end">
                                    <a href="login.html">Forgot Password</a>
                                </div>
                            </div>
                            <button type="submit" className="btn-two w-100 d-block">Login</button>
                            <p className="login-text">Don't have an account?<a href="signup.html">Sign Up</a></p>
                        </form>
                    </div>
                </div>
        </div>
    )
}
export default Login