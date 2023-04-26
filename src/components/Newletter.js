import React from 'react'
import styled from 'styled-components'

const Newletter = () => {
  return (
    <Wrapper className='section section-center'>
      <div className='newletter'>
        <h2>Subscribe to our Newsletter</h2>
        <div className='form-input'>
          <input
            type='text'
            placeholder='Your email address'
            className='input'
          />
          <button className='btn sub' type='submit'>
            Subscribe
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 2rem 1rem;
  background-image: url('./images/image10.jpg');
  h2 {
    margin: 0;
    padding: 1rem 0;
  }
  .input {
    padding: 0.8rem 1.4rem;
    border-radius: 0.5rem;
    background: var(--color4);
    border: none;
    margin-right: 1rem;
  }
  .sub {
    padding: 0.7rem 0.8rem;
  }
  @media screen and (min-width: 992px) {
    .newletter {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;
      align-items: center;
    }
  }
`
export default Newletter
