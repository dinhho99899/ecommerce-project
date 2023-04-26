import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
    <Wrapper className='section section-center '>
      <div>
        <img src='./images/image7.png' alt='name' className='cate-img'></img>
      </div>
      <div>
        <img src='./images/image8.jpg' alt='name' className='cate-img'></img>
      </div>
      <div>
        <img src='./images/image9.png' alt='name' className='cate-img'></img>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`
export default Category
