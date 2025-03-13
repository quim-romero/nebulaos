import Container from './components/Container'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="pt-24">
        <Container className="py-10 text-center text-2xl font-bold text-primary">
          Welcome to NebulaOS
        </Container>
      </div>
      <ThemeToggle />
    </>
  )
}

export default App
