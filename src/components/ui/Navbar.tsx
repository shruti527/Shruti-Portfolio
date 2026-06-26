import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress, useNavScroll } from '../../hooks'

const LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact',    id: 'contact' },
]

export default function Navbar() {
  const { progress, scrolled } = useScrollProgress()
  const [active, setActive]   = useState('')
  const [open, setOpen]       = useState(false)
  const scrollTo = useNavScroll()

  /* active section tracking */
  useEffect(() => {
    const onScroll = () => {
      for (const { id } of [...LINKS].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); return }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => { setOpen(false); scrollTo(id) }

  return (
    <>
      {/* Scroll progress line */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 200,
        height: 2, width: `${progress * 100}%`,
        background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
        transition: 'width .1s linear',
        boxShadow: '0 0 8px rgba(124,58,237,0.6)',
      }} />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22,1,0.36,1] }}
        className={scrolled ? 'nav-scrolled' : ''}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 0',
          transition: 'background .3s, backdrop-filter .3s, border-color .3s',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '18px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-hover
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'none', border: 'none', cursor: 'none', padding: 0,
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700,
              fontSize: 14, color: '#fff',
              boxShadow: '0 0 16px rgba(124,58,237,0.4)',
            }}>SC</div>
            <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#f0f4ff' }}>
              Shruti Chedge
            </span>
          </button>

          {/* Desktop links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden-mobile">
            {LINKS.map(l => (
              <button key={l.id} onClick={() => handleNav(l.id)} data-hover
                className={`nav-link ${active === l.id ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'none', padding: 0 }}>
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="#contact"
              className="btn-glow hidden-mobile"
              data-hover
              style={{
                padding: '9px 22px', borderRadius: 10,
                fontSize: '0.8rem', fontWeight: 600,
                fontFamily: '"Space Grotesk",sans-serif',
                color: '#fff', textDecoration: 'none',
              }}>
              Hire Me
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'none', padding: 4, display: 'none' }}
              className="show-mobile"
              data-hover>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    display: 'block', width: 22, height: 1.5,
                    background: '#f0f4ff', borderRadius: 2,
                    transition: 'transform .25s, opacity .25s',
                    transform: open
                      ? i === 0 ? 'rotate(45deg) translate(4px,4px)'
                      : i === 2 ? 'rotate(-45deg) translate(4px,-4px)'
                      : 'scaleX(0)'
                      : 'none',
                    opacity: open && i === 1 ? 0 : 1,
                  }} />
                ))}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: 'hidden',
                background: 'rgba(6,11,24,0.97)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                {LINKS.map(l => (
                  <button key={l.id} onClick={() => handleNav(l.id)}
                    style={{
                      textAlign: 'left', background: 'none', border: 'none',
                      cursor: 'none', padding: 0,
                      fontFamily: '"Space Grotesk",sans-serif', fontWeight: 500,
                      fontSize: '1rem',
                      color: active === l.id ? '#a78bfa' : '#8892a4',
                    }}>
                    {l.label}
                  </button>
                ))}
                <a href="#contact"
                  style={{
                    display: 'inline-flex', justifyContent: 'center',
                    padding: '10px 24px', borderRadius: 10,
                    background: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
                    color: '#fff', fontWeight: 600,
                    fontFamily: '"Space Grotesk",sans-serif',
                    fontSize: '0.9rem', textDecoration: 'none',
                  }}>
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        @media(max-width:768px){ .hidden-mobile{display:none!important} .show-mobile{display:flex!important} }
        @media(min-width:769px){ .show-mobile{display:none!important} }
      `}</style>
    </>
  )
}
