import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Wrapper>
      <div className='hero-section'>
        <img src='./images/Banner.png' alt='banner'></img>
        <div className='banner-info'>
          <h3>100% Natural Food</h3>
          <h2>
            Choose the best <br /> healthier way <br />
            of life
          </h2>
          <Link to='/products' className='btn hero-btn'>
            Explore More
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  max-width: 2000px;
  margin: 0 auto;
  padding-top: 4rem;
  .hero-section {
    position: relative;
  }
  .banner-info {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
`
export default Hero
