import styled from 'styled-components'
import { Container as BaseContainer } from '../../styles'

export const Wrapper = styled(BaseContainer)``

export const Empty = styled.p`
  margin-top: 32px;
  color: var(--cor-principal);
  text-align: center;
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
