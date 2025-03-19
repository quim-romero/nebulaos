import { useEffect, useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import WhatIs from './sections/WhatIs'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import DevPanel from './components/DevPanel'

function App() {
  const [showDevPanel, setShowDevPanel] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.includes('Mac')
      const ctrl = isMac ? e.metaKey : e.ctrlKey
      if (ctrl && e.shiftKey && e.key.toLowerCase() === 'd') {
        setShowDevPanel((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <WhatIs />
      <Features />
      <Testimonials />
      <CTA />
      <DevPanel show={showDevPanel} onClose={() => setShowDevPanel(false)} />
      <ThemeToggle />
    </>
  )
}

export default App
