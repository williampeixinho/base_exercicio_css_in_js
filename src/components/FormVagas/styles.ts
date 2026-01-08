import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  width: 900px;
  max-width: calc(100% - 32px);
  background: #f6f1e9;
  border: 1px solid #eadfda;
  border-radius: 8px;
  padding: 14px;
`

export const Form = styled.form`
  display: flex;
  gap: 10px;
`

export const Input = styled.input`
  flex: 1;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #d8c7c2;
  padding: 0 14px;
  outline: none;
  color: #6b3f49;
  background: #fff;
  font-size: 15px;

  &::placeholder {
    color: #b79aa1;
  }

  &:focus {
    border-color: #a46a76;
  }
`

export const Button = styled.button`
  height: 44px;
  padding: 0 18px;
  border: 0;
  border-radius: 6px;
  background: #8b4e5a;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    filter: brightness(1.06);
  }
`
