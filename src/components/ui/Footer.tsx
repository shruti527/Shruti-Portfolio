import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react'
import { meta } from '../../data'

export function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(255,255,255,0.06)', padding:'40px 0 32px', position:'relative', zIndex:2 }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px' }}>
        <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:20 }}>
          {/* Logo */}
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:34,height:34,borderRadius:9, background:'linear-gradient(135deg,#7c3aed,#06b6d4)', display:'flex',alignItems:'center',justifyContent:'center', fontFamily:'"Space Grotesk",sans-serif',fontWeight:700,fontSize:13,color:'#fff' }}>SC</div>
            <div>
              <p style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:600, fontSize:'.85rem', color:'#f0f4ff' }}>Shruti Chedge</p>
              <p style={{ fontSize:'.72rem', color:'#4a5568' }}>Full Stack Developer</p>
            </div>
          </div>

          {/* Made with */}
          <p style={{ display:'flex', alignItems:'center', gap:6, fontSize:'.75rem', color:'#4a5568' }}>
            Built with <Heart size={11} color="#7c3aed" fill="#7c3aed" /> React + Framer Motion
          </p>

          {/* Socials */}
          <div style={{ display:'flex', gap:10 }}>
            {[
              { icon:Github,   href:meta.github },
              { icon:Linkedin, href:meta.linkedin },
              { icon:Mail,     href:'#contact' },
            ].map(({ icon:Icon, href }, i) => (
              <a key={i} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                data-hover
                style={{ width:34,height:34,borderRadius:9, display:'flex',alignItems:'center',justifyContent:'center', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', color:'#4a5568', textDecoration:'none', transition:'all .2s' }}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <p style={{ marginTop:28, textAlign:'center', fontSize:'.7rem', color:'#2d3748', fontFamily:'"JetBrains Mono",monospace' }}>
          © {new Date().getFullYear()} Shruti Chedge · Nagpur, India · All rights reserved
        </p>
      </div>
    </footer>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h, { passive:true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity:0, scale:.5 }}
          animate={{ opacity:1, scale:1 }}
          exit={{ opacity:0, scale:.5 }}
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="back-top" data-hover
          aria-label="Back to top"
          style={{ border:'none', cursor:'none' }}>
          <ArrowUp size={19} color="white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
