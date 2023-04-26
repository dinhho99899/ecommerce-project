import React from 'react'
import styled from 'styled-components'
import { links } from '../data'
import { Link } from 'react-router-dom'
const Links = () => {
  return (
    <Wrapper>
      {links.map((l) => {
        const { id, link, text } = l
        return (
          <Link to={link} key={id} className='link'>
            {text}
          </Link>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.ul`
  display: flex;
  column-gap: 1.5rem;
  height: auto;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
  }
  .link:hover {
    color: var(--primary6);
  }
`
export default Links
