import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    const addHover = () => ringRef.current?.classList.add('hovering')
    const rmHover  = () => ringRef.current?.classList.remove('hovering')

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor cursor-dot"  />
      <div ref={ringRef} className="cursor cursor-ring" />
    </>
  )
}
