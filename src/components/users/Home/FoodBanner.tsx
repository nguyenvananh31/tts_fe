import React from 'react'

const FoodBanner = () => {
    return (
        <>
            <section className="food-banner-section section-padding fix section-bg pt-0">
                <div className="chili-shape">
                    <img src="/public/assets/img/shape/chili-shape.png" alt="shape-img" />
                </div>
                <div className="fry-shape">
                    <img src="/public/assets/img/shape/fry-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-offer-items bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/offer-bg.png")' }}>
                                <div className="offer-content">
                                    <h5>crispy, every bite taste</h5>
                                    <h3>
                                        SUPER <br />
                                        DELICIOUS
                                    </h3>
                                </div>
                                <div className="offer-image">
                                    <img src="/public/assets/img/offer/50percent-off.png" alt="offer-img" />
                                </div>
                                <div className="burger-text">
                                    <img src="/public/assets/img/shape/burger-text.png" alt="shape-img" />
                                </div>
                                <div className="main-food">
                                    <img src="/public/assets/img/food/main-food.png" alt="food-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 mt-5 mt-xl-0 wow fadeInUp" data-wow-delay=".5s">
                            <div className="pizza-banner-items bg-cover" style={{ backgroundImage: 'url(/public/assets/img/banner/pizza-bg.png)' }}>
                                <div className="pizza-text">
                                    <img src="/public/assets/img/shape/pizza-text.png" alt="shape-img" />
                                </div>
                                <div className="pizza-text-2">
                                    <img src="/public/assets/img/shape/pizza-text-2.png" alt="shape-img" />
                                </div>
                                <div className="pizza-image">
                                    <img src="/public/assets/img/food/pizza-2.png" alt="pizza-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FoodBanner