import { useMemo, useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { Empty, Grid, Wrapper } from './styles'

type VagaItem = {
  id: number
  titulo: string
  localizacao: string
  senioridade: string
  tipo: string
  salarioMin: number
  salarioMax: number
  requisitos: string
  link: string
}

const VAGAS: VagaItem[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    senioridade: 'junior',
    tipo: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: 'HTML, CSS, JavaScript, JQuery',
    link: 'https://example.com'
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    senioridade: 'pleno',
    tipo: 'contratacao pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: 'Node, APIs, Express, SQL',
    link: 'https://example.com'
  },
  {
    id: 3,
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    senioridade: 'pleno',
    tipo: 'contratacao pj',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: 'React, Node, SQL',
    link: 'https://example.com'
  },
  {
    id: 4,
    titulo: 'Designer de interfaces',
    localizacao: 'remoto',
    senioridade: 'junior',
    tipo: 'contratacao clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: 'Figma, UX, UI',
    link: 'https://example.com'
  },
  {
    id: 5,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    senioridade: 'pleno',
    tipo: 'contratacao clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: 'React, TypeScript, CSS',
    link: 'https://example.com'
  },
  {
    id: 6,
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'remoto',
    senioridade: 'senior',
    tipo: 'contratacao pj',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: 'React, TypeScript, English',
    link: 'https://example.com'
  },
  {
    id: 7,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    senioridade: 'junior',
    tipo: 'contratacao clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: 'HTML, CSS, JavaScript',
    link: 'https://example.com'
  }
]

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s,.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const tokens = (s: string) =>
  norm(s)
    .split(/[,\s]+/g)
    .map((t) => t.trim())
    .filter(Boolean)

const ListaVagas = () => {
  const [termo, setTermo] = useState('')

  const vagasFiltradas = useMemo(() => {
    const ts = tokens(termo)
    if (ts.length === 0) return VAGAS

    return VAGAS.filter((v) => {
      const hay = norm(
        `${v.titulo} ${v.requisitos} ${v.localizacao} ${v.senioridade} ${v.tipo}`
      )
      return ts.some((t) => hay.includes(t))
    })
  }, [termo])

  return (
    <Wrapper>
      <FormVagas onPesquisar={(t) => setTermo(t)} />
      {vagasFiltradas.length === 0 ? (
        <Empty>Nenhuma vaga encontrada.</Empty>
      ) : (
        <Grid>
          {vagasFiltradas.map((v) => (
            <Vaga
              key={v.id}
              titulo={v.titulo}
              localizacao={v.localizacao}
              senioridade={v.senioridade}
              tipo={v.tipo}
              salarioMin={v.salarioMin}
              salarioMax={v.salarioMax}
              requisitos={v.requisitos}
              link={v.link}
            />
          ))}
        </Grid>
      )}
    </Wrapper>
  )
}

export default ListaVagas
