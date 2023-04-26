import React from 'react'
import styled from 'styled-components'
import { links } from '../data'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/ProductsContext'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  return (
    <Wrapper
      className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
    >
      <ul className='links'>
        {links.map((l) => {
          const { id, link, text } = l
          return (
            <Link to={link} key={id} className='link' onClick={closeSidebar}>
              {text}
            </Link>
          )
        })}
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link {
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }
  .link:hover {
    color: var(--primary6);
    background: var(--color4);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export default Sidebar
