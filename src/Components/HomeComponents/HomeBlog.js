import React, { useEffect } from "react";

const HomeBlog = (props) => {
  function getDate(date) {
    if (!date) return "---";
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }
  function getData(start, end) {
    return props?.data?.map((obj, index) => {
      if (index >= start && end >= index) {
        return (
          <div key={index} className="news-card-three">
            <div className="news-card-img">
              <img
                loading="lazy"
                style={{ height: "120px", width: "200px" }}
                src={obj?.HeadingImage?.url}
                alt="Image"
              />
            </div>
            <div className="news-card-info">
              <a className="news-cat">{obj?.Category}</a>
              <h3>
                <a href="#">{obj?.Title}</a>
              </h3>
              <ul className="news-metainfo list-style">
                <li>
                  <i className="fi fi-rr-calendar-minus" />
                  <a href="#">{getDate(obj.Date)}</a>
                </li>
                <li>
                  <i className="fi fi-rr-user" />
                  {obj?.Author}
                </li>
              </ul>
            </div>
          </div>
        );
      }
    });
  }
  function getData1(start, end) {
    return props?.data?.map((obj, index) => {
      if (index >= start && end >= index) {
        return (
          <div key={index} className="news-card-five">
            <div className="news-card-img">
              <img
                loading="lazy"
                style={{ height: "100%", width: "100%" }}
                src={
                  obj?.HeadingImage?.url
                    ? obj?.HeadingImage?.url
                    : "assets/img/news/news-60.webp"
                }
                alt="Image"
              />
              <a className="news-cat">{obj?.Category}</a>
            </div>
            <div className="news-card-info">
              <h3>
                <a href="#">{obj?.Title}</a>
              </h3>
              <p>{obj.Description.slice(0, 100) + "..."}</p>
              <ul className="news-metainfo list-style">
                <li>
                  <i className="fi fi-rr-calendar-minus" />
                  <a href="#">{getDate(obj.Date)}</a>
                </li>
                <li>
                  <i className="fi fi-rr-user" />
                  {obj?.Author}
                </li>
              </ul>
            </div>
          </div>
        );
      }
    });
  }
  return (
    <div>
      <div className="container-fluid pb-75">
        <div className="news-col-wrap">
          <div className="news-col-one">
            <div className="news-card-two">
              <div className="news-card-img">
                <img
                  loading="lazy"
                  style={{ height: "100%", width: "100%" }}
                  src={
                    props?.data[0]?.HeadingImage?.url
                      ? props?.data[0]?.HeadingImage?.url
                      : "../assets/img/news/news-1.webp"
                  }
                  alt="Image"
                />
                <a className="news-cat">{props?.data[0]?.Category}</a>
              </div>
              <div className="news-card-info">
                <h3>
                  <a>{props?.data[0]?.Title}</a>
                </h3>
                <ul className="news-metainfo list-style">
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <a>{getDate(props?.data[0]?.Date)}</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-user" />
                    {props?.data[0]?.Author}
                  </li>
                </ul>
              </div>
            </div>
            {getData(1, 3)}
          </div>
          <div className="news-col-two">
            <div className="news-card-four">
              <img
                loading="lazy"
                style={{ height: "100%", width: "100%" }}
                src={
                  props?.data[4]?.HeadingImage?.url
                    ? props?.data[4]?.HeadingImage?.url
                    : "assets/img/news/news-58.webp"
                }
                alt="Image"
              />
              <div className="news-card-info">
                <h3>
                  <a href="#">{props?.data[4]?.Title}</a>
                </h3>
                <ul className="news-metainfo list-style">
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <a href="#">{getDate(props?.data[4]?.Date)}</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-user" />
                    {props?.data[4]?.Author}
                  </li>
                </ul>
              </div>
            </div>
            {getData1(5, 6)}
          </div>
          <div className="news-col-three">
            <div className="news-card-two">
              <div className="news-card-img">
                <img
                  loading="lazy"
                  style={{ height: "100%", width: "100%" }}
                  src={
                    props?.data[7]?.HeadingImage?.url
                      ? props?.data[7]?.HeadingImage?.url
                      : "../assets/img/news/news-1.webp"
                  }
                  alt="Image"
                />
                <a className="news-cat">{props?.data[7]?.Category}</a>
              </div>
              <div className="news-card-info">
                <h3>
                  <a>{props?.data[7]?.Title}</a>
                </h3>
                <ul className="news-metainfo list-style">
                  <li>
                    <i className="fi fi-rr-calendar-minus" />
                    <a>{getDate(props?.data[7]?.Date)}</a>
                  </li>
                  <li>
                    <i className="fi fi-rr-user" />
                    {props?.data[7]?.Author}
                  </li>
                </ul>
              </div>
            </div>
            {getData(8, 10)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
