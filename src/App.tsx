import Container from './components/Container'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <>
      <Container className="py-10 text-center text-2xl font-bold text-primary">
        Welcome to NebulaOS
      </Container>
      <ThemeToggle />
    </>
  )
}

export default App
