import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 16px 56px;
`

export const Grid = styled.div`
  width: 900px;
  max-width: calc(100% - 32px);
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
`

export const Empty = styled.div`
  width: 900px;
  max-width: calc(100% - 32px);
  margin-top: 16px;
  color: #8b4e5a;
  font-size: 13px;
`
