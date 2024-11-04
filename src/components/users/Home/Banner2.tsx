import React from 'react'

export const Banner2 = () => {
    return (
        <>
            <section className="grilled-banner fix section-padding bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/main-bg.jpg")' }}>
                <div className="patato-shape">
                    <img src="/public/assets/img/shape/patato-shape.png" alt="shape-img" />
                </div>
                <div className="offer-shape float-bob-y">
                    <img src="/public/assets/img/offer/50percent-off-2.png" alt="shape-img" />
                </div>
                <div className="text-shape">
                    <img src="/public/assets/img/shape/pizza-text-2.png" alt="shape-img" />
                </div>
                <div className="spicy-shape">
                    <img src="/public/assets/img/shape/spicy.png" alt="shape-img" />
                </div>
                <div className="tomato-shape">
                    <img src="/public/assets/img/shape/tomato-shape-2.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="grilled-wrapper">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="grilled-content">
                                    <h4 className="wow fadeInUp">
                                        save 20%
                                    </h4>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        tODAY'S <span>ASTACKIN</span> DAY
                                    </h2>
                                    <h3 className="wow fadeInUp" data-wow-delay=".5s">
                                        <a href="shop.html">
                                            grilled <span className="text-1">chiken</span>
                                        </a>
                                        <span className="text-2">$59,00</span>
                                    </h3>
                                    <div className="grilled-button wow fadeInUp" data-wow-delay=".7s">
                                        <a href="shop-single.html" className="theme-btn">
                                            <span className="button-content-wrapper d-flex align-items-center">
                                                <span className="button-icon"><i className="flaticon-delivery" /></span>
                                                <span className="button-text">order now</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
                                <div className="grilled-image">
                                    <img src="/public/assets/img/food/grilled.png" alt="grilled-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
