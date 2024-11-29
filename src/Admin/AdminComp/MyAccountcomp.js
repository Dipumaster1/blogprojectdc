import React, { useState } from "react";
import Firebase, { storage } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const MyAccountcomp = (props) => {
  const [image, setimage] = useState(null);
  const [btndisable, setbtndisable] = useState(false);
  const navigate = useNavigate();
  const upload = (event) => {
    const file = event.target.files[0];
    if (!file) return alert("Image is not uploaded yet.");

    const ext = file.type.split("/");
    if (ext[0] !== "image") return alert("Only image is supported");

    if (
      ext[1] === "png" ||
      ext[1] === "jpg" ||
      ext[1] === "jpeg" ||
      ext[1] === "PNG"
    ) {
      return setimage(file);
    }
    return alert("Only png,jpeg and jpg image is supported");
  };
  const submit = async (e) => {
    try {
      e.preventDefault();
      setbtndisable(true);
      if (!image) return alert("Upload your ProfileImage first");
      const user = JSON.parse(localStorage.getItem("Users"));
      if (!user) {
        alert("Unauthorised user");
        window.history.replaceState(null, null, "/Login");
        return navigate("/", { replace: true });
      }
      // uploading profile image in storage
      const fileRef = storage.child(Date.now() + image.name);
      await fileRef.put(image);
      const url = await fileRef.getDownloadURL();
      const path = fileRef.fullPath;
      const object = { url, path };
      //  updating user details in realtime database
      Firebase.child("Users")
        .child(user)
        .update({ ProfileImage: object }, (err) => {
          if (err) return alert("Something went wrong. Try again later");
          else return alert("User Updated");
        });
    } catch (error) {
      return alert("Something Went Wrong. Try again later");
    } finally {
      setbtndisable(false);
      setimage({});
    }
  };
  return (
    <div>
      <div className="author-wrap">
        {props.user.ProfileImage ? (
          <div className="container">
            <div className="author-box">
              <div className="author-img">
                <img
                  alt="Image"
                  src="assets/img/author/single-author.jpg"
                  style={{ display: "none", visibility: "hidden" }}
                />
              </div>
              <div className="author-info">
                <h4>Scarlett Emily</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or ran domised words which don't
                  look even slightly believable.
                </p>
                <div className="author-profile">
                  <ul className="social-profile list-style">
                    <li>
                      <a href="https://www.fb.com/" target="_blank">
                        <i className="ri-facebook-fill" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="ri-twitter-fill" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="ri-instagram-line" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="ri-linkedin-fill" />
                      </a>
                    </li>
                  </ul>
                  <div className="author-stat">
                    <span>40 Articles</span>
                    <span>191 Comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div
              style={{ display: "flex", justifyContent: "space-around" }}
              className="author-box"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "240px",
                }}
                className="author-img"
              >
                <img
                  alt="Image"
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "assets/img/noimage.jpg"
                  }
                />
              </div>
              <div className="author-info" style={{ border: "0px" }}>
                <form
                  action="#"
                  className="checkout-form"
                  style={{ border: "0px" }}
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="checkout-box-title">
                        Add your ProfileImage
                      </h3>
                    </div>
                    <div style={{ width: "100%" }} className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="file"
                          style={{ height: "63px" }}
                          onChange={upload}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          disabled={btndisable}
                          onClick={submit}
                          className="btn-one"
                        >
                          Submit
                          <i className="flaticon-right-arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="popular-news-three ptb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8">
              <div className="section-title-two mb-40">
                <h2>Posts</h2>
              </div>
              <div className="popular-news-wrap">
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-70.webp" alt="Image" />
                    <a href="business.html" className="news-cat">
                      Lifestyle
                    </a>
                  </div>
                  <div className="news-card-info">
                    <h3>
                      <a href="business-details.html">
                        Live Your Best Life: Tips For Achieving A Healthy And
                        Fulfilling Lifestyle
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet conse ctet fringilla purus leo
                      dignissim congue. Mauris elementum accumsan.
                    </p>
                    <ul className="news-metainfo list-style">
                      <li className="author">
                        <span className="author-img">
                          <img
                            src="assets/img/author/author-thumb-1.webp"
                            alt="Image"
                          />
                        </span>
                        <a href="author.html">James William</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-calendar-minus" />
                        <a href="news-by-date.html">Feb 03, 2024</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-clock-three" />
                        10 Min Read
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-71.webp" alt="Image" />
                    <a href="business.html" className="news-cat">
                      Business
                    </a>
                  </div>
                  <div className="news-card-info">
                    <h3>
                      <a href="business-details.html">
                        Maximizing Profits: A Guide To Streamlining Your
                        Business Operations
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet conse ctet fringilla purus leo
                      dignissim congue. Mauris elementum accumsan.
                    </p>
                    <ul className="news-metainfo list-style">
                      <li className="author">
                        <span className="author-img">
                          <img
                            src="assets/img/author/author-thumb-2.webp"
                            alt="Image"
                          />
                        </span>
                        <a href="author.html">Amela Mia</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-calendar-minus" />
                        <a href="news-by-date.html">Feb 03, 2024</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-clock-three" />
                        12 Min Read
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-72.webp" alt="Image" />
                    <a href="business.html" className="news-cat">
                      Events
                    </a>
                  </div>
                  <div className="news-card-info">
                    <h3>
                      <a href="business-details.html">
                        Making Events Memorable: A Guide To Planning Successful
                        Gatherings
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet conse ctet fringilla purus leo
                      dignissim congue. Mauris elementum accumsan.
                    </p>
                    <ul className="news-metainfo list-style">
                      <li className="author">
                        <span className="author-img">
                          <img
                            src="assets/img/author/author-thumb-3.webp"
                            alt="Image"
                          />
                        </span>
                        <a href="author.html">Ava Sophia</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-calendar-minus" />
                        <a href="news-by-date.html">Feb 03, 2024</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-clock-three" />8 Min Read
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-73.webp" alt="Image" />
                    <a href="business.html" className="news-cat">
                      Photography
                    </a>
                  </div>
                  <div className="news-card-info">
                    <h3>
                      <a href="business-details.html">
                        Capturing Life's Moments: A Guide to Improving Your
                        Photography Skills
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet conse ctet fringilla purus leo
                      dignissim congue. Mauris elementum accumsan.
                    </p>
                    <ul className="news-metainfo list-style">
                      <li className="author">
                        <span className="author-img">
                          <img
                            src="assets/img/author/author-thumb-4.webp"
                            alt="Image"
                          />
                        </span>
                        <a href="author.html">Olivia Emma</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-calendar-minus" />
                        <a href="news-by-date.html">Feb 03, 2024</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-clock-three" />
                        10 Min Read
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-74.webp" alt="Image" />
                    <a href="business.html" className="news-cat">
                      Culture
                    </a>
                  </div>
                  <div className="news-card-info">
                    <h3>
                      <a href="business-details.html">
                        Exploring the World's Diversity: A Journey Through
                        Different Cultures
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                      ipsum dolor sit amet conse ctet fringilla purus leo
                      dignissim congue. Mauris elementum accumsan.
                    </p>
                    <ul className="news-metainfo list-style">
                      <li className="author">
                        <span className="author-img">
                          <img
                            src="assets/img/author/author-thumb-5.webp"
                            alt="Image"
                          />
                        </span>
                        <a href="author.html">Lima Noah</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-calendar-minus" />
                        <a href="news-by-date.html">Feb 03, 2024</a>
                      </li>
                      <li>
                        <i className="fi fi-rr-clock-three" />
                        15 Min Read
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="page-nav list-style text-center mt-5">
                <li>
                  <a href="author.html">
                    <i className="flaticon-arrow-left" />
                  </a>
                </li>
                <li>
                  <a className="active" href="author.html">
                    01
                  </a>
                </li>
                <li>
                  <a href="author.html">02</a>
                </li>
                <li>
                  <a href="author.html">03</a>
                </li>
                <li>
                  <a href="author.html">
                    <i className="flaticon-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget">
                  <h3 className="sidebar-widget-title">Explore Topics</h3>
                  <ul className="category-widget list-style">
                    <li>
                      <a href="business.html">
                        <img
                          src="assets/img/icons/arrow-right.svg"
                          alt="Image"
                        />
                        Celebration <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img
                          src="assets/img/icons/arrow-right.svg"
                          alt="Image"
                        />
                        Culture<span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img
                          src="assets/img/icons/arrow-right.svg"
                          alt="Image"
                        />
                        Fashion<span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img
                          src="assets/img/icons/arrow-right.svg"
                          alt="Image"
                        />
                        Inspiration<span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img
                          src="assets/img/icons/arrow-right.svg"
                          alt="Image"
                        />
                        Lifestyle<span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img
                          src="assets/img/icons/arrow-right.svg"
                          alt="Image"
                        />
                        Politics<span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="business.html">
                        <img
                          src="assets/img/icons/arrow-right.svg"
                          alt="Image"
                        />
                        Trending<span>(4)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget-two">
                  <div className="contact-widget">
                    <img
                      src="assets/img/contact-bg.svg"
                      alt="Image"
                      className="contact-shape"
                    />
                    <a href="index.html" className="logo">
                      <img
                        className="logo-light"
                        src="assets/img/logo.webp"
                        alt="Image"
                      />
                      <img
                        className="logo-dark"
                        src="assets/img/logo-white.webp"
                        alt="Image"
                      />
                    </a>
                    <p>
                      Mauris mattis auctor cursus. Phasellus iso tellus tellus,
                      imperdiet ut imperdiet eu, noiaculis a sem Donec vehicula
                      luctus nunc in laoreet Aliquam
                    </p>
                    <ul className="social-profile list-style">
                      <li>
                        <a href="https://www.fb.com/" target="_blank">
                          <i className="flaticon-facebook-1" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="flaticon-twitter-1" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="flaticon-instagram-2" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="flaticon-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <h3 className="sidebar-widget-title">Recommended</h3>
                  <div className="pp-post-wrap-two">
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img
                          src="assets/img/news/news-thumb-4.webp"
                          alt="Image"
                        />
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            Bernie Nonummy Pelopai Iatis Eum Litora
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Apr 22, 2024</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img
                          src="assets/img/news/news-thumb-5.webp"
                          alt="Image"
                        />
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            How Youth Viral Diseases May The Year 2023
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Apr 23, 2024</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img
                          src="assets/img/news/news-thumb-6.webp"
                          alt="Image"
                        />
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            Man Wearing Black Pullover Hoodie To Smoke
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Apr 14, 2024</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img
                          src="assets/img/news/news-thumb-7.webp"
                          alt="Image"
                        />
                      </div>
                      <div className="news-card-info">
                        <h3>
                          <a href="business-details.html">
                            First Prototype Flight Using Kinetic Launch System
                          </a>
                        </h3>
                        <ul className="news-metainfo list-style">
                          <li>
                            <i className="fi fi-rr-calendar-minus" />
                            <a href="news-by-date.html">Apr 07, 2024</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountcomp;
