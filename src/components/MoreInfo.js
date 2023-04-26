import React from 'react'
import styled from 'styled-components'

const MoreInfo = () => {
  return (
    <Wrapper className='section section-center'>
      <div className='img-container'>
        <img src='./images/image6.jpg' alt='info' className='img'></img>
      </div>
      <div className='info'>
        <div className='title'>
          <h3>Categories </h3>
          <h2>Our Products</h2>
        </div>
        <h4>Start with Our Company First</h4>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
        <h4>Start with Our Company First</h4>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
        <h4>Start with Our Company First</h4>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat
          accusantium doloremque laudantium. Sed ut perspiciatis.
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;

  .info {
    padding: 1rem 1rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    align-items: center;
    .img-container {
      position: relative;
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid red;
      border-color: var(--color2);
      top: -1rem;
      left: -1rem;
      z-index: -5;
    }
    .img {
      max-width: 600px;
      margin: 0 auto;
      align-self: center;
    }
    p {
      max-width: 600px;
    }
    .info {
      background: var(--background);
      position: relative;
      left: -5rem;
      border-radius: 1rem;
    }
  }
`
export default MoreInfo
