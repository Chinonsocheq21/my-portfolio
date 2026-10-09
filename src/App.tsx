import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro, { OPEN_INTRO_EVENT, shouldShowIntro } from './components/Intro'
import { useEffect, useState } from 'react'

function App() {
  const [introOpen, setIntroOpen] = useState(shouldShowIntro)

  useEffect(() => {
    const open = () => setIntroOpen(true)
    window.addEventListener(OPEN_INTRO_EVENT, open)
    return () => window.removeEventListener(OPEN_INTRO_EVENT, open)
  }, [])

  return (
    <div style={{ backgroundColor: '#000', overflowX: 'hidden' }}>
      <Intro open={introOpen} onClose={() => setIntroOpen(false)} />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
