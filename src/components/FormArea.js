import React from 'react'
import styled from 'styled-components'

const FormArea = ({ name, type }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{name}:</label>
      <textarea
        name={name}
        type={type}
        placeholder={name}
        className='form-input'
      ></textarea>
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
  textarea {
    width: 100%;
    min-height: 80px;
    border-color: transparent;
    padding: 0.35rem 0.75rem;
    border-radius: var(--radius);
    font-size: 1rem;
  }
`
export default FormArea
