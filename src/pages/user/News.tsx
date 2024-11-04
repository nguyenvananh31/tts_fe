import React from 'react'

const News = () => {
    return (
        <>
            <div>
                {/*<< Breadcrumb Section Start >>*/}
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/breadcrumb.jpg")' }}>
                    <div className="container">
                        <div className="page-heading center">
                            <h1>blog page</h1>
                            <ul className="breadcrumb-items">
                                <li>
                                    <a href="index.html">
                                        Home Page
                                    </a>
                                </li>
                                <li>
                                    <i className="far fa-chevron-right" />
                                </li>
                                <li>
                                    blog page
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*<< Blog Wrapper Here >>*/}
                <section className="blog-wrapper news-wrapper section-padding section-bg">
                    <div className="container">
                        <div className="news-area">
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="blog-posts">
                                        <div className="single-blog-post">
                                            <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/public/assets/img/news/post-1.jpg")' }} />
                                            <div className="post-content">
                                                <div className="post-meta">
                                                    <span><i className="fal fa-user" />Shikhon .Ha</span>
                                                    <span><i className="fal fa-comments" />35 Comments</span>
                                                    <span><i className="fal fa-calendar-alt" />24th March 2024</span>
                                                </div>
                                                <h2><a href="news-details.html">QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS</a></h2>
                                                <p>
                                                    There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi
                                                    believable. If you are going to use a passage of Lorem Ipsum cibo mundi ea duo donec imperdiet eturpis varius per a augue magna hac.
                                                    dolor sit amet, teration in some form, by injected humour, or randomised words which don't look ev
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center mt-4">
                                                    <div className="post-link">
                                                        <a href="news-details.html"><i className="fas fa-arrow-right" /> Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-blog-post">
                                            <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/public/assets/img/news/post-2.jpg")' }} />
                                            <div className="post-content">
                                                <div className="post-meta">
                                                    <span><i className="fal fa-user" />Modina Theme</span>
                                                    <span><i className="fal fa-comments" />5 Comments</span>
                                                    <span><i className="fal fa-calendar-alt" />4th February 2024</span>
                                                </div>
                                                <h2><a href="news-details.html">QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS</a></h2>
                                                <p>
                                                    There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi
                                                    believable. If you are going to use a passage of Lorem Ipsum cibo mundi ea duo donec imperdiet eturpis varius per a augue magna hac.
                                                    dolor sit amet, teration in some form, by injected humour, or randomised words which don't look ev
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center mt-4">
                                                    <div className="post-link">
                                                        <a href="news-details.html"><i className="fas fa-arrow-right" /> Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-blog-post">
                                            <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/public/assets/img/news/post-3.jpg")' }} />
                                            <div className="post-content">
                                                <div className="post-meta">
                                                    <span><i className="fal fa-user" />Shikhon .Ha</span>
                                                    <span><i className="fal fa-comments" />35 Comments</span>
                                                    <span><i className="fal fa-calendar-alt" />24th March 2024</span>
                                                </div>
                                                <h2><a href="news-details.html">QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS</a></h2>
                                                <p>
                                                    There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi
                                                    believable. If you are going to use a passage of Lorem Ipsum cibo mundi ea duo donec imperdiet eturpis varius per a augue magna hac.
                                                    dolor sit amet, teration in some form, by injected humour, or randomised words which don't look ev
                                                </p>
                                                <div className="d-flex justify-content-between align-items-center mt-4">
                                                    <div className="post-link">
                                                        <a href="news-details.html"><i className="fas fa-arrow-right" /> Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-blog-post quote-post format-quote">
                                            <div className="post-content text-white bg-cover">
                                                <div className="quote-content">
                                                    <div className="icon">
                                                        <i className="fas fa-quote-left" />
                                                    </div>
                                                    <div className="quote-text">
                                                        <h2>Good food is the foundation of genuine happiness. Cooking is love made visible</h2>
                                                        <div className="post-meta pt-40 d-inline-block">
                                                            <span><i className="fal fa-comments" />35 Comments</span>
                                                            <span><i className="fal fa-calendar-alt" />24th March 2024</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="page-nav-wrap mt-5 text-center">
                                        <ul>
                                            <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-left" /></a></li>
                                            <li><a className="page-numbers" href="#">01</a></li>
                                            <li><a className="page-numbers" href="#">02</a></li>
                                            <li><a className="page-numbers" href="#">..</a></li>
                                            <li><a className="page-numbers" href="#">10</a></li>
                                            <li><a className="page-numbers" href="#">11</a></li>
                                            <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-right" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="main-sidebar">
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h4>Search</h4>
                                            </div>
                                            <div className="search_widget">
                                                <form action="#">
                                                    <input type="text" placeholder="Search your keyword..." />
                                                    <button type="submit"><i className="fal fa-search" /></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h4>Popular Feeds</h4>
                                            </div>
                                            <div className="popular-posts">
                                                <div className="single-post-item">
                                                    <div className="thumb bg-cover" style={{ backgroundImage: 'url("/public/assets/img/news/pp1.jpg")' }} />
                                                    <div className="post-content">
                                                        <h5><a href="news-details.html">Budget Issues Force The Our To Become</a></h5>
                                                        <div className="post-date">
                                                            <i className="far fa-calendar-alt" />24th March 2024
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post-item">
                                                    <div className="thumb bg-cover" style={{ backgroundImage: 'url("/public/assets/img/news/pp2.jpg")' }} />
                                                    <div className="post-content">
                                                        <h5><a href="news-details.html">The Best Products That Shape Fashion</a></h5>
                                                        <div className="post-date">
                                                            <i className="far fa-calendar-alt" />25th March 2024
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post-item">
                                                    <div className="thumb bg-cover" style={{ backgroundImage: 'url("/public/assets/img/news/pp3.jpg")' }} />
                                                    <div className="post-content">
                                                        <h5><a href="news-details.html">The Best Products That Shape Fashion</a></h5>
                                                        <div className="post-date">
                                                            <i className="far fa-calendar-alt" />26th March 2024
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h4>Categories</h4>
                                            </div>
                                            <div className="widget_categories">
                                                <ul>
                                                    <li><a href="news.html"><i className="flaticon-burger" />burger <span>23</span></a></li>
                                                    <li><a href="news.html"><i className="flaticon-chicken" />Fried Chiken <span>24</span></a></li>
                                                    <li><a href="news.html"><i className="flaticon-french-fries" />French Fries <span>11</span></a></li>
                                                    <li><a href="news.html"><i className="flaticon-pizza" />Hot Pizzas <span>05</span></a></li>
                                                    <li><a href="news.html"><i className="flaticon-sandwich" />Sandwich <span>06</span></a></li>
                                                    <li><a href="news.html"><i className="flaticon-bread" />Bread <span>10</span></a></li>
                                                    <li><a href="news.html"><i className="flaticon-rice" />fried rice <span>13</span></a></li>
                                                    <li><a href="news.html"><i className="flaticon-hotdog" />hot dog <span>07</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h4>Never Miss News</h4>
                                            </div>
                                            <div className="social-link">
                                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                                <a href="#"><i className="fab fa-twitter" /></a>
                                                <a href="#"><i className="fab fa-instagram" /></a>
                                                <a href="#"><i className="fab fa-linkedin-in" /></a>
                                                <a href="#"><i className="fab fa-youtube" /></a>
                                            </div>
                                        </div>
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h4>Popular Tags</h4>
                                            </div>
                                            <div className="tagcloud">
                                                <a href="news.html">burger</a>
                                                <a href="news-details.html">hot dog</a>
                                                <a href="news-details.html">french fry</a>
                                                <a href="news-details.html">chiken</a>
                                                <a href="news-details.html">pasta</a>
                                                <a href="news-details.html">Sandwich</a>
                                                <a href="news-details.html">landing</a>
                                                <a href="news-details.html">fast food</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Main Cta Banner Section Start */}
                <section className="main-cta-banner-2 section-padding bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/main-cta-bg-2.jpg")' }}>
                    <div className="tomato-shape-left float-bob-y">
                        <img src="/public/assets/img/tomato.png" alt="shape-img" />
                    </div>
                    <div className="chili-shape-right float-bob-y">
                        <img src="/public/assets/img/chilli.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
                            <div className="section-title mb-0">
                                <span className="theme-color-3">crispy, every bite taste</span>
                                <h2 className="text-white">
                                    30 minutes fast <br />
                                    <span className="theme-color-3">delivery</span> challage
                                </h2>
                            </div>
                            <a href="shop-single.html" className="theme-btn bg-white">
                                <span className="button-content-wrapper d-flex align-items-center">
                                    <span className="button-icon"><i className="flaticon-delivery" /></span>
                                    <span className="button-text">order now</span>
                                </span>
                            </a>
                            <div className="delivery-man">
                                <img src="/public/assets/img/delivery-man-2.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default News