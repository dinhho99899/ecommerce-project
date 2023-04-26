import React from 'react'
import styled from 'styled-components'
import { CiMail } from 'react-icons/ci'
const News = () => {
  return (
    <Wrapper className='section section-center'>
      <div className='title'>
        <h3>News </h3>
        <h2>
          Discover weekly content <br />
          about organic food, & more
        </h2>
      </div>
      <div className='news'>
        <article className='new'>
          <div className='img-container'>
            <img src='./images/image8.jpg' alt='new1' className='new-img'></img>
            <span className='date'>25 Jan</span>
          </div>
          <div className='info'>
            <div className='header'>
              <CiMail />
              <h4>By Rachi Card</h4>
            </div>
            <h4 className='title'>The Benefits of Vitamin D & How to Get It</h4>
            <p className='text'>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <button className='btn'>Read more</button>
          </div>
        </article>
        <article className='new'>
          <div className='img-container'>
            <img src='./images/image8.jpg' alt='new1' className='new-img'></img>
            <span className='date'>25 Jan</span>
          </div>
          <div className='info'>
            <div className='header'>
              <CiMail />
              <h4>By Rachi Card</h4>
            </div>
            <h4 className='title'>The Benefits of Vitamin D & How to Get It</h4>
            <p className='text'>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <button className='btn'>Read more</button>
          </div>
        </article>
        <article className='new'>
          <div className='img-container'>
            <img src='./images/image8.jpg' alt='new1' className='new-img'></img>
            <span className='date'>25 Jan</span>
          </div>
          <div className='info'>
            <div className='header'>
              <CiMail />
              <h4>By Rachi Card</h4>
            </div>
            <h4 className='title'>The Benefits of Vitamin D & How to Get It</h4>
            <p className='text'>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <button className='btn'>Read more</button>
          </div>
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .img-container {
    position: relative;
  }
  .info {
    padding: 1rem 0.7rem;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: var(--color5);
    display: grid;
  }
  .news {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.2rem;
  }
  .new {
    position: relative;
  }
  .new-img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .date {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: var(--color1);
    font-weight: bold;
  }
  .header {
    display: flex;
    column-gap: 0.5rem;
    font-size: 1.5rem;
    align-items: center;
  }
  h4 {
    margin: 0.5rem 0;
  }

  .btn {
    justify-self: center;
  }
`
export default News
