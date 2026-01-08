import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <ListaVagas />
    </>
  )
}

export default App
