import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
const AmountBtns = ({ increaseAmount, amount, decreaseAmount }) => {
  return (
    <Wrapper className='amount-container'>
      <button className='trans-btn' onClick={decreaseAmount}>
        <AiOutlineMinus />
      </button>
      <h4>{amount}</h4>
      <button className='trans-btn' onClick={increaseAmount}>
        <AiOutlinePlus />
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  h4,
  p {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }
`
export default AmountBtns
