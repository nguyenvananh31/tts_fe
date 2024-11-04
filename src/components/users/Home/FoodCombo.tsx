import React from 'react'

const FoodCombo = () => {
    return (
        <>
            <section className="food-comboo-section fix bg-cover section-padding" style={{ backgroundImage: 'url("/public/assets/img/bg-image/bg.jpg")' }}>
                <div className="drinks-shape">
                    <img src="/public/assets/img/shape/drinks.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="comboo-wrapper">
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="food-comboo-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">crispy, every bite taste</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            trending Food combo
                                            offer less <span>20%</span>
                                        </h2>
                                    </div>
                                    <p className="wow fadeInUp" data-wow-delay=".5s">
                                        A team of dreamers and doers building unique interactive music and art festivals.
                                    </p>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link wow fadeInUp" data-wow-delay=".3s" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                            <span className="food-comboo-list">
                                                <span className="offer-image">
                                                    <img src="/public/assets/img/offer/chicken.png" alt="img" />
                                                </span>
                                                <span className="comboo-title">
                                                    30% off 4pcs hot crispy &amp; 8 pcs wing
                                                </span>
                                            </span>
                                        </button>
                                        <button className="nav-link active wow fadeInUp" data-wow-delay=".5s" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                            <span className="food-comboo-list">
                                                <span className="offer-image">
                                                    <img src="/public/assets/img/offer/pizza.png" alt="img" />
                                                </span>
                                                <span className="comboo-title">
                                                    20% off tasty pizza with drink
                                                </span>
                                            </span>
                                        </button>
                                        <button className="nav-link wow fadeInUp" data-wow-delay=".7s" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                            <span className="food-comboo-list">
                                                <span className="offer-image">
                                                    <img src="/public/assets/img/offer/burger.png" alt="img" />
                                                </span>
                                                <span className="comboo-title">
                                                    2pcs humbergur with drinks &amp; sauce
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="tab-content" id="nav-tab-Content">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <div className="comboo-image bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/comboo-bg.jpg")' }}>
                                            <div className="pizza-text">
                                                <img src="/public/assets/img/shape/combo-pizza-text.png" alt="shape-img" />
                                            </div>
                                            <div className="pizza-image">
                                                <img src="/public/assets/img/food/big-pizza.png" alt="food-img" />
                                            </div>
                                            <div className="offer-shape">
                                                <img src="/public/assets/img/offer/50percent-off-2.png" alt="shape-img" />
                                            </div>
                                            <div className="vegetable-shape">
                                                <img src="/public/assets/img/shape/vegetable.png" alt="shape-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <div className="comboo-image bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/comboo-bg.jpg")' }}>
                                            <div className="pizza-text">
                                                <img src="/public/assets/img/shape/combo-pizza-text.png" alt="shape-img" />
                                            </div>
                                            <div className="pizza-image">
                                                <img src="/public/assets/img/food/big-pizza.png" alt="food-img" />
                                            </div>
                                            <div className="offer-shape">
                                                <img src="/public/assets/img/offer/50percent-off-2.png" alt="shape-img" />
                                            </div>
                                            <div className="vegetable-shape">
                                                <img src="/public/assets/img/shape/vegetable.png" alt="shape-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                        <div className="comboo-image bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/comboo-bg.jpg")' }}>
                                            <div className="pizza-text">
                                                <img src="/public/assets/img/shape/combo-pizza-text.png" alt="shape-img" />
                                            </div>
                                            <div className="pizza-image">
                                                <img src="/public/assets/img/food/big-pizza.png" alt="food-img" />
                                            </div>
                                            <div className="offer-shape">
                                                <img src="/public/assets/img/offer/50percent-off-2.png" alt="shape-img" />
                                            </div>
                                            <div className="vegetable-shape">
                                                <img src="/public/assets/img/shape/vegetable.png" alt="shape-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FoodCombo