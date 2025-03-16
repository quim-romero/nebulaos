import { motion } from 'framer-motion'
import Container from '../components/Container'

const WhatIs = () => {
  return (
    <section
      id="what"
      className="py-24 bg-white text-dark dark:bg-dark dark:text-light transition-colors duration-300"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What is <span className="text-primary">NebulaOS</span>?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 justify-center max-w-4xl mx-auto"></div>
      </Container>
    </section>
  )
}

export default WhatIs
