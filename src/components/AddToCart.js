import React from 'react'
import AmountBtns from './AmountBtn'
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import styled from 'styled-components'
import { useProductsContext } from '../context/ProductsContext'
const AddToCart = ({ product }) => {
  const { id, stock, colors = [] } = product
  const [amount, setAmount] = useState(1)
  const [mainColor, setMainColor] = useState(colors[0])
  const { addToCart } = useCartContext()
  const { openCartModal } = useProductsContext()
  const increaseAmount = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1
      if (newAmount > stock) {
        newAmount = stock
      }
      return newAmount
    })
  }
  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1
      if (newAmount < 1) {
        newAmount = 1
      }
      return newAmount
    })
  }
  return (
    <Wrapper>
      <div className='colors-input'>
        <p>Color:</p>
        {colors?.map((color, index) => {
          return (
            <button
              key={index}
              className={`${
                color === mainColor ? 'color color-active' : 'color'
              }`}
              name='color'
              data-color={color}
              style={{ background: color }}
              onClick={() => {
                setMainColor(color)
              }}
            ></button>
          )
        })}
      </div>

      <AmountBtns
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
        amount={amount}
      />
      <button
        className='btn'
        onClick={() => {
          addToCart(id, amount, mainColor, product)
          openCartModal()
        }}
      >
        Add to Cart
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .colors-input {
    display: flex;
    align-items: center;
    column-gap: 0.2rem;
    padding-bottom: 1rem;
  }
  .color {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    margin-left: 0.2rem;
    opacity: 0.5;
    cursor: pointer;
  }
  .color-active {
    opacity: 1;
  }
  p {
    margin: 0;
  }
`
export default AddToCart
