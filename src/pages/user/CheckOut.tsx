import React from 'react'

const CheckOut = () => {
    return (
        <>
            <div>
                {/*<< Breadcrumb Section Start >>*/}
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/breadcrumb.jpg")' }}>
                    <div className="container">
                        <div className="page-heading center">
                            <h1>CHECKOUT</h1>
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
                                    CHECKOUT
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*<< Checkout Section Start >>*/}
                <section className="checkout-section fix section-padding border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form action="#" method="post">
                                    <div className="row g-4">
                                        <div className="col-md-5 col-lg-4 col-xl-3">
                                            <div className="checkout-radio">
                                                <p className="primary-text">Select any one</p>
                                                <div className="checkout-radio-wrapper">
                                                    <div className="checkout-radio-single">
                                                        <input type="checkbox" className="form-check-input" id="cCard" name="pay-method" defaultValue="Credit/Debit Cards" />
                                                        <label htmlFor="cCard">Credit/Debit Cards</label>
                                                    </div>
                                                    <div className="checkout-radio-single">
                                                        <input type="checkbox" className="form-check-input" id="paypal" name="pay-method" defaultValue="PayPal" />
                                                        <label htmlFor="paypal">PayPal</label>
                                                    </div>
                                                    <div className="checkout-radio-single">
                                                        <input type="checkbox" className="form-check-input" id="payoneer" name="pay-method" defaultValue="Payoneer" />
                                                        <label htmlFor="payoneer">Payoneer</label>
                                                    </div>
                                                    <div className="checkout-radio-single">
                                                        <input type="checkbox" className="form-check-input" id="visa" name="pay-method" defaultValue="Visa" />
                                                        <label htmlFor="visa">Visa</label>
                                                    </div>
                                                    <div className="checkout-radio-single">
                                                        <input type="checkbox" className="form-check-input" id="mastercard" name="pay-method" defaultValue="Mastercard" />
                                                        <label htmlFor="mastercard">Mastercard</label>
                                                    </div>
                                                    <div className="checkout-radio-single">
                                                        <input type="checkbox" className="form-check-input" id="fastPay" name="pay-method" defaultValue="Fastpay" />
                                                        <label htmlFor="fastPay">Fastpay</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-lg-8 col-xl-9">
                                            <div className="checkout-single-wrapper">
                                                <div className="checkout-single boxshado-single">
                                                    <h4>Billing address</h4>
                                                    <div className="checkout-single-form">
                                                        <div className="row g-4">
                                                            <div className="col-lg-6">
                                                                <div className="input-single">
                                                                    <input type="text" name="user-first-name" id="userFirstName" required placeholder="First Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="input-single">
                                                                    <input type="text" name="user-last-name" id="userLastName" required placeholder="Last Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="input-single">
                                                                    <input type="email" name="user-check-email" id="userCheckEmail" required placeholder="Your Email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="input-single">
                                                                    <select className="country-select" style={{ display: 'none' }}>
                                                                        <option value="usa">USA</option>
                                                                        <option value="aus">Aus</option>
                                                                        <option value="uk">UK</option>
                                                                        <option value="ned">NED</option>
                                                                    </select>
                                                                    <div className="nice-select country-select" tabIndex={0}>
                                                                        <span className="current">USA</span>
                                                                        <ul className="list">
                                                                            <li data-value="usa" className="option selected">USA</li>
                                                                            <li data-value="aus" className="option">Aus</li>
                                                                            <li data-value="uk" className="option">UK</li>
                                                                            <li data-value="ned" className="option">NED</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="input-single">
                                                                    <textarea name="user-address" id="userAddress" placeholder="Address" defaultValue={""} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-single checkout-single-bg">
                                                    <h4>Payment Methods</h4>
                                                    <div className="checkout-single-form">
                                                        <p className="payment" />
                                                        <div className="row g-3">
                                                            <div className="col-lg-12">
                                                                <div className="input-single">
                                                                    <label htmlFor="userCardNumber">Card number</label>
                                                                    <input type="number" name="user-card-number" id="userCardNumber" placeholder="0000 0000 0000 0000" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="input-single">
                                                                    <label htmlFor="userCardDate">Expiry date</label>
                                                                    <input type="text" id="userCardDate" placeholder="DD/MM/YY" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="input-single">
                                                                    <label htmlFor="userCvc">Cvc / Cvv</label>
                                                                    <input type="text" maxLength={3} name="user-card-cvc" id="userCvc" required placeholder="3 Digits" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="input-single">
                                                                    <label htmlFor="userCardName">Name on card</label>
                                                                    <input type="text" name="user-card-name" id="userCardName" placeholder="Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input-single input-check payment-save">
                                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext" />
                                                        <label htmlFor="saveForNext">Save for my next payment</label>
                                                    </div>
                                                    <div className="mt-4">
                                                        <a href="checkout.html" className="theme-btn border-radius-none">
                                                            Payment Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
                            <a href="#0" className="theme-btn bg-white">
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

export default CheckOut