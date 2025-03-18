import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'

import Hero from './sections/Hero'
import Features from './sections/Features'
import WhatIs from './sections/WhatIs'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhatIs />
      <Features />
      <Testimonials />
      <CTA />
      <ThemeToggle />
    </>
  )
}

export default App
