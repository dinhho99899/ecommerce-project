import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <h2>Error</h2> <h2>Error</h2> <h2>Error</h2>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding-top: 4rem;
  min-height: calc(100vh - 18rem);
`
export default Error
