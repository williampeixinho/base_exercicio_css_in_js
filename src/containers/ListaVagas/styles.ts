import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Empty = styled.div`
  padding: 18px;
  background: rgba(0,0,0,0.04);
  border: 1px dashed rgba(0,0,0,0.18);
  border-radius: 14px;
  color: #222;
`
