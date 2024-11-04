import React from 'react'

const NotFound = () => {
    return (
        <>
            <div>
                {/*<< Breadcrumb Section Start >>*/}
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("/public/assets/img/banner/breadcrumb.jpg")' }}>
                    <div className="container">
                        <div className="page-heading center">
                            <h1>error page</h1>
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
                                    error page
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 404 Error Section Start */}
                <section className="error-section section-bg section-padding fix">
                    <div className="container">
                        <div className="error-content text-center">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">4<span>0</span>4</h2>
                            <h3 className="wow fadeInUp" data-wow-delay=".5s">we’re sorry page not found</h3>
                            <a href="index.html" className="theme-btn style-line-height mt-5 wow fadeInUp" data-wow-delay=".7s">
                                <span className="button-text">Back To Home</span>
                            </a>
                        </div>
                    </div>
                </section>

            </div>


        </>
    )
}

export default NotFound