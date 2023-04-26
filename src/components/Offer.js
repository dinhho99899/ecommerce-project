import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Stars from './Stars'
const Offer = () => {
  return (
    <Wrapper>
      <div className='section section-center'>
        <div>
          <div className='title'>
            <h3>Offer </h3>
            <h2>What Our Customer Saying?</h2>
          </div>
          <Link to='/products' className='btn'>
            View All Products
          </Link>
        </div>
        <div className='section section-center products-section'>
          <article className='product'>
            <div className='img-container'>
              <img src='./images/Banner.png' className='product-img'></img>
              <div className='modal'>
                <button className='img-btn btn'>Read More</button>
              </div>
            </div>
            <div className='footer'>
              <h4>Clabrese</h4>
              <div>
                <p className='price'>$20</p>
                <Stars numbers={5} />
              </div>
            </div>
          </article>
          <article className='product'>
            <div className='img-container'>
              <img src='./images/Banner.png' className='product-img'></img>
              <div className='modal'>
                <button className='img-btn btn'>Read More</button>
              </div>
            </div>
            <div className='footer'>
              <h4>Clabrese</h4>
              <div>
                <p className='price'>$20</p>
                <span>*****</span>
              </div>
            </div>
          </article>
          <article className='product'>
            <div className='img-container'>
              <img src='./images/Banner.png' className='product-img'></img>
              <div className='modal'>
                <button className='img-btn btn'>Read More</button>
              </div>
            </div>
            <div className='footer'>
              <h4>Clabrese</h4>
              <div>
                <p className='price'>$20</p>
                <span>*****</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--color1);
  max-width: 2000px;
  margin: 0 auto;

  .products-section {
    display: grid;
    gap: 1rem;
  }
  .product {
    border: none;
    border-radius: 0.7rem;
    background: var(--color5);
    position: relative;
  }
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
`
export default Offer
