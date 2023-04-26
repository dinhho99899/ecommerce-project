import React from 'react'
import styled from 'styled-components'

const FormRow = ({ name, type }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{name}:</label>
      <input
        name={name}
        type={type}
        placeholder={name}
        className='form-input'
      ></input>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-transform: capitalize;
  margin-bottom: 1rem;
  .form-input {
    padding: 0.5rem 1rem;
    border-radius: var(--border);
    border: none;
    background: var(--color5);
    display: block;
    margin-top: 0.3rem;
    width: 100%;
  }
  .form-input::placeholder {
    text-transform: capitalize;
    padding-left: 0.3rem;
  }
`
export default FormRow
