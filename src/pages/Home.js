import React from 'react'
import {
  Navbar,
  About,
  Footer,
  Info,
  MoreInfo,
  Newletter,
  News,
  Offer,
  Hero,
  FeaturedProducts,
  Category,
  Testimonial,
  Copyright,
  CartModal,
  Stars,
} from '../components/index'
import { useProductsContext } from '../context/ProductsContext'
const Home = () => {
  const dt = useProductsContext()
  console.log(dt)
  return (
    <main>
      <Navbar />
      <Hero />
      <Info />
      <About />
      <FeaturedProducts />
      <Testimonial />
      <Offer />
      <MoreInfo />
      <Category />
      <Newletter />
      <News />
    </main>
  )
}

export default Home
