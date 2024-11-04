import React from 'react'

const Shop = () => {
    return (
        <>
            {/*<< Breadcrumb Section Start >>*/}
            <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("../public/assets/img/banner/breadcrumb.jpg")' }}>
                <div className="container">
                    <div className="page-heading center">
                        <h1>shop page</h1>
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
                                shop page
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                {/* Food Catagory Section Start */}
                <section className="food-category-section fix section-padding">
                    <div className="container">
                        <div className="woocommerce-notices-wrapper">
                            <div className="product-showing">
                                <h5><a href="shop.html"><span><img src="../public/assets/img/filter.png" alt="img" /></span> Filtering</a></h5>
                                <h5>Showing <span>1–12</span> of 27 results</h5>
                            </div>
                            <div className="form-clt">
                                <h6>Sort by: <a href="shop.html"><i className="fal fa-sort-alt" /></a></h6>
                                <div className="nice-select" tabIndex={0}>
                                    <span className="current">
                                        Price
                                    </span>
                                    <ul className="list">
                                        <li data-value={1} className="option selected">
                                            Price
                                        </li>
                                        <li data-value={1} className="option">
                                            Price
                                        </li>
                                        <li data-value={1} className="option">
                                            Price
                                        </li>
                                        <li data-value={1} className="option">
                                            Price
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon">
                                    <a href="shop-right-sidebar.html"><i className="fas fa-th" /></a>
                                </div>
                                <div className="icon-2">
                                    <a href="shop-list.html"><i className="fas fa-list" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/beef-ruti.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">ruti with beef slice</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="catagory-product-card-2 active shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/burger-2.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">Whopper Burger King</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/pasta-2.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">Chiness pasta</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/pizza-3.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">delicious burger</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/main-food-2.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">fast food combo</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/ruti.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">ruti with chiken</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/grilled-2.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">grilled chiken</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/delicious-burger.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">delicious burger</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/pasta-3.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">ruti with beef slice</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/french-fry-3.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">Whopper Burger King</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/fried-chicken-2.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">Chiness pasta</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart" /></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="../public/assets/img/food/french-fry-4.png" alt="product-img" />
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket" />Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">delicious burger</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star" />
                                            <span className="fas fa-star text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap mt-5 text-center wow fadeInUp" data-wow-delay=".4s">
                            <ul>
                                <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-left" /></a></li>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">4</a></li>
                                <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-right" /></a></li>
                            </ul>
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
                                <span className="theme-color-3 wow fadeInUp">crispy, every bite taste</span>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                    30 minutes fast <br />
                                    <span className="theme-color-3">delivery</span> challage
                                </h2>
                            </div>
                            <a href="shop-single.html" className="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
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

export default Shop