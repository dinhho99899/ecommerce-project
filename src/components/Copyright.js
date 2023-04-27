import React from 'react'
import styled from 'styled-components'

const Copyright = () => {
  return (
    <Wrapper>
      <p>
        Copyright &copy; | Designed by <span>NtvNuts</span>
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  justify-content: center;
  background: var(--color1);
  padding: 1rem 0;
  p {
    margin: 0;
    color: var(--color3);
  }
  span {
    color: var(--color3);
  }
`
export default Copyright
