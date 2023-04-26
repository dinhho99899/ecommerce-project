const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        ...state,
        isCartModal: !state.isCartModal,
      }
    case 'SET_MODAL_OPEN':
      return {
        ...state,
        isCartModal: true,
      }
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen }
    case 'CLOSE_SIDEBAR':
      return { ...state, isSidebarOpen: false }
    case 'LOAD':
      return {
        ...state,
        isLoading: true,
      }
    case 'LOAD_SUCCESS':
      const featuredProducts = action.payload.filter((e) => e.featured === true)
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featured_products: featuredProducts,
      }
    case 'FETCH_SINGLE_LOADING':
      return {
        ...state,
        single_product_loading: true,
      }
    case 'ERROR':
      return { ...state, isError: true }
    case 'FETCH_SINGLE_SUCCESS':
      return {
        ...state,
        single_product: action.payload,
        single_product_loading: false,
      }
  }
}

export default reducer
