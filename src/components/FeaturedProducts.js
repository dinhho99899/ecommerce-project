import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import Stars from './Stars'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/ProductsContext'
import Product from './Product'

const FeaturedProducts = () => {
  const { featured_products } = useProductsContext()
  console.log(featured_products)
  return (
    <Wrapper className='section section-center'>
      <div className='title'>
        <h3>Featured Products </h3>
        <h2>Our Products</h2>
      </div>
      <div className='products-section'>
        {featured_products.map((e) => {
          const { id, name, price, image } = e
          return <Product {...e} />
        })}
      </div>
      <Link to='/products' className='btn'>
        Shop Now
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: center;
  .title {
    text-align: center;
  }
  .products-section {
    display: grid;
    gap: 1.5rem;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 576px) {
    .products-section {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 992px) {
    .products-section {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1176px) {
    .products-section {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`
export default FeaturedProducts
