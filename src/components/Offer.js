import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Stars from './Stars'
import { useProductsContext } from '../context/ProductsContext'
const Offer = () => {
  const { products } = useProductsContext()
  console.log(products)
  return (
    <Wrapper>
      <div className='section section-center'>
        <div className='header'>
          <div className='title'>
            <h3>Offer </h3>
            <h2>We Offer Organic For You</h2>
          </div>
          <Link to='/products' className='btn'>
            View All Products
          </Link>
        </div>
        <div className='section section-center products-section'>
          {products.slice(0, 3).map((e) => {
            const { id, name, price, image } = e
            return (
              <article className='product' key={id}>
                <div className='img-container'>
                  <img src={image} className='product-img' alt={name}></img>
                  <div className='modal'>
                    <button className='img-btn btn'>Read More</button>
                  </div>
                </div>
                <div className='footer'>
                  <h4>{name}</h4>
                  <div>
                    <p className='price'>${price / 1000}</p>
                    <Stars numbers={5} />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--color4);
  max-width: 2000px;
  margin: 0 auto;
  p,
  h4 {
    color: var(--text-article);
  }
  .products-section {
    display: grid;
    gap: 1rem;
  }
  .header {
    display: grid;
    align-items: center;
  }
  .btn {
    justify-self: start;
  }
  .product {
    border: none;
    border-radius: 0.7rem;
    background: var(--color5);
    position: relative;
  }
  .product:hover {
    transform: translateY(-2%);
    transition: var(--transition);
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  .img-container:hover .modal {
    display: block;
    transition: var(--transition);
  }
  .img-container {
    position: relative;
  }
  .product-img {
    height: 360px;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .footer {
    padding: 0.5rem 0.8rem;
  }

  @media screen and (min-width: 768px) {
    .products-section {
      grid-template-columns: 1fr 1fr;
    }
    .header {
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
    }
    .btn {
      justify-self: end;
    }
  }
  @media screen and (min-width: 992px) {
    .products-section {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default Offer
