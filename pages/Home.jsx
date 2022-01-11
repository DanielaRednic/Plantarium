import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import ProductsList from '../components/ProductsList'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            {/* <ProductsList/> */}
            <Categories/>
            <Footer/>
            
        </div>
    )
}

export default Home

