import { useState, useCallback } from 'react'
import LoadingScreen from './components/ui/LoadingScreen'
import Cursor       from './components/ui/Cursor'
import Particles    from './components/ui/Particles'
import Navbar       from './components/ui/Navbar'
import { Footer, BackToTop } from './components/ui/Footer'

import Hero       from './components/sections/Hero'
import About      from './components/sections/About'
import Skills     from './components/sections/Skills'
import Projects   from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact    from './components/sections/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const onDone = useCallback(() => setLoaded(true), [])

  return (
    <div style={{ background:'#060b18', minHeight:'100vh', position:'relative' }}>
      {/* Noise grain overlay */}
      <div className="noise" />

      {/* Particle field */}
      <Particles />

      {/* Animated cursor */}
      <Cursor />

      {/* Loading screen */}
      {!loaded && <LoadingScreen onDone={onDone} />}

      {/* Main site */}
      {loaded && (
        <div style={{ position:'relative', zIndex:2 }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </div>
  )
}
