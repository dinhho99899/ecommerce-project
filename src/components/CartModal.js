import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/ProductsContext'
import { AiOutlineClose } from 'react-icons/ai'
import { useCartContext } from '../context/CartContext'
import CartItem from './CartItem'
const CartModal = () => {
  const { isCartModal } = useProductsContext()
  const { cart } = useCartContext()
  console.log(cart)
  const { toggleCartModal } = useProductsContext()
  const { total_amount } = useCartContext()

  return (
    <Wrapper
      className={`${isCartModal ? 'cart-modal sidebar-cart' : 'cart-modal'}`}
    >
      <div className='cart '>
        <button className='close-btn' onClick={toggleCartModal}>
          <AiOutlineClose />
        </button>
        <h3 className='cart-title'>Cart</h3>
        <div className='cart-container'>
          {cart.length <= 0 && (
            <div className='shop-now'>
              <Link to='/products' className='btn' onClick={toggleCartModal}>
                Shop Now
              </Link>
            </div>
          )}
          {cart.map((item) => {
            return <CartItem {...item} key={item.id} />
          })}
        </div>
        <div className='total'>
          <hr />
          <div className='total-amount'>
            <h3>Total:</h3>
            <h3 className=''>{total_amount / 1000}</h3>
          </div>
          <Link className='btn' to='/checkout' onClick={toggleCartModal}>
            Check Out
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  z-index: 999;
  background: var(--background);
  .cart {
    margin: 0 auto;
    padding: 0.5rem 0.5rem;
    min-height: calc(100vh - 4rem);
    display: grid;
    grid-template-rows: auto 1fr 100px;
  }
  .cart-title {
    text-align: center;
  }
  .shop-now {
    text-align: center;
  }
  .close-btn {
    font-size: 1.8rem;
    color: red;
    border: none;
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .close-btn:hover {
    transform: rotate(90deg);
  }
  .cart-container {
    overflow-x: hidden;
    max-height: calc(100vh - 17.5rem);
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
`
export default CartModal
