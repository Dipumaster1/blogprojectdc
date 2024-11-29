import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
const TrendingNow = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="trending-news-box">
          <div className="row gx-5">
            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4">
              <h4>Trending Now</h4>
              <div className="trending-prev">
                <i className="flaticon-left-arrow" />
              </div>
              <div className="trending-next">
                <i className="flaticon-right-arrow" />
              </div>
            </div>
            <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-8">
              <div className="trending-news-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: ".trending-next",
                      prevEl: ".trending-prev",
                    }}
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                      // when window width is >= 320px
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      // when window width is >= 1024px
                      1024: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                    }}
                  >
                    {props?.data &&
                      props?.data?.map((obj, index) => {
                        if (index < 3) {
                          return (
                            <SwiperSlide key={index}>
                              <div className="news-card-one">
                                <div className="news-card-img">
                                  <img
                                    style={{
                                      height: "100px",
                                      width: "110px",
                                      borderRadius: "50%",
                                    }}
                                    src={
                                      obj?.HeadingImage?.url
                                        ? obj?.HeadingImage?.url
                                        : "assets/img/news/trending-1.webp"
                                    }
                                    alt="Climate Change"
                                  />
                                </div>
                                <div className="news-card-info">
                                  <h3>
                                    <a href="#">{obj?.Title}</a>
                                  </h3>
                                  <ul className="news-metainfo list-style">
                                    <li>
                                      <i className="fi fi-rr-user" />
                                      {obj?.User}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                        }
                      })}

                    <div></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
