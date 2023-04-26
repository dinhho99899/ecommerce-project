import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { CartItem } from '../components'
import FormRow from '../components/FormRow'
import FormArea from '../components/FormArea'
const CheckoutPage = () => {
  const { cart, total_amount } = useCartContext()
  if (cart.length <= 0) {
    return (
      <Wrapper>
        <div className='section section-center'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            Shop Now
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div className='section section-center'>
        <div className='cart-page'>
          <div className='customer-info'>
            <form className='form'>
              <FormRow name='name' type='text'></FormRow>
              <FormRow name='email' type='email'></FormRow>
              <FormRow name='address' type='text'></FormRow>
              <FormArea name='address' type='text'></FormArea>
            </form>
            <div className='info'>
              <p>Subtotal: ${total_amount / 1000}</p>
              <p>Shipping fee: $2.00</p>
              <hr />
              <h4>Order Total: ${total_amount / 1000 + 2} </h4>
              <button className='btn checkout'>Checkout</button>
            </div>
          </div>
          <div className='cart-info'>
            <div className='cart-title'>
              <h4>Name</h4>
              <h4>Quantity</h4>
              <hr />
            </div>
            <div className='cart-items'>
              {cart.map((item, index) => {
                return <CartItem key={item.id} {...item} />
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  padding-top: 4rem;
  min-height: calc(100vh - 4rem);
  .cart-page {
    display: grid;
    gap: 2rem;
  }
  .form {
    display: grid;
  }
  .cart-title {
    display: grid;
    grid-template-columns: 260px 1fr 1fr;
    text-align: center;
    padding: 0.5rem 0;
  }
  h4 {
    margin: 0;
  }
  .info {
    padding: 1rem;
    background: var(--color4);
    border-radius: 0.5rem;
    margin-right: 0;
  }
  .info h4 {
    margin-top: 1rem;
  }
  .checkout {
    margin-top: 1rem;
  }
  .cart-items {
    max-height: calc(100vh - 10rem);
    overflow-x: hidden;
  }
  @media screen and (min-width: 768px) {
    .cart-page {
      grid-template-columns: 1fr 1fr;
    }
  }
`
export default CheckoutPage
