import { useEffect, useRef, useState, useCallback } from 'react'

/* ── Intersection observer ─────────────────── */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ── Typing / typewriter effect ─────────────── */
export function useTyping(words: string[], speed = 75, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wIdx, setWIdx] = useState(0)
  const [cIdx, setCIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && cIdx < word.length) {
      t = setTimeout(() => setCIdx(c => c + 1), speed)
    } else if (!deleting && cIdx === word.length) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && cIdx > 0) {
      t = setTimeout(() => setCIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWIdx(i => (i + 1) % words.length)
    }
    setDisplay(word.slice(0, cIdx))
    return () => clearTimeout(t)
  }, [cIdx, deleting, wIdx, words, speed, pause])

  return display
}

/* ── Animated counter ───────────────────────── */
export function useCounter(target: number, duration = 1600, active = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(eased * target)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return val
}

/* ── Mouse position ────────────────────────── */
export function useMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const h = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])
  return pos
}

/* ── Scroll progress ───────────────────────── */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return { progress, scrolled }
}

/* ── Terminal line-by-line reveal ───────────── */
export function useTerminal(lines: { delay: number; text: string; color: string }[], active: boolean) {
  const [revealed, setRevealed] = useState<number[]>([])
  useEffect(() => {
    if (!active) return
    const timers = lines.map((l, i) =>
      setTimeout(() => setRevealed(r => [...r, i]), l.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [active, lines])
  return revealed
}

/* ── Smooth scroll to section ───────────────── */
export function useNavScroll() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  return scrollTo
}
