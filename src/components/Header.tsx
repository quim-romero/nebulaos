import Container from './Container'

const Header = () => {
  return (
    <header className="w-full py-4 fixed top-0 left-0 bg-white/80 dark:bg-black/60 backdrop-blur-md z-50 shadow-sm">
      <Container className="flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-dark dark:text-light"
        >
          <span>Nebula</span>
          <span className="text-primary">OS</span>
        </a>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-muted dark:text-muted/80">
          <a href="#what" className="hover:text-dark dark:hover:text-light">
            What
          </a>
          <a href="#features" className="hover:text-dark dark:hover:text-light">
            Features
          </a>
          <a href="#demo" className="hover:text-dark dark:hover:text-light">
            Demo
          </a>
        </nav>
      </Container>
    </header>
  )
}

export default Header
