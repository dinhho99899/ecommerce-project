import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/FiltersReducer'
import { useProductsContext } from './ProductsContext'

const Context = createContext()
const initalState = {
  isLoading: false,
  all_products: [],
  filtered_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}

const FiltersContext = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initalState)
  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: products })
  }, [products])
  useEffect(() => {
    dispatch({ type: 'SORT_PRODUCTS' })
  }, [products, state.sort, state.filters])
  useEffect(() => {
    dispatch({ type: 'FILTERS' })
  }, [products, state.filters])
  const handleSort = (e) => {
    const value = e.target.value
    dispatch({ type: 'HANDLE_SORT', payload: value })
  }
  const handleFilters = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
    dispatch({ type: 'HANDLE_FILTERS', payload: { name, value } })
  }
  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
  }
  return (
    <Context.Provider
      value={{ ...state, handleSort, handleFilters, clearFilters }}
    >
      {children}
    </Context.Provider>
  )
}
export const useFiltersContext = () => {
  return useContext(Context)
}
export default FiltersContext
