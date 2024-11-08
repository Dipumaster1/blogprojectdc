import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active one if clicked again
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };
  return (
    <div>
      <div className="navbar-area header-one" id="navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img
                className="logo-light"
                src="../assets/img/logo-white.png"
                alt="logo"
              />
              <img
                className="logo-dark"
                src="../assets/img/logo-white.png"
                alt="logo"
              />
            </Link>
            <a
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              href="#navbarOffcanvas"
              role="button"
              aria-controls="navbarOffcanvas"
            >
              <span onClick={() => settoggle(!toggle)} className="burger-menu">
                <span className="top-bar" />
                <span className="middle-bar" />
                <span className="bottom-bar" />
              </span>
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Blog"} className="nav-link">
                    Latest Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Author"} className="nav-link">
                    Authors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown-toggle nav-link">Pages</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to={"/Privacy"} className="nav-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/TermsandCondition"} className="nav-link">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/Signup"} className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to={"/Login"} className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <Link to={"/Login"} className="btn-two">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={
          toggle
            ? "responsive-navbar offcanvas offcanvas-end show"
            : "responsive-navbar offcanvas offcanvas-end"
        }
        tabIndex={-1}
        id="navbarOffcanvas"
      >
        <div className="offcanvas-header">
          <Link to="/" className="logo d-inline-block">
            <img
              className="logo-light"
              src="../assets/img/logo.webp"
              alt="logo"
            />
            <img
              className="logo-dark"
              src="../assets/img/logo-white.png"
              alt="logo"
            />
          </Link>
          <button
            type="button"
            onClick={() => settoggle(!toggle)}
            className="close-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ri-close-line" />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="accordion" id="navbarAccordion">
            <div className="accordion-item">
              <Link to={"/"}>
                <button
                  className="accordion-button  active"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Home
                </button>
              </Link>
            </div>
            <div className="accordion-item">
              <Link to={"/Blog"}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Latest Blogs
                </button>
              </Link>
            </div>
            <div className="accordion-item">
              <Link to={"/Author"}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Authors
                </button>
              </Link>
            </div>
            <div className="accordion-item">
              <button
                onClick={() => toggleAccordion(1)}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapbaxour"
                aria-expanded="false"
                aria-controls="collapbaxour"
              >
                Pages
              </button>
              <div
                id="collapbaxour"
                className={`accordion-collapse collapse ${
                  activeIndex === 1 ? "show" : ""
                }`}
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion45">
                    <div className="accordion-item">
                      <Link to={"/Privacy"} className="accordion-link">
                        Privacy Policy
                      </Link>
                    </div>
                    <div className="accordion-item">
                      <Link
                        to={"/TermsandCondition"}
                        className="accordion-link"
                      >
                        Terms & Condition
                      </Link>
                    </div>
                    <div className="accordion-item">
                      <Link to={"/Signup"} className="accordion-link">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <Link to={"/Login"} className="accordion-link">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="others-option d-flex d-lg-none align-items-center">
            <div className="option-item">
              <Link to={"/Login"} className="btn-two">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
