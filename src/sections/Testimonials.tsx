import { motion } from 'framer-motion'
import Container from '../components/Container'

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-28 bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What people <span className="text-primary">say</span>
        </motion.h2>

        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex justify-center gap-6 md:gap-10 min-w-full max-w-6xl mx-auto px-2"></div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
