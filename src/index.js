import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ProductsContext from './context/ProductsContext'
import FiltersContext from './context/FiltersContext'
import CartContext from './context/CartContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ProductsContext>
    <FiltersContext>
      <CartContext>
        <App />
      </CartContext>
    </FiltersContext>
  </ProductsContext>
)
