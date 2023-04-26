import React from 'react'
import styled from 'styled-components'
import { CiMail } from 'react-icons/ci'
import { GiCoconuts, GiChocolateBar } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Breadcums from './Breadcums'
const About = () => {
  return (
    <Wrapper className='section about-section section-center'>
      <img src='./images/about.png' alt='about'></img>
      <div className='about'>
        <h3>About Us</h3>
        <h2>We Believe in Working Accredited Farmers</h2>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className='about-info'>
          <span className='info-img'>
            <GiCoconuts />
          </span>
          <div>
            <h4>Organic Foods Only</h4>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <div className='about-info'>
          <span className='info-img'>
            <GiChocolateBar />
          </span>
          <div>
            <h4>Organic Foods Only</h4>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <Link to='/about' className='btn'>
          About Us
        </Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--background-color1);
  max-width: 2000px;
  margin: 0 auto;
  .about {
    padding: 0 1rem;
  }
  .about-info {
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    padding: 1rem 1.5rem;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .info-img {
    width: 40px;
    height: 40px;
    font-size: 2rem;
    color: var(--color2);
  }
  img {
    border-radius: 50%;
    max-width: 500px;
  }
  p {
    margin: 0;
  }

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`
export default About
