import { Badge, Button, Card, Description, Footer, Header, Meta, Small, Title } from './styles'

type Props = {
  titulo: string
  descricao: string
  nivel: string
  localizacao?: string
  link?: string
}

const Vaga = ({ titulo, descricao, nivel, localizacao, link }: Props) => (
  <Card>
    <Header>
      <Title>{titulo}</Title>
      <Badge $tone="dark">{nivel}</Badge>
    </Header>

    <Meta>
      {localizacao && <Badge>{localizacao}</Badge>}
    </Meta>

    <Description>{descricao}</Description>

    <Footer>
      <Small>Atualizada recentemente</Small>
      {link && (
        <Button href={link} target="_blank" rel="noreferrer">
          Ver vaga
        </Button>
      )}
    </Footer>
  </Card>
)

export default Vaga
