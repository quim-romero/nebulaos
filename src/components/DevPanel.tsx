import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface DevPanelProps {
  show: boolean
  onClose: () => void
}

const DevPanel = ({ show, onClose }: DevPanelProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-dark text-dark dark:text-light p-8 rounded-xl border border-muted/20 max-w-md w-full shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">🛠 Dev Panel</h3>
            <ul className="text-sm space-y-2 text-muted dark:text-muted/80">
              <li>
                <strong>Framework:</strong> React + Vite (TypeScript)
              </li>
              <li>
                <strong>Styling:</strong> TailwindCSS + Dark Mode
              </li>
              <li>
                <strong>Animations:</strong> Framer Motion
              </li>
              <li>
                <strong>Testing:</strong> Vitest + Testing Library
              </li>
              <li>
                <strong>Architecture:</strong> Modular, typed components
              </li>
              <li>
                <strong>Persistence:</strong> Theme stored in localStorage
              </li>
            </ul>
            <button
              onClick={onClose}
              className="mt-6 text-xs underline text-muted hover:text-primary"
            >
              Close Panel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DevPanel
