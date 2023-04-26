import React from 'react'
import {
  Navbar,
  About,
  Info,
  MoreInfo,
  Newletter,
  News,
  Offer,
  Hero,
  FeaturedProducts,
  Category,
  Testimonial,
} from '../components/index'
const Home = () => {
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
