import React from 'react'
import Header from '../components/Header/Header'
import Product from '../components/Product/Product'
import BestSellingProducts from '../components/Product/BestSellingProduct/BestSellingProducts'
import DealProducts from '../components/Product/DealProducts/DealProducts'
import SpecialOffers from '../components/Product/SpecialOffers/SpecialOffers'
import NewProducts from '../components/Product/NewProducts/NewProducts'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Product />
      <BestSellingProducts />
      <DealProducts />
      <SpecialOffers />
      <NewProducts />
      <Footer />
    </>
  )
}

export default Home
