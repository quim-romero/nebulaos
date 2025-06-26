import { FiGithub, FiTwitter, FiGlobe } from 'react-icons/fi'
import Container from './Container'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-[#111] text-sm transition-colors duration-300">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left pt-16 pb-12">
        <div>
          <div className="font-bold text-dark dark:text-light mb-1">
            Nebula<span className="text-primary">OS</span>
          </div>
          <p className="max-w-sm text-gray-700 dark:text-gray-300">
            NebulaOS is a fictional product built to push the limits of frontend
            storytelling and interaction.
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-dark dark:hover:text-light transition-colors"
          >
            <FiGithub />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-dark dark:hover:text-light transition-colors"
          >
            <FiTwitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="#"
            aria-label="Website"
            className="hover:text-dark dark:hover:text-light transition-colors"
          >
            <FiGlobe />
            <span className="sr-only">Web</span>
          </a>
        </div>
      </Container>

      <Container className="mt-8 text-center border-t border-gray-200 dark:border-gray-800 pt-10 pb-12">
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
          © {currentYear} NebulaOS. Built by Quim Romero — with obsession for
          detail, clarity, and feel.
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Curious developer? Try{' '}
          <code className="px-1 rounded bg-gray-200 dark:bg-[#222] text-gray-700 dark:text-gray-200">
            Ctrl + Shift + D
          </code>
          .
        </p>
      </Container>
    </footer>
  )
}

export default Footer
