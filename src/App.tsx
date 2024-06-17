import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/sobre'
import Projetos from './containers/projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
