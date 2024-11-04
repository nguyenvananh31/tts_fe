const ShopSingle = () => {
    return (
        <>
            <div>
                {/*<< Breadcrumb Section Start >>*/}
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("../public/assets/img/banner/breadcrumb.jpg")' }}>
                    <div className="container">
                        <div className="page-heading center">
                            <h1>product single</h1>
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
                                    product single
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Product Details Section Start */}
                <section className="product-details-section section-padding">
                    <div className="container">
                        <div className="product-details-wrapper">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="product-image-items">
                                        <div className="tab-content" id="nav-tab-Content">
                                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div className="product-image">
                                                    <img src="../public/assets/img/shop-food/details-1.png" alt="img" />
                                                    <a href="../public/assets/img/shop-food/details-1.png" className="icon img-popup">
                                                        <i className="far fa-search" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <div className="product-image">
                                                    <img src="../public/assets/img/shop-food/details-1.png" alt="img" />
                                                    <a href="../public/assets/img/shop-food/details-1.png" className="icon img-popup">
                                                        <i className="far fa-search" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                <div className="product-image">
                                                    <img src="../public/assets/img/shop-food/details-1.png" alt="img" />
                                                    <a href="../public/assets/img/shop-food/details-1.png" className="icon img-popup">
                                                        <i className="far fa-search" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab2">
                                                <div className="product-image">
                                                    <img src="../public/assets/img/shop-food/details-1.png" alt="img" />
                                                    <a href="../public/assets/img/shop-food/details-1.png" className="icon img-popup">
                                                        <i className="far fa-search" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav nav-tabs wow" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                                <img src="../public/assets/img/shop-food/s1.png" alt="img" className="image-tab" />
                                            </button>
                                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                <img src="../public/assets/img/shop-food/s2.png" alt="img" className="image-tab" />
                                            </button>
                                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                                <img src="../public/assets/img/shop-food/s3.png" alt="img" className="image-tab" />
                                            </button>
                                            <button className="nav-link" id="nav-contact-tab2" data-bs-toggle="tab" data-bs-target="#nav-contact2" type="button" role="tab" aria-controls="nav-contact2" aria-selected="false">
                                                <img src="../public/assets/img/shop-food/s4.png" alt="img" className="image-tab" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 mt-5 mt-lg-0">
                                    <div className="product-details-content">
                                        <div className="star pb-3">
                                            <span>-5%</span>
                                            <a href="#"> <i className="fas fa-star" /></a>
                                            <a href="#"><i className="fas fa-star" /></a>
                                            <a href="#"> <i className="fas fa-star" /></a>
                                            <a href="#"><i className="fas fa-star" /></a>
                                            <a href="#" className="color-bg"> <i className="fas fa-star" /></a>
                                            <a href="#" className="text-color">( 2 Reviews )</a>
                                        </div>
                                        <h3 className="pb-3">Whopper Burger King</h3>
                                        <p className="mb-4">
                                            There are many variations of passages of Lorem Ipsum available, but majority
                                            have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <div className="price-list d-flex align-items-center">
                                            <span>$4,600.00</span>
                                            <del>$4,600.00</del>
                                        </div>
                                        <div className="cart-wrp">
                                            <div className="cart-quantity">
                                                <h5>QUANTITY:</h5>
                                                <form id="myform" method="POST" className="quantity" action="#">
                                                    <input type="button" defaultValue="-" className="qtyminus minus" />
                                                    <input type="text" name="quantity" defaultValue={0} className="qty" />
                                                    <input type="button" defaultValue="+" className="qtyplus plus" />
                                                </form>
                                            </div>
                                            <div className="shop-button d-flex align-items-center">
                                                <a href="shop-single.html" className="theme-btn">
                                                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                                                        <span className="button-icon"><i className="flaticon-shopping-cart" /></span>
                                                        <span className="button-text">Add To Cart</span>
                                                    </span>
                                                </a>
                                                <a href="shop-single.html" className="star-icon">
                                                    <i className="fal fa-star" />
                                                </a>
                                            </div>
                                        </div>
                                        <h6 className="shop-text">GROUND DELIVERY SURCHARGE: <span>$180.00</span></h6>
                                        <h6 className="details-info"><span>SKU:</span> <a href="shop-single.html">N/A</a></h6>
                                        <h6 className="details-info"><span>Categories:</span> <a href="shop-single.html">Pizza</a></h6>
                                        <h6 className="details-info"><span>Tags:</span> <a href="shop-single.html">Burgers, Tacos</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="single-tab">
                                <ul className="nav mb-4">
                                    <li className="nav-item">
                                        <a href="#description" data-bs-toggle="tab" className="nav-link active">
                                            Description
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#additional" data-bs-toggle="tab" className="nav-link">
                                            Additional Information
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#review" data-bs-toggle="tab" className="nav-link">
                                            reviews (4)
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="description" className="tab-pane fade show active">
                                        <div className="description-items">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="description-content">
                                                        <h3>Experience is over the world visit</h3>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor Numquam odit accusantium odit aut commodi et. Nostrum est atque ut dolorum. Et sequi aut atque doloribus qui. Iure amet in voluptate reiciendis. Perspiciatis consequatur aperiam repellendus velit quia est minima. tellus aliquet nunc vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis necenim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus
                                                        </p>
                                                        <h3 className="mb-0 mt-5">More Details</h3>
                                                        <div className="description-list-items d-flex">
                                                            <ul className="description-list">
                                                                <li>
                                                                    <i className="fal fa-check" />
                                                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" />
                                                                    <span>Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" />
                                                                    <span>type here your detail one by one li more add</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" />
                                                                    <span>has been the industry’s standard dummy text ever since. Lorem Ips</span>
                                                                </li>
                                                            </ul>
                                                            <ul className="description-list">
                                                                <li>
                                                                    <i className="fal fa-check" />
                                                                    <span>Lorem Ipsum generators on the tend to repeat.</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" />
                                                                    <span> If you are going to use a passage.</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" />
                                                                    <span> Lorem Ipsum generators on the tend to repeat.</span>
                                                                </li>
                                                                <li>
                                                                    <i className="fal fa-check" />
                                                                    <span> Lorem Ipsum generators on the tend to repeat.</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="additional" className="tab-pane fade">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Weight</td>
                                                        <td>240 Ton</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dimensions</td>
                                                        <td>20 × 30 × 40 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Colors</td>
                                                        <td>Black, Blue, Green</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="review" className="tab-pane fade">
                                        <div className="review-items">
                                            <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                                <div className="admin-img pb-4 pb-md-0 me-4">
                                                    <img src="../public/assets/img/shop-food/review/01.jpg" alt="image" />
                                                </div>
                                                <div className="content p-4">
                                                    <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                        <h5>miklos salsa<span>27June 2024 at 5.44pm</span></h5>
                                                        <div className="star">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                                <div className="admin-img pb-4 pb-md-0 me-4">
                                                    <img src="../public/assets/img/shop-food/review/02.jpg" alt="image" />
                                                </div>
                                                <div className="content p-4">
                                                    <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                        <h5>Ethan Turner <span>27June 2024 at 5.44pm</span></h5>
                                                        <div className="star">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                                <div className="admin-img pb-4 pb-md-0 me-4">
                                                    <img src="../public/assets/img/shop-food/review/01.jpg" alt="image" />
                                                </div>
                                                <div className="content p-4">
                                                    <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                        <h5>miklos salsa<span>27June 2024 at 5.44pm</span></h5>
                                                        <div className="star">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                                <div className="admin-img pb-4 pb-md-0 me-4">
                                                    <img src="../public/assets/img/shop-food/review/02.jpg" alt="image" />
                                                </div>
                                                <div className="content p-4">
                                                    <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                        <h5>Ethan Turner <span>27June 2024 at 5.44pm</span></h5>
                                                        <div className="star">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="review-title mt-5 py-15 mb-30">
                                                <h4>add a review</h4>
                                                <div className="rate-now d-flex align-items-center">
                                                    <p>Rate this product? *</p>
                                                    <div className="star">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-form">
                                                <form action="#" id="contact-form" method="POST">
                                                    <div className="row g-4">
                                                        <div className="col-lg-6">
                                                            <div className="form-clt">
                                                                <input type="text" name="name" id="name" placeholder="Full Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-clt">
                                                                <input type="text" name="email" id="email" placeholder="email addres" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8">
                                                            <div className="form-clt-big form-clt">
                                                                <textarea name="message" id="message" placeholder="message" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9">
                                                            <button type="submit" className="theme-btn">
                                                                post Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Food Catagory Section Start */}
                <section className="food-category-section fix section-padding section-bg">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="wow fadeInUp">crispy, every bite taste</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">RELATED PRODUCTS</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="catagory-product-card-2 text-center">
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
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="catagory-product-card-2 active text-center">
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
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="catagory-product-card-2 text-center">
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
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                <div className="catagory-product-card-2 text-center">
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
export default ShopSingle;