const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD':
      return { ...state, isLoading: true }

    case 'LOAD_PRODUCTS':
      let x = action.payload.map((i) => i.price)
      let maxPrice = Math.max(...x)
      let minPrice = Math.min(...x)

      return {
        ...state,
        all_products: action.payload,
        filtered_products: action.payload,
        isLoading: false,
        filters: {
          ...state.filters,
          min_price: minPrice,
          max_price: maxPrice,
          price: maxPrice,
        },
      }
    case 'HANDLE_SORT':
      return { ...state, sort: action.payload }
    case 'SORT_PRODUCTS':
      const { sort, filtered_products } = state
      let temP = [...filtered_products]

      if (state.sort === 'price-lowest') {
        temP = temP.sort((a, b) => a.price - b.price)
      }
      if (state.sort === 'price-highest') {
        temP = temP.sort((a, b) => b.price - a.price)
      }
      if (state.sort === 'name-a') {
        temP = temP.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (state.sort === 'name-z') {
        temP = temP.sort((a, b) => b.name.localeCompare(a.name))
      }

      return { ...state, filtered_products: temP }
    case 'HANDLE_FILTERS':
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          category: 'all',
          company: 'all',
          color: 'all',
          price: state.filters.max_price,
          shipping: false,
        },
      }

    case 'FILTERS':
      const { text, category, company, color, shipping, price } = state.filters
      let tempProducts = [...state.all_products]
      if (text) {
        tempProducts = tempProducts.filter((e) => {
          return e.name.startsWith(text)
        })
      }
      if (category !== 'all') {
        tempProducts = tempProducts.filter((e) => {
          return e.category == category
        })
      }
      if (company !== 'all') {
        tempProducts = tempProducts.filter((e) => {
          return e.company == company
        })
      }
      if (color !== 'all') {
        tempProducts = tempProducts.filter((e) => {
          return e.colors.find((c) => c === color)
        })
      }
      if (shipping === true) {
        tempProducts = tempProducts.filter((e) => {
          return e.shipping === true
        })
      }
      //price
      tempProducts = tempProducts.filter((e) => e.price <= price)
      return { ...state, filtered_products: tempProducts }
  }
}
export default reducer
