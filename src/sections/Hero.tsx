import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/Button'
import Container from '../components/Container'

const Hero = () => {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white text-dark dark:bg-dark dark:text-light transition-colors duration-300"
    >
      <Container className="text-center">
        <motion.h1
          initial={reduce ? false : { opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-gray-900 dark:text-gray-100 text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto"
        >
          More than productivity. <br className="hidden sm:block" />
          <span className="text-primary">Absolute control.</span>
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
          className="mt-10"
        >
          <Button>Explore NebulaOS</Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
