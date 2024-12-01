import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const HomeInstaSlider = (props) => {
  return (
    <div>
      <div className="container-fluid pb-50">
        <div className="instagram-slider swiper">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {props?.data &&
              props?.data?.map((obj, index) => {
                return (
                  <SwiperSlide key={index}>
                    <a
                      className="instagram-slide"
                      href={obj?.urls ? obj?.urls : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        loading="lazy"
                        style={{ height: "250px", width: "400px" }}
                        src={
                          obj?.urls
                            ? obj?.urls
                            : "assets/img/instagram/insta-1.webp"
                        }
                        alt="Image"
                      />
                      <span>
                        {obj.paths}
                        <i className="flaticon-right-arrow" />
                      </span>
                    </a>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeInstaSlider;
