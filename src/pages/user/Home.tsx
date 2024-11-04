import React from 'react'
import Banner from '../../components/users/Home/Banner'
import FoodCate from '../../components/users/Home/FoodCate'
import FoodBanner from '../../components/users/Home/FoodBanner'
import Brand from '../../components/users/Home/Brand'
import '../../assets/css/main.css'
import '../../assets/css/animate.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/font-awesome.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/meanmenu.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/swiper-bundle.min.css'
import { Banner2 } from '../../components/users/Home/Banner2'
import FoodCategory from '../../components/users/Home/FoodCategory'
import FoodCombo from '../../components/users/Home/FoodCombo'

const Home = () => {
    return (
        <>
            <Banner />
            <FoodCate />
            <FoodBanner />
            <Brand />
            <Banner2 />
            <FoodCategory />
            <FoodCombo />
        </>
    )
}

export default Home