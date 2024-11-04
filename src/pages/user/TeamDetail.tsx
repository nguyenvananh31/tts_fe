import React from 'react'

const TeamDetail = () => {
    return (
        <>
            <div>
                {/*<< Breadcrumb Section Start >>*/}
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("../public/assets/img/banner/breadcrumb.jpg")' }}>
                    <div className="container">
                        <div className="page-heading center">
                            <h1>chef Details</h1>
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
                                    chef details
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Team Details Section Start */}
                <section className="team-details-section fix section-padding">
                    <div className="container">
                        <div className="team-details-wrapper">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="team-image bg-cover" style={{ backgroundImage: 'url("../public/assets/img/team/details.jpg")' }} />
                                </div>
                                <div className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="team-details-content">
                                        <div className="star pb-3">
                                            <a href="#"> <i className="fas fa-star" /></a>
                                            <a href="#"><i className="fas fa-star" /></a>
                                            <a href="#"> <i className="fas fa-star" /></a>
                                            <a href="#"><i className="fas fa-star" /></a>
                                            <a href="#"> <i className="fas fa-star" /></a>
                                            <a href="#">(5k)</a>
                                        </div>
                                        <h3>Alextina Ditarson</h3>
                                        <span>General Manager</span>
                                        <p>
                                            On the other hand, we denounce with righteous indignation dislike men who
                                            are so beguiled and demoralized by the charms of pleasure of the moment so
                                            blinded by desire that they cannot foresee the pain and trouble that are
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-vimeo-v" /></a>
                                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                                        </div>
                                        <a href="contact.html" className="theme-btn style-line-height mt-5">contact with me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team Skill Section Start */}
                <section className="team-skill fix section-padding bg-cover" style={{ backgroundImage: 'url("../public/assets/img/banner/main-cta-bg-2.jpg")' }}>
                    <div className="container">
                        <div className="team-skill-wrapper">
                            <div className="row justify-content-between">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="team-skill-content">
                                        <h3>
                                            Welcome to our culinary haven
                                            where each dish is a symphony
                                            of flavors meticulously
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-4 mt-lg-0 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="progress-wrap">
                                        <div className="pro-items">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    cooking chiness
                                                </h6>
                                                <span className="point">
                                                    65%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value" />
                                            </div>
                                        </div>
                                        <div className="pro-items">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    serve managment
                                                </h6>
                                                <span className="point">
                                                    75%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value style-two" />
                                            </div>
                                        </div>
                                        <div className="pro-items">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Human Interacation
                                                </h6>
                                                <span className="point">
                                                    65%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team Reservation Section Start */}
                <section className="team-reservation fix section-padding">
                    <div className="container">
                        <div className="team-reservation-wrapper">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="get-touch-items">
                                        <div className="get-touch-title">
                                            <h2 className="wow fadeInUp">Get in touch</h2>
                                            <p className="wow fadeInUp" data-wow-delay=".3s">
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit mattis <br />
                                                faucibus odio feugiat arc dolor.
                                            </p>
                                        </div>
                                        <div className="contact-items">
                                            <div className="contact-info wow fadeInUp" data-wow-delay=".3s">
                                                <h4>Contact</h4>
                                                <h5><a href="tel:+1718-904-4450">+1718-904-4450</a></h5>
                                            </div>
                                            <div className="contact-info wow fadeInUp" data-wow-delay=".5s">
                                                <h4>Email</h4>
                                                <h5><a href="mailto:info@example.com" className="link">info@example.com</a></h5>
                                            </div>
                                        </div>
                                        <div className="contact-items">
                                            <div className="contact-info wow fadeInUp" data-wow-delay=".3s">
                                                <h4>Address</h4>
                                                <h5>Jackpark, Ghana</h5>
                                            </div>
                                            <div className="contact-info wow fadeInUp" data-wow-delay=".5s">
                                                <h4>Follow</h4>
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
                                <div className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="team-reservation-items">
                                        <div className="reservation-title">
                                            <h3>create an <span>reservation........</span></h3>
                                            <p>
                                                Your email address will not be published. Required fields
                                                are marked *
                                            </p>
                                        </div>
                                        <div className="row g-4">
                                            <div className="col-lg-12">
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
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <input type="text" name="email" id="email" placeholder="Email Address*" />
                                                    <div className="icon">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <input type="date" id="calendar" name="calendar" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
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
                </section>
                {/* Marque Section Start */}
                <div className="marque-section section-padding pt-0">
                    <div className="marquee-wrapper mt-0 text-slider style-responsive">
                        <div className="marquee-inner to-left">
                            <ul className="marqee-list d-flex">
                                <li className="marquee-item">
                                    <span className="text-slider text-color">populer</span><span className="text-slider" /> <span className="text-slider text-color">dishes</span>
                                    <span className="text-slider"><img src="../public/assets/img/star-2.svg" alt="icon-img" /></span> <span className="text-slider" /> <span className="text-slider text-color">delicious</span>
                                    <span className="text-slider text-color">food</span> <img src="../public/assets/img/star-2.svg" alt="icon-img" /> <span className="text-slider" /> <span className="text-slider text-color">populer</span>
                                    <span className="text-slider text-color">dishes</span> <span className="text-slider" /><span className="text-slider"><img src="../public/assets/img/star-2.svg" alt="icon-img" /></span> <span className="text-slider" /> <span className="text-slider text-color">delicious</span>
                                    <span className="text-slider text-color">populer</span><span className="text-slider" /> <span className="text-slider text-color">dishes</span>
                                    <span className="text-slider"><img src="../public/assets/img/star-2.svg" alt="icon-img" /></span> <span className="text-slider" /> <span className="text-slider text-color">delicious</span>
                                    <span className="text-slider text-color">food</span> <img src="../public/assets/img/star-2.svg" alt="icon-img" /> <span className="text-slider" /> <span className="text-slider text-color">populer</span>
                                    <span className="text-slider text-color">dishes</span> <span className="text-slider" /><span className="text-slider"><img src="../public/assets/img/star-2.svg" alt="icon-img" /></span> <span className="text-slider" /> <span className="text-slider text-color">delicious</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Food Banner Section Start */}
                <section className="food-banner-section-3 fix">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="pasta-banner-items bg-cover" style={{ backgroundImage: 'url("assets/img/banner/pizza-bg-2.png")' }}>
                                    <div className="pasta-content">
                                        <span>crispy, every bite taste</span>
                                        <h3>
                                            Delicious &amp; <br />
                                            hot pizza
                                        </h3>
                                        <a href="shop-single.html" className="link-btn mt-4">
                                            order now <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="pasta-food">
                                        <img src="../public/assets/img/food/pasta-3.png" alt="food-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-offer-items bg-cover style-3" style={{ backgroundImage: 'url("../public/assets/img/banner/banner-bg.png")' }}>
                                    <div className="offer-image-2">
                                        <img src="../public/assets/img/offer/50percent-off-2.png" alt="offer-img" />
                                    </div>
                                    <div className="french-content">
                                        <h4>
                                            <span>Todays</span>Delicious
                                        </h4>
                                        <h3>french fry</h3>
                                        <h5 className="mb-0">This Weekend only</h5>
                                        <a href="shop-single.html" className="theme-btn bg-yellow mt-4">
                                            order now
                                        </a>
                                    </div>
                                    <div className="noodles-image">
                                        <img src="../public/assets/img/food/noodles.png" alt="food-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-offer-items bg-cover style-3" style={{ backgroundImage: 'url("../public/assets/img/banner/banner-bg-2.png")' }}>
                                    <div className="offer-shape-3">
                                        <img src="../public/assets/img/offer/50percent-off-4.png" alt="shape-img" />
                                    </div>
                                    <div className="french-content">
                                        <span>crispy, every bite taste</span>
                                        <h3>
                                            chiken &amp; <br />
                                            french fry
                                        </h3>
                                        <a href="shop-single.html" className="link-btn mt-4">
                                            order now <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                    <div className="chicken-image">
                                        <img src="../public/assets/img/food/chicken.png" alt="food-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Booking Section Start */}
                <section className="booking-section mt-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("../public/assets/img/banner/main-bg.jpg")' }}>
                    <div className="container">
                        <div className="booking-wrapper">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-6">
                                    <div className="booking-content">
                                        <div className="section-title">
                                            <span className="wow fadeInUp">crispy, every bite taste</span>
                                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                                need booking? <br />
                                                reserve your table?
                                            </h2>
                                        </div>
                                        <div className="icon-items d-flex align-items-center wow fadeInUp" data-wow-delay=".5s">
                                            <div className="icon">
                                                <i className="flaticon-phone-call-2" />
                                            </div>
                                            <div className="content">
                                                <h5>24/7 Support center</h5>
                                                <h3><a href="tel:+1718-904-4450">+1718-904-4450</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="booking-contact bg-cover" style={{ backgroundImage: 'url("../public/assets/img/shape/booking-shape.png")' }}>
                                        <h4 className="text-center text-white">create an reservation</h4>
                                        <div className="booking-items">
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
                                            <div className="form-clt">
                                                <input type="text" name="number" id="number" placeholder="phone number" />
                                                <div className="icon">
                                                    <i className="fas fa-phone" />
                                                </div>
                                            </div>
                                            <div className="form-clt">
                                                <input type="date" id="date" name="date" />
                                            </div>
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
                {/* Instagram Banner Section Start */}
                <div className="instagram-banner fix">
                    <div className="swiper instagram-banner-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="../public/assets/img/instagram-banner/01.jpg" alt="food-img" />
                                        <a href="../public/assets/img/instagram-banner/01.jpg" className="icon img-popup">
                                            <i className="far fa-search" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="../public/assets/img/instagram-banner/02.jpg" alt="food-img" />
                                        <a href="../public/assets/img/instagram-banner/02.jpg" className="icon img-popup">
                                            <i className="far fa-search" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="../public/assets/img/instagram-banner/03.jpg" alt="food-img" />
                                        <a href="../public/assets/img/instagram-banner/03.jpg" className="icon img-popup">
                                            <i className="far fa-search" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="../public/assets/img/instagram-banner/04.jpg" alt="food-img" />
                                        <a href="../public/assets/img/instagram-banner/04.jpg" className="icon img-popup">
                                            <i className="far fa-search" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="../public/assets/img/instagram-banner/05.jpg" alt="food-img" />
                                        <a href="../public/assets/img/instagram-banner/05.jpg" className="icon img-popup">
                                            <i className="far fa-search" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TeamDetail