import React, { useEffect, useState } from "react";
import Firebase from "../../Firebase";
import { useNavigate } from "react-router-dom";

const BlogDetailComp = ({ data, thisuserallblog, previous, next, fun }) => {
  const [obj, setobj] = useState({});
  const [loading, setloading] = useState(false);
  const [comments, setcomments] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      setloading(true);
      Firebase.child(`Comments/${data.User}/${data.BlogKey}`).on(
        "value",
        function (snap) {
          if (snap.val()) return setcomments(snap.val());
          else return setcomments(null);
        }
      );
      setloading(false);
    }
  }, [data]);
  function set(event) {
    setobj({
      ...obj,
      [event.target.name]: event.target.value,
      Date: Date.now(),
    });
  }
  function emailcheck(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  function namechange(event) {
    const name = event.target.value.replace(/[^a-zA-Z\s]/g, "");
    setobj({ ...obj, Name: name });
  }
  function Submit(e) {
    e.preventDefault();
    setloading(true);
    if (!obj.Name || !obj.Email || !obj.Messages)
      return alert("Field is Empty");
    const result = emailcheck(obj.Email);
    if (!result) return alert("Entered Email is not valid Email");

    Firebase.child(`Comments/${data.User}/${data.BlogKey}`).push(obj, (err) => {
      if (err) return alert("Something went wrong. Try again later");
      else return alert("Your comment is successfully uploaded");
    });
    setloading(false);
    setobj({});
  }
  function getDate(date) {
    if (!date) return "---";
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }
  return (
    <div className="news-details-wrap ptb-100">
      <div className="container">
        <div className="row gx-55 gx-5">
          <div className="col-lg-8">
            <article>
              <div className="news-img">
                <img
                  loading="lazy"
                  style={{ height: "400px", width: "1000px" }}
                  src={
                    data?.HeadingImage?.url
                      ? data?.HeadingImage?.url
                      : "assets/img/news/single-news-3.webp"
                  }
                  alt="Image"
                />
                <a href="#" className="news-cat">
                  {data?.Category}
                </a>
              </div>
              <ul className="news-metainfo list-style">
                <li className="author">
                  <a href="#" style={{ textWrap: "nowrap" }}>
                    {data?.Author}
                  </a>
                </li>
                <li>
                  <i className="fi fi-rr-calendar-minus" />
                  <a href="#">{getDate(data?.Date)}</a>
                </li>
                {comments && (
                  <li>
                    <i className="fi fi-rr-clock-three" />
                    {Object.keys(comments).length} Comments
                  </li>
                )}
              </ul>
              <div className="news-para">
                <h1>{data?.Heading}</h1>
                <p>{data?.Description}</p>
              </div>
              <div className="row">
                {data?.Images?.map((obj, index) => (
                  <div key={index} className="col-md-6">
                    <div className="news-img">
                      <img
                        loading="lazy"
                        style={{ height: "250px", width: "400px" }}
                        src={
                          obj?.urls
                            ? obj?.urls
                            : "assets/img/news/single-news-5.webp"
                        }
                        alt="Image"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {data?.SubHeadingsData?.map((obj, index) => (
                <div key={index} className="news-para">
                  <h4 style={{ margin: "0px" }}>{obj?.Sub_Heading}</h4>
                  <p style={{ margin: "2px" }}>
                    {obj?.Sub_Heading_Description}
                  </p>
                </div>
              ))}
            </article>
            <div className="post-pagination">
              {previous ? (
                <a
                  onClick={() => {
                    localStorage.setItem(
                      "BlogDetails",
                      JSON.stringify(previous.BlogKey)
                    );
                    navigate("/BlogDetails");
                    fun(previous.BlogKey);
                  }}
                  className="prev-post"
                >
                  <span>PREVIOUS</span>
                  <h6>{previous?.Title}</h6>
                </a>
              ) : (
                <a></a>
              )}
              {next && (
                <a
                  onClick={() => {
                    localStorage.setItem(
                      "BlogDetails",
                      JSON.stringify(next.BlogKey)
                    );
                    navigate("/BlogDetails");
                    fun(next.BlogKey);
                  }}
                  className="next-post"
                >
                  <span>NEXT</span>
                  <h6>{next?.Title}</h6>
                </a>
              )}
            </div>
            {comments && (
              <div>
                <h3 className="comment-box-title">
                  {Object.keys(comments).length} Comments
                </h3>
                <div className="comment-item-wrap">
                  {Object.keys(comments)
                    ?.reverse()
                    ?.map(
                      (key, index) =>
                        index < 5 && (
                          <div
                            key={index}
                            className={
                              index % 2 === 0
                                ? "comment-item"
                                : "comment-item reply"
                            }
                          >
                            <div className="comment-author-wrap">
                              <div className="comment-author-info">
                                <div className="row align-items-start">
                                  <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                    <div className="comment-author-name">
                                      <h5>{comments[key]?.Name}</h5>
                                      {/* <span className="comment-date">{comments[key]?.Email}</span> */}
                                      <span className="comment-date">
                                        {getDate(comments[key]?.Date)}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                                    <div className="comment-text">
                                      <p>{comments[key]?.Messages}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                </div>
              </div>
            )}
            <div id="cmt-form">
              <div className="mb-30">
                <h3 className="comment-box-title">Leave A Comment</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked.
                </p>
              </div>
              <form action="#" className="comment-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        value={obj?.Name ? obj?.Name : ""}
                        name="Name"
                        onChange={namechange}
                        required
                        placeholder="Name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="Email"
                        value={obj?.Email ? obj?.Email : ""}
                        onChange={set}
                        required
                        placeholder="Email Address*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="Messages"
                        value={obj?.Messages ? obj?.Messages : ""}
                        onChange={set}
                        cols={30}
                        rows={10}
                        placeholder="Please Enter Your Comment Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <button
                      className="btn-two"
                      disabled={loading}
                      onClick={Submit}
                    >
                      Post A Comment
                      <i className="flaticon-right-arrow" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              {thisuserallblog.length > 1 && (
                <div className="sidebar-widget">
                  <h3 className="sidebar-widget-title">Recent Posts</h3>
                  <div className="pp-post-wrap">
                    {thisuserallblog?.map(
                      (obj, index) =>
                        obj.BlogKey !== data.BlogKey && (
                          <div key={index} className="news-card-one">
                            <div
                              onClick={() => {
                                localStorage.setItem(
                                  "BlogDetails",
                                  JSON.stringify(obj.BlogKey)
                                );
                                navigate("/BlogDetails");
                                fun(obj.BlogKey);
                              }}
                              className="news-card-img"
                            >
                              <img
                                loading="lazy"
                                style={{ height: "80px", width: "90px" }}
                                src={
                                  obj?.HeadingImage?.url
                                    ? obj?.HeadingImage?.url
                                    : "assets/img/news/news-thumb-4.webp"
                                }
                                alt="Image"
                              />
                            </div>
                            <div className="news-card-info">
                              <h3>
                                <a
                                  onClick={() => {
                                    localStorage.setItem(
                                      "BlogDetails",
                                      JSON.stringify(obj.BlogKey)
                                    );
                                    navigate("/BlogDetails");
                                    fun(obj.BlogKey);
                                  }}
                                  href="#"
                                >
                                  {obj?.Title}
                                </a>
                              </h3>
                              <ul className="news-metainfo list-style">
                                <li>
                                  <i className="fi fi-rr-calendar-minus" />
                                  <a href="#">{getDate(obj?.Date)}</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Popular Tags</h3>
                <ul className="tag-list list-style">
                  {data?.Tags?.split(",")?.map((tag, index) => (
                    <li key={index}>
                      <a>#{tag}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailComp;
