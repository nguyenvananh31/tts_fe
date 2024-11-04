import React from 'react'

const NewDetail = () => {
    return (
        <>
            {/*<< Breadcrumb Section Start >>*/}
            <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("../public/assets/img/banner/breadcrumb.jpg")' }}>
                <div className="container">
                    <div className="page-heading center">
                        <h1>blog single</h1>
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
                                blog single
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                {/*<< Blog Wrapper Here >>*/}
                <section className="blog-wrapper news-wrapper section-padding section-bg">
                    <div className="container">
                        <div className="news-area">
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="blog-post-details border-wrap mt-0">
                                        <div className="single-blog-post post-details mt-0">
                                            <div className="post-content pt-0">
                                                <h2 className="mt-0">QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS</h2>
                                                <div className="post-meta mt-3">
                                                    <span><i className="fal fa-user" />Shikhon .Ha</span>
                                                    <span><i className="fal fa-comments" />15 Comments</span>
                                                    <span><i className="fal fa-calendar-alt" />4th February 2024</span>
                                                </div>
                                                <p>
                                                    There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi
                                                    believable. If you are going to use a passage of Lorem Ipsum cibo mundi ea duo donec imperdiet eturpis varius per a augue magna hac.
                                                    dolor sit amet, teration in some form, by injected humour, or randomised words which don't look ev
                                                </p>
                                                <p>When Food is a Love Language Food is a powerful way to show love. That's especially true in many Asian American and Pacific Islander (AAPI) cultures, where it's more common to show care through actions rather than words—and especially through food.
                                                </p>
                                                <img src="../public/assets/img/news/post-4.jpg" alt="blog__img" className="single-post-image" />
                                                <h4>The people who give you their food give you their heart</h4>
                                                <p>This shortage is being seen in both the airline and the cargo industries. With such a small pool of applicants to choose from, these two sectors are battling to get the most qualified available candidates. Many pilots are increasingly being wooed to get behind the controls of passenger planes over cargo flights—frankly, it’s tough to compete with jobs perks like fixed schedules and free flights for your family across the world.</p>
                                                <blockquote>
                                                    Your time is limited, so don’t waste it living someone else’s life.
                                                    Don’t be trapped by dogma – which is living with the results
                                                </blockquote>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.</p>
                                                <ul className="checked-list mb-4">
                                                    <li>Cooking is love made visible</li>
                                                    <li>We’re an open book</li>
                                                    <li>100% goes to the field</li>
                                                    <li>Received the highest grades</li>
                                                </ul>
                                                <h5>People who love to eat are always the best people</h5>
                                                <p>Just as we’ve found with the truck driver shortage, the impetus behind skilled labor leaving is many-fold. Demographics play a large role—a massive amount of pilots are expected to hang up their hats in the next few years as they reach the mandatory commercial pilot retirement age of 65. And there’s no large group of applicants sitting waiting to replace them.This is likely because it’s becoming considerably more difficult to obtain a pilot license than it was ten years ago.</p>
                                                <img className="alignleft" src="../public/assets/img/news/post-inner.jpg" alt="blog__img" />
                                                <p>This is a constantly updated list of hand-curated food quotes from popular chefs, cooks, and quotes from notable writers. Feel free to share these food quotes on Pinterest, Facebook, Twitter, Instagram, etc.</p>
                                                <p>When Food is a Love Language Food is a powerful way to show love. That's especially true in many Asian American and Pacific Islander (AAPI) cultures, where it's more common to show care through actions rather than words—and especially through food. I watch cooking change the cook, just as it transforms the food</p>
                                            </div>
                                        </div>
                                        <div className="row tag-share-wrap">
                                            <div className="col-lg-8 col-12">
                                                <h4>Releted Tags</h4>
                                                <div className="tagcloud">
                                                    <a href="news-details.html">Design</a>
                                                    <a href="news-details.html">apps</a>
                                                    <a href="news-details.html">data</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                                <h4>Social Share</h4>
                                                <div className="social-share">
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* comments section wrap start */}
                                        <div className="comments-section-wrap pt-40">
                                            <div className="comments-heading">
                                                <h3>03 Comments</h3>
                                            </div>
                                            <ul className="comments-item-list">
                                                <li className="single-comment-item">
                                                    <div className="author-img">
                                                        <img src="../public/assets/img/news/author_img2.jpg" alt="img" />
                                                    </div>
                                                    <div className="author-info-comment">
                                                        <div className="info">
                                                            <h5><a href="#">Rosalina Kelian</a></h5>
                                                            <span>19th May 2024</span>
                                                            <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply" />Reply</a>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud  laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-comment-item">
                                                    <div className="author-img">
                                                        <img src="../public/assets/img/news/author_img3.jpg" alt="img" />
                                                    </div>
                                                    <div className="author-info-comment">
                                                        <div className="info">
                                                            <h5><a href="#">Arista Williamson</a></h5>
                                                            <span>21th Feb 2024</span>
                                                            <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply" />Reply</a>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea commodo consequat.</p>
                                                        </div>
                                                    </div>
                                                    <ul className="replay-comment">
                                                        <li className="single-comment-item">
                                                            <div className="author-img">
                                                                <img src="../public/assets/img/news/author_img4.jpg" alt="img" />
                                                            </div>
                                                            <div className="author-info-comment">
                                                                <div className="info">
                                                                    <h5><a href="#">Salman Ahmed</a></h5>
                                                                    <span>29th Jan 2021</span>
                                                                    <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply" />Reply</a>
                                                                </div>
                                                                <div className="comment-text">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="comment-form-wrap mt-40">
                                            <h3>Post Comment</h3>
                                            <form action="#" className="comment-form">
                                                <div className="single-form-input">
                                                    <textarea placeholder="Type your comments...." defaultValue={""} />
                                                </div>
                                                <div className="single-form-input">
                                                    <input type="text" placeholder="Type your name...." />
                                                </div>
                                                <div className="single-form-input">
                                                    <input type="email" placeholder="Type your email...." />
                                                </div>
                                                <div className="single-form-input">
                                                    <input type="text" placeholder="Type your website...." />
                                                </div>
                                                <button className="theme-btn center" type="submit">
                                                    <i className="fal fa-comments" />Post Comment
                                                </button>
                                            </form>
                                        </div>
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
                                                    <div className="thumb bg-cover" style={{ backgroundImage: 'url("../public/assets/img/news/pp1.jpg")' }} />
                                                    <div className="post-content">
                                                        <h5><a href="news-details.html">Budget Issues Force The Our To Become</a></h5>
                                                        <div className="post-date">
                                                            <i className="far fa-calendar-alt" />24th March 2024
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post-item">
                                                    <div className="thumb bg-cover" style={{ backgroundImage: 'url("../public/assets/img/news/pp2.jpg")' }} />
                                                    <div className="post-content">
                                                        <h5><a href="news-details.html">The Best Products That Shape Fashion</a></h5>
                                                        <div className="post-date">
                                                            <i className="far fa-calendar-alt" />25th March 2024
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-post-item">
                                                    <div className="thumb bg-cover" style={{ backgroundImage: 'url("../public/assets/img/news/pp3.jpg")' }} />
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
                <section className="main-cta-banner-2 section-padding bg-cover" style={{ backgroundImage: 'url("../public/assets/img/banner/main-cta-bg-2.jpg")' }}>
                    <div className="tomato-shape-left float-bob-y">
                        <img src="../public/assets/img/tomato.png" alt="shape-img" />
                    </div>
                    <div className="chili-shape-right float-bob-y">
                        <img src="../public/assets/img/chilli.png" alt="shape-img" />
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
                                <img src="../public/assets/img/delivery-man-2.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}

export default NewDetail