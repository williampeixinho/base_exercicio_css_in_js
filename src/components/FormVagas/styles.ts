import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 1100px;
  margin: -18px auto 0;
  padding: 0 16px 18px;
`

export const Card = styled.div`
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 220px 140px;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div`
  display: grid;
  gap: 6px;
`

export const Label = styled.label`
  font-size: 12px;
  color: #333;
  opacity: 0.9;
`

export const Input = styled.input`
  height: 42px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.14);
  outline: none;

  &:focus {
    border-color: rgba(0,0,0,0.35);
  }
`

export const Select = styled.select`
  height: 42px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.14);
  outline: none;
  background: #fff;

  &:focus {
    border-color: rgba(0,0,0,0.35);
  }
`

export const Button = styled.button`
  height: 42px;
  border-radius: 10px;
  border: 0;
  background: #111;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }
`
