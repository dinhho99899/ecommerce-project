import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/CartReducer'
import { useProductsContext } from './ProductsContext'
const Context = createContext()
const getLocalCart = () => {
  let cart = localStorage.getItem('cart')
  cart ? (cart = JSON.parse(localStorage.getItem('cart'))) : (cart = [])
  return cart
}

const initalState = {
  cart: getLocalCart(),
  total_amount: 0,
  total_item: 0,
  shipping_fee: 0,
}
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const { filtered_products: products } = useProductsContext()
  const addToCart = (id, amount, color, product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, amount, color, product, products },
    })
  }
  const setLocalCart = () => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  const toggleAmount = (idx, value) => {
    console.log(idx)
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { idx, value } })
  }
  useEffect(() => {
    dispatch({ type: 'HANDLE_TOTAL' })
    setLocalCart()
  }, [state.cart])
  return (
    <Context.Provider value={{ ...state, addToCart, removeItem, toggleAmount }}>
      {children}
    </Context.Provider>
  )
}
export const useCartContext = () => {
  return useContext(Context)
}
export default CartContext
