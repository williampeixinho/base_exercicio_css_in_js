import styled from 'styled-components'

export const Wrapper = styled.section<{ $bg: string }>`
  position: relative;
  height: 240px;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #eadfda;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(124, 72, 84, 0.6);
  }
`

export const Container = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  margin: 0;
  max-width: 820px;
  text-align: center;
  font-size: 34px;
  line-height: 1.15;
  color: #fff;
  font-weight: 700;
`
