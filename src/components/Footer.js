import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo.png'
const Footer = () => {
  return (
    <Wrapper className='section-center '>
      <div className='footer'>
        <div className='contact'>
          <h2>Contacts Us</h2>
          <h4>Email</h4>
          <p>dinhho@gmail.com</p>
          <h4>Phone</h4>
          <p>0837139604</p>
          <h4>Address</h4>
          <p>73/10 46 street</p>
        </div>
        <div className='wed-info'>
          <div className='logo'>
            <img src={Logo} alt='logo' className='nav-logo'></img>
            <h3>Organick</h3>
          </div>
          <p className='text'>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
        </div>
        <div className='links'>
          <h2>Utility Pages</h2>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Products</a>
            </li>
            <li>
              <a href='#'>Policy</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .footer {
    display: grid;
    padding-top: 1.5rem;
  }
  .wed-info {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .logo h3 {
    margin: 0 0.5rem;
  }
  .social-links {
    display: flex;
    gap: 1rem;

    font-size: 1.5rem;
  }
  .icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
    background: red;
  }
  @media screen and (min-width: 992px) {
    .footer {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .social-links {
      justify-self: center;
    }
  }
`
export default Footer
