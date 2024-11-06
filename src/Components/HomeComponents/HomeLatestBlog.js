import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation,Autoplay } from 'swiper/modules';

const HomeLatestBlog = () => {
  return (
    <div>
        <div className="latest-news pb-100">
                    <div className="container-fluid">
                        <div className="content-wrapper">
                            <div className="left-content">
                                <div className="row align-items-end mb-40">
                                    <div className="col-md-7">
                                        <h2 className="section-title">Latest Blogs<img className="section-title-img" src="assets/img/section-img.webp" alt="Image" /></h2>
                                    </div>
                                    <div className="col-md-5 text-md-end">
                                        <a href="business.html" className="link-one">View All News<i className="flaticon-right-arrow" /></a>
                                    </div>
                                </div>
                                <div className="row gx-5">
                                    <div className="col-xl-7">
                                        
                                        <div className="scrollscreen">
                                            <div className="news-card-five">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/news-9.webp" alt="Image" />
                                                    <a href="business.html" className="news-cat">Lifestyle</a>
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Good Day To Take A Photo With Your Favorite
                                                        Style</a></h3>
                                                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying
                                                        print, graphic or desi…</p>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                                            22, 2024</a></li>
                                                        <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="news-card-five">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/news-10.webp" alt="Image" />
                                                    <a href="business.html" className="news-cat">Fashion</a>
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">I Turned My Home Into A Fortress of
                                                        Surveillance</a></h3>
                                                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying
                                                        print, graphic or desi…</p>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                                            15, 2024</a></li>
                                                        <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="news-card-five">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/news-11.webp" alt="Image" />
                                                    <a href="business.html" className="news-cat">Science</a>
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Man Wearing Black Pullover Hoodie To Smoke
                                                        Light In</a></h3>
                                                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying
                                                        print, graphic or desi…</p>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                                            17, 2024</a></li>
                                                        <li><i className="fi fi-rr-clock-three" />8 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="news-card-five">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/news-12.webp" alt="Image" />
                                                    <a href="business.html" className="news-cat">Photography</a>
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Recovery And Cleanup In Florida After
                                                        Hurricane Ian</a></h3>
                                                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying
                                                        print, graphic or desi…</p>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                                            12, 2024</a></li>
                                                        <li><i className="fi fi-rr-clock-three" />13 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="news-card-five">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/news-13.webp" alt="Image" />
                                                    <a href="business.html" className="news-cat">Business</a>
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Apex Legends Season 11 Starting From August,
                                                        2024</a></h3>
                                                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying
                                                        print, graphic or desi…</p>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                                            07, 2024</a></li>
                                                        <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="news-card-five">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/news-14.webp" alt="Image" />
                                                    <a href="business.html" className="news-cat">Travel</a>
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">Creative Photography Ideas From Smart
                                                        Devices</a></h3>
                                                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying
                                                        print, graphic or desi…</p>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                                            05, 2024</a></li>
                                                        <li><i className="fi fi-rr-clock-three" />11 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="news-card-five">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/news-15.webp" alt="Image" />
                                                    <a href="business.html" className="news-cat">Travel</a>
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">6 Romantic Places You Want To Visit With
                                                        Your Partner</a></h3>
                                                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying
                                                        print, graphic or desi…</p>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                                            03, 2024</a></li>
                                                        <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="news-card-five">
                                                <div className="news-card-img">
                                                    <img src="assets/img/news/news-16.webp" alt="Image" />
                                                    <a href="business.html" className="news-cat">Fashion</a>
                                                </div>
                                                <div className="news-card-info">
                                                    <h3><a href="business-details.html">7 Steps To Get Professional Facial Results
                                                        At Home</a></h3>
                                                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying
                                                        print, graphic or desi…</p>
                                                    <ul className="news-metainfo list-style">
                                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                                            02, 2024</a></li>
                                                        <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5">
                                        <div className="news-card-two">
                                            <div className="news-card-img">
                                                <img src="assets/img/news/news-17.webp" alt="Image" />
                                                <a href="business.html" className="news-cat">Technology</a>
                                            </div>
                                            <div className="news-card-info">
                                                <h3><a href="business-details.html">Elijah James: The Nashville Photographer Shares
                                                    Her Unique Journey</a></h3>
                                                <ul className="news-metainfo list-style">
                                                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 25,
                                                        2024</a></li>
                                                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="news-card-three">
                                            <div className="news-card-img">
                                                <img src="assets/img/news/news-18.webp" alt="Image" />
                                            </div>
                                            <div className="news-card-info">
                                                <a href="business.html" className="news-cat">Travel</a>
                                                <h3><a href="business-details.html">A Complimentary Day At Mandarin The Oriental</a>
                                                </h3>
                                                <ul className="news-metainfo list-style">
                                                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 23,
                                                        2024</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="news-card-three">
                                            <div className="news-card-img">
                                                <img src="assets/img/news/news-19.webp" alt="Image" />
                                            </div>
                                            <div className="news-card-info">
                                                <a href="business.html" className="news-cat">Business</a>
                                                <h3><a href="business-details.html">First prototype Flight Using Kinetic Launch
                                                    System</a></h3>
                                                <ul className="news-metainfo list-style">
                                                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 22,
                                                        2024</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar">
                                <div className="sidebar-widget">
                                    <h3 className="sidebar-widget-title">Explore Topics</h3>
                                    <ul className="category-widget list-style">
                                        <li><a href="business.html"><i className="flaticon-right-arrow" />Celebration
                                            <span>(6)</span></a></li>
                                        <li><a href="business.html"><i className="flaticon-right-arrow" />Culture<span>(3)</span></a>
                                        </li>
                                        <li><a href="business.html"><i className="flaticon-right-arrow" />Fashion<span>(2)</span></a>
                                        </li>
                                        <li><a href="business.html"><i className="flaticon-right-arrow" />Inspiration<span>(8)</span></a></li>
                                        <li><a href="business.html"><i className="flaticon-right-arrow" />Lifestyle<span>(6)</span></a></li>
                                        <li><a href="business.html"><i className="flaticon-right-arrow" />Politics<span>(2)</span></a>
                                        </li>
                                        <li><a href="business.html"><i className="flaticon-right-arrow" />Trending<span>(4)</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-widget">
                                    <h3 className="sidebar-widget-title">Celebration</h3>
                                    <div className="featured-widget">
                                    <Swiper
      modules={[Navigation,Autoplay]}
      navigation={{
        nextEl: '.featured-next',
        prevEl: '.featured-prev',
      }}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
    }}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="news-card-one">
          <div className="news-card-img">
            <img src="assets/img/news/news-thumb-1.webp" alt="How Youth Viral Diseases May The Year 2023" />
          </div>
          <div className="news-card-info">
            <h3><a href="business-details.html">How Youth Viral Diseases May The Year 2023</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 24, 2024</a></li>
            </ul>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="news-card-one">
          <div className="news-card-img">
            <img src="assets/img/news/news-thumb-2.webp" alt="Nintendo Switch Online’s Next Wave of N64 Games" />
          </div>
          <div className="news-card-info">
            <h3><a href="business-details.html">Nintendo Switch Online’s Next Wave of N64 Games</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 22, 2024</a></li>
            </ul>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="news-card-one">
          <div className="news-card-img">
            <img src="assets/img/news/news-thumb-3.webp" alt="5 things We Know About GTA Definitive Edition" />
          </div>
          <div className="news-card-info">
            <h3><a href="business-details.html">5 things We Know About GTA Definitive Edition</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 14, 2024</a></li>
            </ul>
          </div>
        </div>
      </SwiperSlide>

      {/* Swiper navigation buttons */}
      <div className="featured-prev"><i className="flaticon-left-arrow" /></div>
      <div className="featured-next"><i className="flaticon-right-arrow" /></div>
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

export default HomeLatestBlog