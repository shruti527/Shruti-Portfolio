import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const bootLines = [
  { t: 0,    s: '> Initializing portfolio…',             c: '#4a5568' },
  { t: 320,  s: '> Loading components…',                  c: '#4a5568' },
  { t: 640,  s: '> Mounting React tree…',                 c: '#4a5568' },
  { t: 900,  s: '✓ Framer Motion ready',                  c: '#4ade80' },
  { t: 1100, s: '✓ Three.js scene compiled',              c: '#4ade80' },
  { t: 1350, s: '✓ Assets loaded',                        c: '#4ade80' },
  { t: 1600, s: '> Launching Shruti Chedge — Portfolio',  c: '#a78bfa' },
]

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [lines, setLines]       = useState<number[]>([])
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving]   = useState(false)

  useEffect(() => {
    const timers = bootLines.map((l, i) =>
      setTimeout(() => setLines(p => [...p, i]), l.t)
    )
    const prog = setInterval(() =>
      setProgress(p => { if (p >= 100) { clearInterval(prog); return 100 } return p + 2 }),
      32
    )
    const done = setTimeout(() => {
      setLeaving(true)
      setTimeout(onDone, 600)
    }, 2400)
    return () => { timers.forEach(clearTimeout); clearInterval(prog); clearTimeout(done) }
  }, [onDone])

  return (
    <AnimatePresence>
      {!leaving ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#060b18',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 32,
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              width: 64, height: 64, borderRadius: 16,
              background: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, fontWeight: 700, color: '#fff',
              fontFamily: '"Space Grotesk", sans-serif',
              boxShadow: '0 0 40px rgba(124,58,237,0.5)',
            }}>
            SC
          </motion.div>

          {/* Terminal boot */}
          <div
            style={{
              width: 380, maxWidth: '90vw',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.75rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12,
              padding: '16px 20px',
              minHeight: 160,
            }}
          >
            {bootLines.map((l, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={lines.includes(i) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.25 }}
                style={{ color: l.c, margin: '2px 0' }}
              >
                {l.s}
              </motion.p>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ width: 220, height: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 1 }}>
            <motion.div
              className="loading-bar"
              style={{ width: `${progress}%`, height: '100%', borderRadius: 1 }}
            />
          </div>

          <p style={{ fontSize: '0.7rem', color: '#4a5568', fontFamily: '"JetBrains Mono", monospace' }}>
            {progress}%
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
