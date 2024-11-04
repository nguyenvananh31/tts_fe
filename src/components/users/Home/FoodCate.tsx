import React from 'react'


const FoodCate = () => {
    return (
        <>
            <section className="food-category-section fix section-padding section-bg">
                <div className="tomato-shape">
                    <img src="/public/assets/img/shape/tomato-shape.png" alt="shape-img" />
                </div>
                <div className="burger-shape-2">
                    <img src="/public/assets/img/shape/burger-shape-2.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-9">
                            <div className="section-title">
                                <span className="wow fadeInUp">crispy, every bite taste</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">Popular Food Items</h2>
                            </div>
                        </div>
                        <div className="col-md-5 ps-0 col-3 text-end wow fadeInUp" data-wow-delay=".5s">
                            <div className="array-button">
                                <button className="array-prev"><i className="far fa-long-arrow-left" /></button>
                                <button className="array-next"><i className="far fa-long-arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="swiper food-catagory-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="catagory-product-card bg-cover" style={{ backgroundImage: 'url("/public/assets/img/shape/catagory-card-shape.jpg")' }}>
                                    <h5>5 products</h5>
                                    <div className="catagory-product-image text-center">
                                        <a href="shop.html">
                                            <img src="/public/assets/img/food/pizza.png" alt="product-img" />
                                            <div className="decor-leaf">
                                                <img src="/public/assets/img/shape/decor-leaf.svg" alt="shape-img" />
                                            </div>
                                            <div className="decor-leaf-2">
                                                <img src="/public/assets/img/shape/decor-leaf-2.svg" alt="shape-img" />
                                            </div>
                                            <div className="burger-shape">
                                                <img src="/public/assets/img/shape/burger-shape.png" alt="shape-img" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="catagory-product-content text-center">
                                        <div className="catagory-product-icon">
                                            <img src="/public/assets/img/shape/food-shape.svg" alt="shape-text" />
                                        </div>
                                        <h3>
                                            <a href="shop-single.html">
                                                pro pizza
                                            </a>
                                        </h3>
                                        <p>5 products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="catagory-product-card bg-cover" style={{ backgroundImage: 'url("/public/assets/img/shape/catagory-card-shape.jpg")' }}>
                                    <h5>5 products</h5>
                                    <div className="catagory-product-image text-center">
                                        <a href="shop.html">
                                            <img src="/public/assets/img/food/pasta.png" alt="product-img" />
                                            <div className="decor-leaf">
                                                <img src="/public/assets/img/shape/decor-leaf.svg" alt="shape-img" />
                                            </div>
                                            <div className="decor-leaf-2">
                                                <img src="/public/assets/img/shape/decor-leaf-2.svg" alt="shape-img" />
                                            </div>
                                            <div className="burger-shape">
                                                <img src="/public/assets/img/shape/burger-shape.png" alt="shape-img" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="catagory-product-content text-center">
                                        <div className="catagory-product-icon">
                                            <img src="/public/assets/img/shape/food-shape.svg" alt="shape-text" />
                                        </div>
                                        <h3>
                                            <a href="shop-single.html">
                                                pro pizza
                                            </a>
                                        </h3>
                                        <p>5 products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="catagory-product-card bg-cover" style={{ backgroundImage: 'url("assets/img/shape/catagory-card-shape.jpg")' }}>
                                    <h5>5 products</h5>
                                    <div className="catagory-product-image text-center">
                                        <a href="shop.html">
                                            <img src="/public/assets/img/food/burger.png" alt="product-img" />
                                            <div className="decor-leaf">
                                                <img src="/public/assets/img/shape/decor-leaf.svg" alt="shape-img" />
                                            </div>
                                            <div className="decor-leaf-2">
                                                <img src="/public/assets/img/shape/decor-leaf-2.svg" alt="shape-img" />
                                            </div>
                                            <div className="burger-shape">
                                                <img src="/public/assets/img/shape/burger-shape.png" alt="shape-img" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="catagory-product-content text-center">
                                        <div className="catagory-product-icon">
                                            <img src="/public/assets/img/shape/food-shape.svg" alt="shape-text" />
                                        </div>
                                        <h3>
                                            <a href="shop-single.html">
                                                pro pizza
                                            </a>
                                        </h3>
                                        <p>5 products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="catagory-product-card bg-cover" style={{ backgroundImage: 'url("assets/img/shape/catagory-card-shape.jpg")' }}>
                                    <h5>5 products</h5>
                                    <div className="catagory-product-image text-center">
                                        <a href="shop.html">
                                            <img src="/public/assets/img/food/french-fry.png" alt="product-img" />
                                            <div className="decor-leaf">
                                                <img src="/public/assets/img/shape/decor-leaf.svg" alt="shape-img" />
                                            </div>
                                            <div className="decor-leaf-2">
                                                <img src="/public/assets/img/shape/decor-leaf-2.svg" alt="shape-img" />
                                            </div>
                                            <div className="burger-shape">
                                                <img src="/public/assets/img/shape/burger-shape.png" alt="shape-img" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="catagory-product-content text-center">
                                        <div className="catagory-product-icon">
                                            <img src="/public/assets/img/shape/food-shape.svg" alt="shape-text" />
                                        </div>
                                        <h3>
                                            <a href="shop-single.html">
                                                pro pizza
                                            </a>
                                        </h3>
                                        <p>5 products</p>
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

export default FoodCate