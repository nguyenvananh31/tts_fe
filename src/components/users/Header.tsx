import React from 'react'

import logo from '../../assets/img/logo/logo.svg'

const Header = () => {
    return (
        <>

            <header className="section-bg">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-wrapper">
                            <ul>
                                <li><span>100%</span> Secure delivery without contacting the courier</li>
                                <li><i className="fas fa-truck" />Track Your Order</li>
                            </ul>
                            <div className="top-right">
                                <div className="search-wrp">
                                    <button><i className="far fa-search" /></button>
                                    <input placeholder="Search" aria-label="Search" />
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-vimeo-v" /></a>
                                    <a href="#"><i className="fab fa-pinterest-p" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className="header-1">
                    <div className="container">
                        <div className="mega-menu-wrapper">
                            <div className="header-main">
                                <div className="logo">
                                    <a href="index.html" className="header-logo">
                                        <img src="/public/assets/img/logo/logo.svg" alt="logo-img" />
                                    </a>
                                </div>
                                <div className="header-left">
                                    <div className="mean__menu-wrapper d-none d-lg-block">
                                        <div className="main-menu">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li className="has-dropdown active">
                                                        <a href="index.html">
                                                            Home Page
                                                            <i className="fas fa-angle-down" />
                                                        </a>
                                                        <ul className="submenu has-homemenu">
                                                            <li className="border-none">
                                                                <div className="row g-4">
                                                                    <div className="col-lg-4 homemenu">
                                                                        <div className="homemenu-thumb">
                                                                            <img src="/public//assets/img/header/home-1.jpg" alt="img" />
                                                                            <div className="demo-button">
                                                                                <a href="index.html" className="theme-btn">View
                                                                                    Demo</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index.html">Home 01</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4  homemenu">
                                                                        <div className="homemenu-thumb mb-15">
                                                                            <img src="/public//assets/img/header/home-2.jpg" alt="img" />
                                                                            <div className="demo-button">
                                                                                <a href="index-2.html" className="theme-btn">View
                                                                                    Demo</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-2.html">Home 02</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 homemenu">
                                                                        <div className="homemenu-thumb mb-15">
                                                                            <img src="/public//assets/img/header/home-3.jpg" alt="img" />
                                                                            <div className="demo-button">
                                                                                <a href="index-3.html" className="theme-btn">View
                                                                                    Demo</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-3.html">Home 03</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 homemenu">
                                                                        <div className="homemenu-thumb">
                                                                            <img src="/public//assets/img/header/home-4.jpg" alt="img" />
                                                                            <div className="demo-button">
                                                                                <a href="index-4.html" className="theme-btn">View
                                                                                    Demo</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-4.html">Home 04</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4  homemenu">
                                                                        <div className="homemenu-thumb mb-15">
                                                                            <img src="/public//assets/img/header/home-5.jpg" alt="img" />
                                                                            <div className="demo-button">
                                                                                <a href="index-5.html" className="theme-btn">View
                                                                                    Demo</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-5.html">Home 05</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 homemenu">
                                                                        <div className="homemenu-thumb mb-15">
                                                                            <img src="/public/assets/img/header/home-6.jpg" alt="img" />
                                                                            <div className="demo-button">
                                                                                <a href="index-6.html" className="theme-btn">View
                                                                                    Demo</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="homemenu-content text-center">
                                                                            <h4 className="homemenu-title">
                                                                                <a href="index-6.html">Home 06</a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="shop.html">
                                                            Shop
                                                            <i className="fas fa-angle-down" />
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="shop.html">Shop Grid</a></li>
                                                            <li><a href="shop-list.html">Shop List</a></li>
                                                            <li><a href="shop-left-sidebar.html">Shop Left SideBar</a></li>
                                                            <li><a href="shop-right-sidebar.html">Shop Right SideBar</a></li>
                                                            <li><a href="shop-single.html">Shop Single</a></li>
                                                            <li><a href="shop-single-2.html">Shop Single 2</a></li>
                                                            <li><a href="shop-cart.html">Shop Cart</a></li>
                                                            <li><a href="checkout.html">checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="news.html">
                                                            Blog
                                                            <i className="fas fa-angle-down" />
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="news.html">Blog</a></li>
                                                            <li><a href="news-details.html">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="news.html">
                                                            Pages
                                                            <i className="fas fa-angle-down" />
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="about.html">About Us</a></li>
                                                            <li className="has-dropdown">
                                                                <a href="team.html">
                                                                    Chef Page
                                                                    <i className="fas fa-angle-down" />
                                                                </a>
                                                                <ul className="submenu">
                                                                    <li><a href="team.html">Chef</a></li>
                                                                    <li><a href="team-details.html">Chef Details</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="has-dropdown">
                                                                <a href="food-menu.html">
                                                                    Food Menu
                                                                    <i className="fas fa-angle-down" />
                                                                </a>
                                                                <ul className="submenu">
                                                                    <li><a href="food-menu.html"> Food Menu 01</a></li>
                                                                    <li><a href="food-menu-2.html"> Food Menu 02</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="gallery.html">Gallery</a></li>
                                                            <li><a href="testimonial.html">testimonial</a></li>
                                                            <li><a href="reservation.html">Reservation</a></li>
                                                            <li><a href="faq.html">Faq's</a></li>
                                                            <li><a href="404.html">404 Page</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            {/* for wp */}
                                        </div>
                                    </div>
                                </div>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="menu-cart">
                                        <div className="cart-box">
                                            <ul>
                                                <li>
                                                    <img src="assets/img/shop-food/s2.png" alt="image" />
                                                    <div className="cart-product">
                                                        <a href="#0">grilled chiken</a>
                                                        <span>168$</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li className="border-none">
                                                    <img src="assets/img/shop-food/s3.png" alt="image" />
                                                    <div className="cart-product">
                                                        <a href="#0">grilled chiken</a>
                                                        <span>168$</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-items d-flex align-items-center justify-content-between">
                                                <span>Shopping : $20.00</span>
                                                <span>Total : $168.00</span>
                                            </div>
                                            <div className="cart-button d-flex justify-content-between mb-4">
                                                <a href="shop-cart.html" className="theme-btn">
                                                    View Cart
                                                </a>
                                                <a href="checkout.html" className="theme-btn bg-red-2">
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                        <a href="shop-cart.html" className="cart-icon">
                                            <i className="far fa-shopping-basket" />
                                        </a>
                                    </div>
                                    <div className="header-button">
                                        <a href="contact.html" className="theme-btn bg-red-2">contact us</a>
                                    </div>
                                    <div className="header__hamburger d-xl-block my-auto">
                                        <div className="sidebar__toggle">
                                            <div className="header-bar">
                                                <span />
                                                <span />
                                                <span />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header