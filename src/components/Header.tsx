import { useState } from 'react'
import Container from './Container'

const Header = () => {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-sm
                       bg-white/70 dark:bg-black/60 backdrop-blur-md"
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-gray-900 dark:text-gray-100"
        >
          <span>Nebula</span>
          <span className="text-teal-700 dark:text-teal-300">OS</span>
        </a>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a
            href="#what"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            What
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Demo
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md
                     text-gray-900 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </Container>

      {open && (
        <nav
          className="md:hidden bg-white/70 dark:bg-black/60 backdrop-blur-md
               border-t border-black/5 dark:border-white/10 shadow-sm"
        >
          <a
            href="#what"
            className="block py-3 px-4 text-gray-800 hover:bg-black/5
                 dark:text-gray-200 dark:hover:bg-white/10"
            onClick={closeMenu}
          >
            What
          </a>
          <a
            href="#features"
            className="block py-3 px-4 text-gray-800 hover:bg-black/5
                 dark:text-gray-200 dark:hover:bg-white/10"
            onClick={closeMenu}
          >
            Features
          </a>
          <a
            href="#demo"
            className="block py-3 px-4 text-gray-800 hover:bg-black/5
                 dark:text-gray-200 dark:hover:bg-white/10"
            onClick={closeMenu}
          >
            Demo
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
