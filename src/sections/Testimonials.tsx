import { motion } from 'framer-motion'
import Container from '../components/Container'

const testimonials = [
  {
    name: 'Sophia Reyes',
    role: 'Product Manager at HyperloopAI',
    avatar: '/avatars/sophia.jpg',
    quote:
      'NebulaOS changed how I lead my team. It feels like having an AI assistant baked into your operating system.',
  },
  {
    name: 'Liam Zhang',
    role: 'CTO at NovaCloud',
    avatar: '/avatars/liam.jpg',
    quote:
      'Finally, a tool that doesn’t slow down creativity. It anticipates needs before you even act.',
  },
  {
    name: 'Ava Smith',
    role: 'Founder at SynthSpace',
    avatar: '/avatars/ava.jpg',
    quote:
      'NebulaOS makes everything else feel outdated. Beautiful, efficient, intelligent.',
  },
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-28 bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What people <span className="text-primary">say</span>
        </motion.h2>

        <div
          className="overflow-x-auto hide-scrollbar"
          tabIndex={0}
          role="region"
          aria-label="Testimonials carousel"
        >
          <div className="flex justify-center gap-6 md:gap-10 min-w-full max-w-6xl mx-auto px-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#1d1d22] rounded-xl p-6 w-80 shrink-0 border border-muted/20
                           text-dark dark:text-light transition-colors duration-300 flex flex-col"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  <q>{t.quote}</q>
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
