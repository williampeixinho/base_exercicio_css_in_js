import Vaga from '../Vaga'
import { Empty, Grid, Wrapper } from './styles'

type VagaItem = {
  id: string | number
  titulo: string
  descricao: string
  nivel: string
  localizacao?: string
  link?: string
}

type Props = {
  vagas: VagaItem[]
}

const ListaVagas = ({ vagas }: Props) => (
  <Wrapper>
    {vagas.length === 0 ? (
      <Empty>Nenhuma vaga encontrada.</Empty>
    ) : (
      <Grid>
        {vagas.map((v) => (
          <Vaga
            key={v.id}
            titulo={v.titulo}
            descricao={v.descricao}
            nivel={v.nivel}
            localizacao={v.localizacao}
            link={v.link}
          />
        ))}
      </Grid>
    )}
  </Wrapper>
)

export default ListaVagas
