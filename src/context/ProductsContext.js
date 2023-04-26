import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/productReducers'
const url = 'https://course-api.com/react-store-products'
const initalState = {
  isCartModal: false,
  isSidebarOpen: false,
  isLoading: false,
  isError: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product: {},
}

const GlobalContext = createContext()
const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const toggleCartModal = () => {
    dispatch({ type: 'SET_MODAL' })
  }
  const openCartModal = () => {
    dispatch({ type: 'SET_MODAL_OPEN' })
  }
  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }
  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' })
  }
  const fetchProducts = async (url) => {
    try {
      dispatch({ type: 'LOAD' })
      const reponse = await fetch(url)
      const data = await reponse.json()
      dispatch({ type: 'LOAD_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'ERROR' })
    }
  }
  useEffect(() => {
    fetchProducts(url)
  }, [])
  const fetchSingleProduct = async (url) => {
    dispatch({ type: 'FETCH_SINGLE_LOADING' })
    try {
      const data = await fetch(url)
      const product = await data.json()
      dispatch({ type: 'FETCH_SINGLE_SUCCESS', payload: product })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        toggleCartModal,
        dispatch,
        fetchSingleProduct,
        openCartModal,
        toggleSidebar,
        closeSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export const useProductsContext = () => {
  return useContext(GlobalContext)
}
export default ProductsContext
