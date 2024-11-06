import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
const TrendingNow = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="trending-news-box">
                    <div className="row gx-5">
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4">
                            <h4>Trending Now</h4>
                            <div className="trending-prev"><i className="flaticon-left-arrow" /></div>
                            <div className="trending-next"><i className="flaticon-right-arrow" /></div>
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
                                            nextEl: '.trending-next',
                                            prevEl: '.trending-prev',
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
                                        <SwiperSlide>
                                            <div className="news-card-one">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/trending-1.webp" alt="Climate Change" />
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Climate Change & Your Future Health</a></h3>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="news-card-one">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/trending-2.webp" alt="Female Hawks" />
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Female Hawks Win $10,000 Funding Boost</a></h3>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" news-card-one">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/trending-3.webp" alt="Image" />
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Goodwin Must Break Clarkson Hold</a></h3>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-clock-three" />8 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" news-card-one">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/trending-4.webp" alt="Image" />
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Major GWC Collection Is Coming To QVC</a></h3>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-clock-three" />12 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <div>

                                        </div>


                                        {/* Add more SwiperSlides as needed */}

                                        {/* Swiper navigation buttons */}
                                    </Swiper>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingNow