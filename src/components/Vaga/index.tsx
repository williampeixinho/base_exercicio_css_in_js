import { Button, Card, Line, Title } from './styles'

type Props = {
  titulo: string
  localizacao: string
  senioridade: string
  tipo: string
  salarioMin: number
  salarioMax: number
  requisitos: string
  link: string
}

const Vaga = ({
  titulo,
  localizacao,
  senioridade,
  tipo,
  salarioMin,
  salarioMax,
  requisitos,
  link
}: Props) => (
  <Card>
    <Title>{titulo}</Title>
    <Line>Localização: {localizacao}</Line>
    <Line>Senioridade: {senioridade}</Line>
    <Line>Tipo de contratação: {tipo}</Line>
    <Line>
      Salário: {salarioMin} - {salarioMax}
    </Line>
    <Line>Requisitos: {requisitos}</Line>
    <Button href={link} target="_blank" rel="noreferrer">
      Ver detalhes e candidatar-se
    </Button>
  </Card>
)

export default Vaga
