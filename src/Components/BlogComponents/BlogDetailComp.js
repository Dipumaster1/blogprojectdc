import React from 'react'

const BlogDetailComp = () => {
return (
<div className="news-details-wrap ptb-100">
    <div className="container">
        <div className="row gx-55 gx-5">
            <div className="col-lg-8">
                <article>
                    <div className="news-img">
                        <img src="assets/img/news/single-news-3.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Business</a>
                    </div>
                    <ul className="news-metainfo list-style">
                        <li className="author">
                            <span className="author-img">
                                <img src="assets/img/author/author-thumb-1.webp" alt="Image" />
                            </span>
                            <a href="author.html">James William</a>
                        </li>
                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 03, 2024</a></li>
                        <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                    <div className="news-para">
                        <h1>Power and Influence: An Analysis Of The Political Landscape</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's stand dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specim book. It has survived not
                            only five <strong>gravida</strong> but also the leap into electronic typesetting,
                            remaining essentially unchange was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum <a href="index.html">Ipsum</a> and more recently with
                            desktop publishing software like Aldus Page maker including versions of Lorem Ipsum.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't
                            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="news-img">
                                <img src="assets/img/news/single-news-5.webp" alt="Image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="news-img">
                                <img src="assets/img/news/single-news-6.webp" alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div className="news-para">
                        <h5>Mastering Digital Transformation: How to Stay Ahead in a Rapidly Changing Business
                            Landscape</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't
                            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <h5>Unordered &amp; Ordered Lists</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form by injected humour, or randomised words which don't
                            look even slightly believable.</p>
                        <ul className="content-feature-list list-style mt-15">
                            <li>
                                <span><i className="flaticon-arrow-right" /></span>
                                It is a long established fact that a reader will be distracted by the readable
                                content.
                            </li>
                            <li>
                                <span><i className="flaticon-arrow-right" /></span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </li>
                            <li>
                                <span><i className="flaticon-arrow-right" /></span>
                                It was popularised in the 1960s with the release of Letraset sheets
                            </li>
                            <li>
                                <span><i className="flaticon-arrow-right" /></span>
                                Publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </li>
                            <li>
                                <span><i className="flaticon-arrow-right" /></span>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined.
                            </li>
                        </ul>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't
                            look even slightly believable. If you are going to use a <strong>adipisicing</strong> of
                            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle
                            of text.</p>
                    </div>
                    <blockquote className="wp-block-quote">
                        <i className="fi fi-rr-quote-right" />
                        <p>“ People find waiting more tolerable when they can see the work being done on their
                            behalf ”</p>
                        <h6>William Benjamin</h6>
                    </blockquote>
                    <div className="news-para">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's stand dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specim book. It has survived not
                            only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchange was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <ol>
                            <li>Lacus sed viverra tellus in hac habitasse platea dictumst.</li>
                            <li>Gravida neque convallis a <strong>cras</strong> semper auctor neque vitae.</li>
                            <li>Lacus sed turpis tincidunt id aliquet risus feugiat in.</li>
                            <li>Risus commodo viverra manas accumsan lacus vel facilisis</li>
                        </ol>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa reprehenderit ad
                            ipsa porro obcaecati accusantium tempore officiis tenetur est!</p>
                    </div>
                </article>
                <div className="post-pagination">
                    <a className="prev-post" href="business-details.html">
                        <span>PREVIOUS</span>
                        <h6>The Future Of Business: Predictions And Trends To Watch</h6>
                    </a>
                    <a className="next-post" href="business-details.html">
                        <span>NEXT</span>
                        <h6>From Start-up To Scale-up: Navigating Growth In Your Business</h6>
                    </a>
                </div>
                <h3 className="comment-box-title">3 Comments</h3>
                <div className="comment-item-wrap">
                    <div className="comment-item">
                        <div className="comment-author-img">
                            <img src="assets/img/author/author-thumb-1.webp" alt="Image" />
                        </div>
                        <div className="comment-author-wrap">
                            <div className="comment-author-info">
                                <div className="row align-items-start">
                                    <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                        <div className="comment-author-name">
                                            <h5>Killian Mider</h5>
                                            <span className="comment-date">Jul 22, 2024 | 7:10 PM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                                        <a href="#cmt-form" className="reply-btn">Reply</a>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                magna aliquyam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-item reply">
                        <div className="comment-author-img">
                            <img src="assets/img/author/author-thumb-2.webp" alt="Image" />
                        </div>
                        <div className="comment-author-wrap">
                            <div className="comment-author-info">
                                <div className="row align-items-start">
                                    <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                        <div className="comment-author-name">
                                            <h5>Everly Leah </h5>
                                            <span className="comment-date">Jul 23, 2024 | 7:10 PM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                                        <a href="#cmt-form" className="reply-btn">Reply</a>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                magna aliquyam erat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-item">
                        <div className="comment-author-img">
                            <img src="assets/img/author/author-thumb-3.webp" alt="Image" />
                        </div>
                        <div className="comment-author-wrap">
                            <div className="comment-author-info">
                                <div className="row align-items-start">
                                    <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                        <div className="comment-author-name">
                                            <h5>Michel Ohio</h5>
                                            <span className="comment-date">Jun 14, 2024 | 7:10 PM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                                        <a href="#cmt-form" className="reply-btn">Reply</a>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                                        <div className="comment-text">
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                magna aliquyam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cmt-form">
                    <div className="mb-30">
                        <h3 className="comment-box-title">Leave A Comment</h3>
                        <p>Your email address will not be published. Required fields are marked.</p>
                    </div>
                    <form action="#" className="comment-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" required placeholder="Name*" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" required placeholder="Email Address*" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <textarea name="messages" id="messages" cols={30} rows={10} placeholder="Please Enter Your Comment Here" defaultValue={""} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-check checkbox">
                                    <input className="form-check-input" type="checkbox" id="test_2" />
                                    <label className="form-check-label" htmlFor="test_2">
                                        Save my info for the next time I commnet.
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <button className="btn-two">Post A Comment<i className="flaticon-right-arrow" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="sidebar">
                    <div className="sidebar-widget-two">
                        <form action="#" className="search-box-widget">
                            <input type="search" placeholder="Search" />
                            <button type="submit">
                                <i className="fi fi-rr-search" />
                            </button>
                        </form>
                    </div>
                    <div className="sidebar-widget">
                        <h3 className="sidebar-widget-title">Categories</h3>
                        <ul className="category-widget list-style">
                            <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Celebration <span>(6)</span></a></li>
                            <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Culture<span>(3)</span></a></li>
                            <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Fashion<span>(2)</span></a></li>
                            <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Inspiration<span>(8)</span></a></li>
                            <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Lifestyle<span>(6)</span></a></li>
                            <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Politics<span>(2)</span></a></li>
                            <li><a href="business.html"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Trending<span>(4)</span></a></li>
                        </ul>
                    </div>
                    <div className="sidebar-widget">
                        <h3 className="sidebar-widget-title">Recent Posts</h3>
                        <div className="pp-post-wrap">
                            <div className="news-card-one">
                                <div className="news-card-img">
                                    <img src="assets/img/news/news-thumb-4.webp" alt="Image" />
                                </div>
                                <div className="news-card-info">
                                    <h3><a href="business-details.html">Bernie Nonummy Pelopai Iatis Eum Litora</a>
                                    </h3>
                                    <ul className="news-metainfo list-style">
                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                            22, 2024</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-card-one">
                                <div className="news-card-img">
                                    <img src="assets/img/news/news-thumb-5.webp" alt="Image" />
                                </div>
                                <div className="news-card-info">
                                    <h3><a href="business-details.html">How Youth Viral Diseases May The Year
                                        2023</a></h3>
                                    <ul className="news-metainfo list-style">
                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                            23, 2024</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-card-one">
                                <div className="news-card-img">
                                    <img src="assets/img/news/news-thumb-6.webp" alt="Image" />
                                </div>
                                <div className="news-card-info">
                                    <h3><a href="business-details.html">Man Wearing Black Pullover Hoodie To
                                        Smoke</a></h3>
                                    <ul className="news-metainfo list-style">
                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                            14, 2024</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-card-one">
                                <div className="news-card-img">
                                    <img src="assets/img/news/news-thumb-7.webp" alt="Image" />
                                </div>
                                <div className="news-card-info">
                                    <h3><a href="business-details.html">First Prototype Flight Using Kinetic Launch
                                        System</a></h3>
                                    <ul className="news-metainfo list-style">
                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                            07, 2024</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-card-one">
                                <div className="news-card-img">
                                    <img src="assets/img/news/news-thumb-8.webp" alt="Image" />
                                </div>
                                <div className="news-card-info">
                                    <h3><a href="business-details.html">Beauty Queens Need Material &amp; Products</a>
                                    </h3>
                                    <ul className="news-metainfo list-style">
                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                            03, 2024</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-card-one">
                                <div className="news-card-img">
                                    <img src="assets/img/news/news-thumb-9.webp" alt="Image" />
                                </div>
                                <div className="news-card-info">
                                    <h3><a href="business-details.html">That Woman Comes From Heaven Look Like
                                        Angel</a></h3>
                                    <ul className="news-metainfo list-style">
                                        <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                                            01, 2024</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-widget">
                        <h3 className="sidebar-widget-title">Popular Tags</h3>
                        <ul className="tag-list list-style">
                            <li><a href="news-by-tags.html">BUSINESS</a></li>
                            <li><a href="news-by-tags.html">FOOD</a></li>
                            <li><a href="news-by-tags.html">SCIENCE</a></li>
                            <li><a href="news-by-tags.html">LIFESTYLE</a></li>
                            <li><a href="news-by-tags.html">SPORTS</a></li>
                            <li><a href="news-by-tags.html">PHOTO</a></li>
                            <li><a href="news-by-tags.html">TECHNOLOGY</a></li>
                            <li><a href="news-by-tags.html">CONTENT</a></li>
                            <li><a href="news-by-tags.html">FEATURED</a></li>
                            <li><a href="news-by-tags.html">AUDIO</a></li>
                            <li><a href="news-by-tags.html">FASHION</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default BlogDetailComp