import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/CartContext'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import AmountBtns from './AmountBtn'
const CartItem = ({ image, id, name, color, price, amount }) => {
  const { toggleAmount, removeItem } = useCartContext()
  const increase = () => {
    toggleAmount(id, 'increase')
  }
  const decrease = () => {
    toggleAmount(id, 'decrease')
  }
  return (
    <Wrapper className='cart-item'>
      <div className='img-container'>
        <img src={image} className='cart-img' alt={name}></img>
        <div className='item-info'>
          <h4>
            Title:
            {name.length > 10 ? ` ${name.substring(0, 10)}...` : name}
          </h4>
          <div className='colors'>
            <p>Color: </p>
            <span className='color' style={{ background: color }}></span>
          </div>

          <p className='price'>Price: ${price / 1000}</p>
          <p>Sub total: ${(price * amount) / 1000}</p>
        </div>
      </div>

      <AmountBtns
        increaseAmount={increase}
        decreaseAmount={decrease}
        amount={amount}
      />
      <button
        className='btn remove-btn'
        onClick={() => {
          removeItem(id)
        }}
      >
        <RiDeleteBin6Fill />
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 260px 1fr 1fr;
  align-items: center;
  justify-content: center;

  margin-bottom: 0.5rem;
  .img-container {
    display: flex;
    column-gap: 1rem;
  }
  .img-container div {
    align-self: center;
  }
  .cart-img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 1rem;
  }
  .item-info {
    min-width: 140px;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    margin-left: 0.2rem;
    display: inline-block;
    opacity: 0.8;
  }
  .amount-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h4,
  p {
    margin: 0;
    padding: 0;
  }
  .btn {
    background: transparent;
    font-size: 1.2rem;
  }
  .btn:hover {
    color: var(--color3);
  }
  .total {
    text-align: center;
  }
  .total-amount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  .remove-btn {
    justify-self: center;
  }
`
export default CartItem
