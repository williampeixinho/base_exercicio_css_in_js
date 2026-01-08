import { useMemo, useState } from 'react'
import { Button, Card, Field, Form, Input, Label, Select, Wrapper } from './styles'

type Props = {
  termoInicial?: string
  nivelInicial?: string
  onPesquisar?: (termo: string) => void
  onFiltrarNivel?: (nivel: string) => void
  niveis?: string[]
}

const FormVagas = ({
  termoInicial = '',
  nivelInicial = 'Todos',
  onPesquisar,
  onFiltrarNivel,
  niveis
}: Props) => {
  const [termo, setTermo] = useState(termoInicial)
  const [nivel, setNivel] = useState(nivelInicial)

  const listaNiveis = useMemo(() => {
    const base = niveis?.length ? niveis : ['Todos', 'Júnior', 'Pleno', 'Sênior']
    return base
  }, [niveis])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    onPesquisar?.(termo)
    onFiltrarNivel?.(nivel)
  }

  return (
    <Wrapper>
      <Card>
        <Form onSubmit={submit}>
          <Field>
            <Label htmlFor="termo">Buscar</Label>
            <Input
              id="termo"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              placeholder="Ex: Front-end, React, Designer..."
            />
          </Field>

          <Field>
            <Label htmlFor="nivel">Nível</Label>
            <Select
              id="nivel"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            >
              {listaNiveis.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
          </Field>

          <Button type="submit">Filtrar</Button>
        </Form>
      </Card>
    </Wrapper>
  )
}

export default FormVagas
