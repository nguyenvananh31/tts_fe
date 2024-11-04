import React from 'react'

const Reservation = () => {
    return (
        <>
            <div>
                {/*<< Breadcrumb Section Start >>*/}
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("../public/assets/img/banner/breadcrumb.jpg")' }}>
                    <div className="container">
                        <div className="page-heading center">
                            <h1>reservation</h1>
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
                                    reservation
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Booking Section Start */}
                <section className="booking-section fix section-bg section-padding mt-0">
                    <div className="container">
                        <div className="booking-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="booking-contact mb-0 style-2 bg-cover" style={{ backgroundImage: 'url("../public/assets/img/shape/booking-shape.png")' }}>
                                        <h3 className="text-center mb-4 text-white wow fadeInUp">create an reservation</h3>
                                        <div className="booking-items">
                                            <div className="row g-4">
                                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                    <div className="form-clt">
                                                        <div className="nice-select" tabIndex={0}>
                                                            <span className="current">
                                                                Clients Name
                                                            </span>
                                                            <ul className="list">
                                                                <li data-value={1} className="option selected">
                                                                    Lucas Henry
                                                                </li>
                                                                <li data-value={1} className="option">
                                                                    Mateo Jack
                                                                </li>
                                                                <li data-value={1} className="option">
                                                                    Michael Asher
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                    <div className="form-clt">
                                                        <div className="nice-select" tabIndex={0}>
                                                            <span className="current">
                                                                no of person
                                                            </span>
                                                            <ul className="list">
                                                                <li data-value={1} className="option selected">
                                                                    1 People
                                                                </li>
                                                                <li data-value={1} className="option">
                                                                    2 People
                                                                </li>
                                                                <li data-value={1} className="option">
                                                                    3 People
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                    <div className="form-clt">
                                                        <input type="text" name="number" id="number" placeholder="phone number" />
                                                        <div className="icon">
                                                            <i className="fas fa-phone" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                    <div className="form-clt">
                                                        <input type="date" id="calendar" name="calendar" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                    <div className="form-clt">
                                                        <input type="text" name="phone" id="phone" placeholder="phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                    <div className="form-clt">
                                                        <input type="text" name="email" id="email" placeholder="Email Address" />
                                                        <div className="icon">
                                                            <i className="fal fa-envelope" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                                    <div className="form-clt">
                                                        <a href="reservation.html" className="theme-btn bg-yellow">
                                                            booking now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonial Section Start */}
                <section className="testimonial-section fix section-padding">
                    <div className="burger-shape">
                        <img src="../public/assets/img/shape/burger-shape-3.png" alt="burger-shape" />
                    </div>
                    <div className="fry-shape">
                        <img src="../public/assets/img/shape/fry-shape-2.png" alt="burger-shape" />
                    </div>
                    <div className="pizza-shape">
                        <img src="../public/assets/img/shape/pizzashape.png" alt="burger-shape" />
                    </div>
                    <div className="container">
                        <div className="testimonial-wrapper style-2">
                            <div className="testimonial-items text-center">
                                <div className="swiper testimonial-content-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial-content">
                                                <div className="client-info">
                                                    <h4>Piter Bowman</h4>
                                                    <h5>Business CEO &amp; co founder</h5>
                                                </div>
                                                <h3>
                                                    “Thank you for dinner last night. It was amazing!! I have
                                                    say it’s the best meal I have had in quite some time.
                                                    will definitely be seeing more eating next year.”
                                                </h3>
                                                <div className="star">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-content">
                                                <div className="client-info">
                                                    <h4>Piter Bowman</h4>
                                                    <h5>Business CEO &amp; co founder</h5>
                                                </div>
                                                <h3>
                                                    “Thank you for dinner last night. It was amazing!! I have
                                                    say it’s the best meal I have had in quite some time.
                                                    will definitely be seeing more eating next year.”
                                                </h3>
                                                <div className="star">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-content">
                                                <div className="client-info">
                                                    <h4>Piter Bowman</h4>
                                                    <h5>Business CEO &amp; co founder</h5>
                                                </div>
                                                <h3>
                                                    “Thank you for dinner last night. It was amazing!! I have
                                                    say it’s the best meal I have had in quite some time.
                                                    will definitely be seeing more eating next year.”
                                                </h3>
                                                <div className="star">
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                    <span className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper testimonial-image-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="client-image-item">
                                                <div className="client-img bg-cover" style={{ backgroundImage: 'url("../public/assets/img/client/01.jpg")' }} />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="client-image-item">
                                                <div className="client-img bg-cover" style={{ backgroundImage: 'url("../public/assets/img/client/02.jpg")' }} />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="client-image-item">
                                                <div className="client-img bg-cover" style={{ backgroundImage: 'url("../public/assets/img/client/03.jpg")' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Marque Section Start */}
                <div className="marque-section fix section-padding section-bg">
                    <div className="marquee-wrapper text-slider mt-0 style-responsive-2">
                        <div className="marquee-inner to-left">
                            <ul className="marqee-list d-flex">
                                <li className="marquee-item">
                                    <span className="text-slider text-color">populer</span><span className="text-slider" /> <span className="text-slider text-color">dishes</span>
                                    <span className="text-slider"><img src="../public/assets/img/icon/burger.png" alt="icon-img" /></span> <span className="text-slider" /> <span className="text-slider text-color-2">delicious</span>
                                    <span className="text-slider text-color-2">food</span> <img src="../public/assets/img/icon/pizza.png" alt="icon-img" /> <span className="text-slider" /> <span className="text-slider text-color">populer</span>
                                    <span className="text-slider text-color">dishes</span> <span className="text-slider" /><span className="text-slider"><img src="../public/assets/img/icon/burger.png" alt="icon-img" /></span> <span className="text-slider" /> <span className="text-slider text-color-2">delicious</span>
                                    <span className="text-slider text-color">populer</span><span className="text-slider" /> <span className="text-slider text-color">dishes</span>
                                    <span className="text-slider"><img src="../public/assets/img/icon/burger.png" alt="icon-img" /></span> <span className="text-slider" /> <span className="text-slider text-color-2">delicious</span>
                                    <span className="text-slider text-color-2">food</span> <img src="assets/img/icon/pizza.png" alt="icon-img" /> <span className="text-slider" /> <span className="text-slider text-color">populer</span>
                                    <span className="text-slider text-color">dishes</span> <span className="text-slider" /><span className="text-slider"><img src="../public/assets/img/icon/burger.png" alt="icon-img" /></span> <span className="text-slider" /> <span className="text-slider text-color-2">delicious</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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

export default Reservation