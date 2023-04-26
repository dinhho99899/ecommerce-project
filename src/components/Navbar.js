import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsFillMoonFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Links from './Links'
import Logo from '../Logo.png'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'
import { useProductsContext } from '../context/ProductsContext'
import { useCartContext } from '../context/CartContext'
import Sidebar from './Sidebar'
const Navbar = () => {
  const { toggleCartModal, toggleSidebar, isSidebarOpen } = useProductsContext()
  const { total_item } = useCartContext()
  const getLocaltheme = () => {
    let theme = localStorage.getItem('theme')
    if (theme) {
      theme = JSON.parse(localStorage.getItem('theme'))
    } else {
      theme = 'light-theme'
    }
    return theme
  }
  useEffect(() => {
    setLocalStorage()
  }, [theme])
  const [theme, setTheme] = useState(getLocaltheme())
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    }
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt='logo' className='nav-logo'></img>
            </Link>
            <h3>Organick</h3>
          </div>
          <Links />
          <div className='btn-container'>
            <button
              className='nav-btn dark-light-btn'
              type='button'
              onClick={toggleTheme}
            >
              <BsFillMoonFill />
            </button>
            <div className='cartss'>
              <button className='cart-btn nav-btn' onClick={toggleCartModal}>
                <AiOutlineShoppingCart />
              </button>
              <span className='cart-items'>({total_item})</span>
            </div>
            <button
              className={`${isSidebarOpen ? 'nav-btn toggle-btn' : 'nav-btn '}`}
              type='button'
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <CartModal />
      <Sidebar />
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  background: var(--background-nav);
  z-index: 999;
  padding: 0 1rem;
  .nav-center {
    max-width: 992px;
    margin: 0 auto;
  }
  .nav-header {
    height: 4rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    display: flex;
    align-items: center;
    h3 {
      margin: 0 0.5rem;
    }
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 0.5rem;
  }

  .nav-btn {
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 1.6rem;
    margin-right: 0.2rem;
    color: var(--color-icon);
    background: transparent;
    cursor: pointer;
    transition: var(--transition);
  }
  .toggle-btn {
    transform: rotate(90deg);
  }
  .cart-btn {
    position: relative;
    left: 0.3rem;
    font-size: 1.5rem;
  }
  .cartss {
    display: flex;
    background: var(--background-color2);
    border-radius: 1rem;
  }

  .cart-items {
    display: inline-block;
    color: var(--color-icon);
    font-size: 1.1rem;
    padding: 0.375rem 0.75rem;
  }
  .dark-light-btn {
    font-size: 1.2rem;
  }
  .nav-btn:hover {
    color: var(--color-hover);
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
  }
`
export default Navbar
