const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id, amount, color, product } = action.payload
      let tempCarts = state.cart.find((item) => item.id === id + color)
      if (tempCarts) {
        tempCarts = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount
            return { ...item, amount: newAmount }
          }
          return item
        })
        return { ...state, cart: tempCarts }
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          amount: amount,
          price: product.price,
          color: color,
          image: product.images[0].url,
        }
        return { ...state, cart: [...state.cart, newItem] }
      }

    case 'HANDLE_TOTAL':
      const { total_item, total_amount } = state.cart.reduce(
        (total, item) => {
          total.total_item += item.amount
          total.total_amount += item.amount * item.price
          return total
        },
        {
          total_item: 0,
          total_amount: 0,
        }
      )
      return { ...state, total_amount: total_amount, total_item: total_item }
    case 'REMOVE_ITEM':
      const tempCart = state.cart.filter((item) => {
        return item.id !== action.payload
      })
      return { ...state, cart: tempCart }
    case 'TOGGLE_AMOUNT':
      const { idx, value } = action.payload
      const tempCartItems = state.cart.map((item) => {
        if (item.id === idx) {
          if (value === 'increase') {
            let newAmount = item.amount + 1
            return { ...item, amount: newAmount }
          }
          if (value === 'decrease') {
            let newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }
            return { ...item, amount: newAmount }
          }
        }
        return item
      })
      return { ...state, cart: tempCartItems }
  }
}

export default reducer
