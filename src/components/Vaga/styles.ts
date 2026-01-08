import styled from 'styled-components'

export const Card = styled.article`
  background: #f8f1e8;
  border: 1px solid #d8aab3;
  border-radius: 6px;
  padding: 18px;
`

export const Title = styled.h3`
  margin: 0 0 12px;
  font-size: 18px;
  color: #8b4e5a;
  font-weight: 700;
`

export const Line = styled.p`
  margin: 6px 0;
  font-size: 14px;
  color: #8b4e5a;
  line-height: 1.45;
`

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 14px;
  margin-top: 14px;
  border-radius: 4px;
  background: #8b4e5a;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    filter: brightness(1.06);
  }
`
