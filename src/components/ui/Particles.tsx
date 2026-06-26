import { useEffect, useRef } from 'react'

interface P { x:number; y:number; vx:number; vy:number; r:number; a:number; col:string }

export default function Particles({ count = 55 }: { count?: number }) {
  const cvs = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = cvs.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); if (!ctx) return

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const cols = ['rgba(124,58,237,','rgba(6,182,212,','rgba(167,139,250,','rgba(103,232,249,']
    const ps: P[] = Array.from({ length: count }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .28,
      vy: (Math.random() - .5) * .28,
      r:  Math.random() * 1.8 + .4,
      a:  Math.random() * .45 + .08,
      col: cols[Math.floor(Math.random() * cols.length)],
    }))

    let mx = -999, my = -999
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      /* connections */
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y
          const d = Math.sqrt(dx*dx + dy*dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(124,58,237,${.055 * (1 - d/130)})`
            ctx.lineWidth = .6
            ctx.moveTo(ps[i].x, ps[i].y)
            ctx.lineTo(ps[j].x, ps[j].y)
            ctx.stroke()
          }
        }
      }

      /* particles */
      ps.forEach(p => {
        const dx = p.x - mx, dy = p.y - my
        const d = Math.sqrt(dx*dx + dy*dy)
        if (d < 110) { p.vx += (dx/d)*.25; p.vy += (dy/d)*.25 }
        p.vx *= .99; p.vy *= .99
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = `${p.col}${p.a})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [count])

  return <canvas ref={cvs} style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none', opacity:.65 }} />
}
