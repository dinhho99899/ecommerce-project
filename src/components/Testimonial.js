import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Stars from './Stars'
import { Reviews } from '../data'
const Testimonial = () => {
  const [index, setIndex] = useState(0)
  const person = Reviews[index]

  useEffect(() => {
    const inT = setInterval(() => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex + 1
        if (newIndex >= Reviews.length) {
          newIndex = 0
        }
        return newIndex
      })
    }, 2000)

    return () => {
      clearInterval(inT)
    }
  }, [])
  const { id, text, name, position, img, stars } = person
  return (
    <Wrapper>
      <div className='title'>
        <h3>Testimonial </h3>
        <h2>What Our Customer Saying?</h2>
      </div>
      <div className='section section-center testimonial'>
        <div className='article'>
          <img src={img} alt='s' className='img'></img>
          <Stars numbers={stars} />
          <p className='text'>{text}</p>
          <h4>{name}</h4>
          <h6>{position}</h6>
        </div>
        <div className='btn-container'>
          {Reviews.map((item, indexs) => {
            return (
              <div
                className={
                  indexs === index ? 'reviews-btn active' : 'reviews-btn'
                }
                key={item.id}
                onClick={(e) => {
                  setIndex(indexs)
                }}
              ></div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: url('./images/Background.png') center/cover fixed no-repeat;
  max-width: 2000px;
  margin: 0 auto;
  padding: 1rem 0;
  .section-center {
    text-align: center;
    max-width: 800px;
  }
  .title {
    text-align: center;
  }
  .img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .testimonial {
    position: relative;
  }
  .text {
    max-width: 500px;
    margin: 0.5rem auto;
  }
  .btn-container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    column-gap: 0.5rem;
  }
  .reviews-btn {
    width: 12px;
    height: 12px;
    background: var(--color4);
    border-radius: 50%;
    cursor: pointer;
  }
  .active {
    background: #7eb693;
  }
`
export default Testimonial
