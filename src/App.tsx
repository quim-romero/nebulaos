import Container from './components/Container'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Container className="py-10 text-center text-2xl font-bold text-primary">
          Welcome to NebulaOS
        </Container>
      </main>
      <ThemeToggle />
    </>
  )
}

export default App
