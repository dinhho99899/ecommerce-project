import React from 'react'
import styled from 'styled-components'
const Breadcums = ({ title, product }) => {
  return (
    <Wrapper>
      <h2>
        {title}
        {product && ` / ${product}`}
      </h2>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100px;
  background: url('./images/Background.png') center / cover;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
`
export default Breadcums
