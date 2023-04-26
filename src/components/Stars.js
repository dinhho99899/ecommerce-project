import React from 'react'
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs'
import styled from 'styled-components'
const Stars = ({ numbers }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    if (numbers >= index + 1) {
      return <BsStarFill />
    } else if (numbers >= number) {
      return <BsStarHalf />
    } else {
      return <BsStar />
    }
  })
  return (
    <Wrapper>
      {stars.map((star, index) => {
        return <span key={index}>{star}</span>
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  color: #ffa858;
`
export default Stars
