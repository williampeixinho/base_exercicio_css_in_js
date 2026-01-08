import { useState } from 'react'
import type { FormEvent } from 'react'
import { BtnPesquisar, Campo, Form } from './styles'
import { Container } from '../../styles'

type Props = {
  onPesquisar: (termo: string) => void
}

const FormVagas = ({ onPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    onPesquisar(termo)
  }

  return (
    <Container>
      <Form onSubmit={submit}>
        <Campo
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder="front-end, fullstack, node, design"
        />
        <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
      </Form>
    </Container>
  )
}

export default FormVagas
