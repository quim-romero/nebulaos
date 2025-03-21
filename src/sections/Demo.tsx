import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/Container'
import Button from '../components/Button'

const Demo = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [consoleOutput, setConsoleOutput] = useState('>>> Ready.')

  const handleCommand = () => {
    setConsoleOutput('>>> Launching productivity core...')
    setTimeout(() => {
      setConsoleOutput('>>> Nebula AI response: "Focus mode activated."')
    }, 1500)
  }

  return (
    <section
      id="demo"
      className="py-28 bg-light text-dark dark:bg-[#1a1a1e] dark:text-light transition-colors duration-300"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Interactive <span className="text-primary">Demo</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-dark border border-muted/20 rounded-xl p-6 shadow-inner transition-colors">
            <h3 className="text-lg font-semibold mb-4">NebulaOS Console</h3>
            <div className="bg-gray-100 dark:bg-black text-green-600 dark:text-green-400 font-mono p-4 rounded h-32 text-sm transition-colors border border-muted/20 whitespace-pre-line">
              {consoleOutput}
            </div>

            <Button className="mt-4" onClick={handleCommand}>
              Run Command
            </Button>
          </div>

          <div className="bg-white dark:bg-dark border border-muted/20 rounded-xl p-6 shadow-inner text-sm transition-colors">
            <h3 className="text-lg font-semibold mb-4">Info Panel</h3>
            <p className="mb-4 text-muted dark:text-muted/80">
              Curious about NebulaOS’s AI core? Click below to open the system
              panel.
            </p>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <div className="bg-white dark:bg-dark rounded-xl p-6 shadow-lg max-w-md w-full">
              <h4 className="text-lg font-semibold mb-2">System Panel</h4>
              <p className="text-sm mb-4 text-muted dark:text-muted/80">
                This is where NebulaOS AI core details would go.
              </p>
              <Button onClick={() => setModalOpen(false)}>Close</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Demo
