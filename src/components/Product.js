import React from 'react'
import styled from 'styled-components'
import Stars from './Stars'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Product = ({ id, image, name, price, stock }) => {
  return (
    <Wrapper className='product' key={id}>
      <div className='img-container'>
        <img src={image} className='product-img'></img>
        <div className='modal'>
          <Link to={`/products/${id}`} className='img-btn'>
            <BsSearch />
          </Link>
        </div>
      </div>
      <h5 className='name'>{name}</h5>
      <div className='footer'>
        <p className='price'>${price / 1000}</p>
        <Stars numbers={4.5} />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  border-radius: 0.7rem;
  background: var(--color5);
  overflow: hidden;
  .img-container {
    position: relative;
    overflow: hidden;
    margin-bottom: 0.5rem;
    height: 200px;
  }
  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    display: none;
  }

  .img-container:hover .modal {
    display: grid;
  }
  .img-container:hover .product-img {
    opacity: 0.6;
    transform: scale(1.05);
    transition: var(--transition);
  }
  .product-img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    height: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 2rem;
    border: none;
    transition: all 0.3s linear;
  }
  .name {
    color: var(--color2);
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
  }
  .price {
    color: var(--color1);
    font-size: 0.8rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
`
export default Product
