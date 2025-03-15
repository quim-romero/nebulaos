import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'

function App() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Features />
      </main>
      <ThemeToggle />
    </>
  )
}

export default App
