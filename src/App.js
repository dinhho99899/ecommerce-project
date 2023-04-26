import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import { Navbar, Footer, Copyright } from './components'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'
import Services from './pages/Services'
import { About } from './pages/About'
import CheckoutPage from './pages/CheckoutPage'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/services' element={<Products />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/products/:id' element={<SingleProduct />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
      <Copyright />
    </BrowserRouter>
  )
}

export default App
