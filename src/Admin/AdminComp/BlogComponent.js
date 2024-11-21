import React from "react";
import { useNavigate } from "react-router-dom";

const BlogComponent = (props) => {
  const navigate = useNavigate();
  function openblog(key) {
    localStorage.setItem("CurrentBlog", JSON.stringify(key));
    navigate("/AdminBlogDetail");
  }
  return (
    <div className="sports-wrap ptb-100">
      <div className="container">
        <div className="row gx-55 gx-5">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              {props.data &&
                Object.keys(props.data).map(function (key, index) {
                  if (props?.data[key]?.Date) {
                    const date = new Date(props?.data[key]?.Date);
                    return (
                      <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                        <div className="news-card-thirteen">
                          <div className="news-card-img">
                            <img
                              onClick={() => openblog(key)}
                              style={{
                                height: "250px",
                                width: "400px",
                                backgroundSize: "cover",
                              }}
                              loading="lazy"
                              src={props?.data[key]?.HeadingImage?.url}
                              alt="Iamge"
                            />
                            <a
                              onClick={() => openblog(key)}
                              className="news-cat"
                            >
                              {props?.data[key]?.Category}
                            </a>
                          </div>
                          <div className="news-card-info">
                            <h3>
                              <a onClick={() => openblog(key)}>
                                {props?.data[key]?.Title}
                              </a>
                            </h3>
                            <ul className="news-metainfo list-style">
                              <li>
                                <i className="fi fi-rr-calendar-minus" />
                                <a
                                  onClick={() => openblog(key)}
                                >{`${date.getDate()}/${
                                  date.getMonth() + 1
                                }/${date.getFullYear()}`}</a>
                              </li>
                              <li>
                                <i className="fi fi-rr-user" />
                                By:-{props?.data[key]?.Author}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                        <div className="news-card-thirteen">
                          <div className="news-card-img">
                            <img
                              onClick={() => openblog(key)}
                              style={{
                                height: "250px",
                                width: "400px",
                                backgroundSize: "cover",
                              }}
                              loading="lazy"
                              src={props?.data[key]?.HeadingImage?.url}
                              alt="Iamge"
                            />
                            <a
                              onClick={() => openblog(key)}
                              className="news-cat"
                            >
                              {props?.data[key]?.Category}
                            </a>
                          </div>
                          <div className="news-card-info">
                            <h3>
                              <a onClick={() => openblog(key)}>
                                {props?.data[key]?.Title}
                              </a>
                            </h3>
                            <ul className="news-metainfo list-style">
                              <li>
                                <i className="fi fi-rr-calendar-minus" />
                                <a onClick={() => openblog(key)}>---</a>
                              </li>
                              <li>
                                <i className="fi fi-rr-user" />
                                By:-{props?.data[key]?.Author}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              {/* <div className="sidebar-widget-two">
              <form action="#" className="search-box-widget">
                <input type="search" placeholder="Search" />
                <button type="submit">
                  <i className="fi fi-rr-search" />
                </button>
              </form>
            </div> */}
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Categories</h3>
                <ul className="category-widget list-style">
                  {props?.category?.map((obj, index) => {
                    return (
                      <li key={index}>
                        <a href="#">
                          <img
                            src="assets/img/icons/arrow-right.svg"
                            alt="Image"
                          />
                          {obj.Category} <span>({obj.Times})</span>
                        </a>
                      </li>
                    );
                  })}
                  {/* <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Culture<span>(3)</span></a></li>
                <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Fashion<span>(2)</span></a></li>
                <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Inspiration<span>(8)</span></a></li>
                <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Lifestyle<span>(6)</span></a></li>
                <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Politics<span>(2)</span></a></li>
                <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Trending<span>(4)</span></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
