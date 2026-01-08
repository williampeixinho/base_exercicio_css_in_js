import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button, Card, Form, Input, Wrapper } from './styles'

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
    <Wrapper>
      <Card>
        <Form onSubmit={submit}>
          <Input
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            placeholder="front-end, fullstack, node, design"
          />
          <Button type="submit">Pesquisar</Button>
        </Form>
      </Card>
    </Wrapper>
  )
}

export default FormVagas
