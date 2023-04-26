import React from 'react'
import styled from 'styled-components'
import Breadcums from '../components/Breadcums'
export const About = () => {
  return (
    <>
      <Wrapper className='section'>
        <Breadcums title='About' />
        <div className='about-section section-center section'>
          <img src='./images/image8.jpg' alt='about'></img>
          <div className='about-info'>
            <h2>About Us</h2>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              et repellat iste veritatis dolor nostrum, ab libero, numquam
              possimus aliquid voluptate aut architecto incidunt ipsam fugiat
              optio sequi similique qui!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  padding-top: 4rem;
  min-height: calc(100vh - 18rem);
  display: grid;
  .about-section {
    display: grid;
    max-width: 960px;
    margin: 0 auto;
  }
  .about-info {
    margin-top: 1rem;
  }
  img {
    border-radius: 0.5rem;
  }
  .underline {
    width: 50px;
    height: 0.2rem;
    background: var(--color1);
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    .about-section {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
`
