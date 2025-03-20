import { FiGithub, FiTwitter, FiGlobe } from 'react-icons/fi'
import Container from './Container'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-[#111] text-muted dark:text-muted/80 text-sm transition-colors duration-300">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left pt-16 pb-12">
        <div>
          <div className="font-bold text-dark dark:text-light mb-1">
            Nebula<span className="text-primary">OS</span>
          </div>
          <p className="max-w-sm">
            NebulaOS is a fictional product built to push the limits of frontend
            storytelling and interaction.
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="#"
            className="hover:text-dark dark:hover:text-light transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href="#"
            className="hover:text-dark dark:hover:text-light transition-colors"
          >
            <FiTwitter />
          </a>
          <a
            href="#"
            className="hover:text-dark dark:hover:text-light transition-colors"
          >
            <FiGlobe />
          </a>
        </div>
      </Container>

      <Container className="mt-8 text-center border-t border-muted/10 pt-10 pb-12">
        <p className="text-xs text-muted/80 dark:text-muted/50 mb-2">
          © {currentYear} NebulaOS. Built by Quim Romero — with obsession for
          detail, clarity, and feel.
        </p>
        <p className="text-xs text-muted/60 dark:text-muted/40">
          Curious developer? Try{' '}
          <code className="px-1 rounded bg-muted/10 dark:bg-muted/20">
            Ctrl + Shift + D
          </code>
          .
        </p>
      </Container>
    </footer>
  )
}

export default Footer
