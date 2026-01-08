import styled from 'styled-components'

export const Card = styled.article`
  background: #fff;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.08);
  padding: 14px;
  display: grid;
  gap: 10px;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #111;
`

export const Meta = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const Badge = styled.span<{ $tone?: 'dark' | 'soft' }>`
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.12);
  background: ${({ $tone }) => ($tone === 'dark' ? '#111' : 'rgba(0,0,0,0.04)')};
  color: ${({ $tone }) => ($tone === 'dark' ? '#fff' : '#111')};
`

export const Description = styled.p`
  margin: 0;
  color: #333;
  opacity: 0.9;
  line-height: 1.45;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`

export const Small = styled.span`
  font-size: 12px;
  color: #444;
  opacity: 0.9;
`

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 10px;
  background: #111;
  color: #fff;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
