import React from 'react'
import styled from 'styled-components'

const Info = () => {
  return (
    <Wrapper className='section section-center'>
      <div className='info-section'>
        <div className='info'>
          <img src='./images/image4.png' alt='s' className='img'></img>
          <div className='info-text'>
            <h3>Natural</h3>
            <h2>
              Get Garden
              <br /> Fresh Fruits
            </h2>
          </div>
        </div>
        <div className='info'>
          <img src='./images/image4.png' alt='s' className='img'></img>
          <div className='info-text'>
            <h3>Natural</h3>
            <h2>
              Get Garden
              <br /> Fresh Fruits
            </h2>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .info-section {
    display: grid;
    gap: 2rem;
  }
  .info {
    display: block;
    position: relative;
  }
  .info-text {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
  }
  @media screen and (min-width: 992px) {
    .info-section {
      grid-template-columns: 1fr 1fr;
    }
  }
`
export default Info
