import styled from 'styled-components'

export const Header = styled.header`
  background: #111;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.08);
`

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  letter-spacing: 0.2px;
`

export const Subtitle = styled.span`
  font-size: 12px;
  opacity: 0.8;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Pill = styled.span`
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
`
