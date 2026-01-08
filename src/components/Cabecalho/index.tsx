import { Brand, Container, Header, Pill, Right, Subtitle, Title } from './styles'

type Props = {
  totalVagas?: number
}

const Cabecalho = ({ totalVagas }: Props) => (
  <Header>
    <Container>
      <Brand>
        <Title>EBAC Sports</Title>
        <Subtitle>Vagas e oportunidades</Subtitle>
      </Brand>
      <Right>
        {typeof totalVagas === 'number' && <Pill>{totalVagas} vagas</Pill>}
      </Right>
    </Container>
  </Header>
)

export default Cabecalho
