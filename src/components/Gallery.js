import React, { useState } from 'react'
import styled from 'styled-components'

const Gallery = ({ images = [] }) => {
  const [index, setIndex] = useState(0)
  const mainImg = images[index]?.url

  return (
    <Wrapper className='gallery'>
      <div className='main'>
        <img src={mainImg} className='main-img' alt='main'></img>
      </div>
      <div className='btn-container'>
        {images?.map((image, indexx) => {
          return (
            <img
              key={indexx}
              src={image.url}
              alt='img'
              className={index === indexx ? 'img active' : 'img'}
              onClick={() => {
                setIndex(indexx)
              }}
            ></img>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .img {
    cursor: pointer;
    height: 80px;
    object-fit: cover;
    border-radius: 0.4rem;
  }
  .active {
    opacity: 0.7;
    border: 2px solid var(--color1);
  }
  .img:hover {
    opacity: 0.7;
  }
  .main {
    overflow: hidden;
    margin-bottom: 0.5rem;
    border-radius: 0.4rem;

    object-fit: cover;
  }
  .main-img {
    transition: var(--transition);
    height: 450px;
  }
  .main:hover .main-img {
    transform: scale(1.05);
  }
  .btn-container {
    display: grid;
    gap: 0.3rem;
    margin-bottom: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`
export default Gallery
