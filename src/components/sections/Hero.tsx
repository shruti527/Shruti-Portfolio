import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'
import GirlDeveloper from '../3d/GirlDeveloper'
import { useTyping } from '../../hooks'
import { meta } from '../../data'

const ROLES = ['Full Stack Developer', 'React & Node.js Engineer', 'TypeScript Specialist', 'Blockchain Builder']

const C = { hidden:{opacity:0,y:28}, show:(i:number)=>({ opacity:1,y:0, transition:{duration:.6,delay:i*.1,ease:[.22,1,.36,1] as any} }) }

export default function Hero() {
  const typed = useTyping(ROLES, 72, 2200)

  return (
    <section id="hero" style={{ minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden', paddingTop:80 }}>

      {/* Grid bg */}
      <div className="grid-bg" style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:0 }} />

      {/* Orbs */}
      <div className="orb" style={{ width:700,height:700,top:'-15%',left:'-8%', background:'radial-gradient(circle,rgba(124,58,237,0.13) 0%,transparent 65%)' }} />
      <div className="orb" style={{ width:450,height:450,bottom:'5%',right:'-5%', background:'radial-gradient(circle,rgba(6,182,212,0.09) 0%,transparent 65%)' }} />

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px', width:'100%', position:'relative', zIndex:2 }}>
        <div style={{ display:'flex', alignItems:'center', gap:48, flexWrap:'wrap' }}>

          {/* ── LEFT TEXT ── */}
          <motion.div
            variants={C} initial="hidden" animate="show"
            style={{ flex:'1 1 380px', minWidth:0 }}>

            {/* Status pill */}
            <motion.div custom={0} variants={C} style={{ marginBottom:24 }}>
              <span style={{
                display:'inline-flex', alignItems:'center', gap:8,
                padding:'6px 14px', borderRadius:999,
                background:'rgba(124,58,237,0.1)',
                border:'1px solid rgba(124,58,237,0.28)',
                fontFamily:'"JetBrains Mono",monospace', fontSize:'.72rem',
                color:'#a78bfa',
              }}>
                <span style={{ width:7,height:7,borderRadius:'50%',background:'#4ade80',
                  boxShadow:'0 0 8px #4ade80',
                  animation:'pulse 2s ease-in-out infinite' }} />
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p custom={1} variants={C} style={{
              fontFamily:'"JetBrains Mono",monospace', fontSize:'.78rem',
              letterSpacing:'.18em', textTransform:'uppercase',
              color:'#06b6d4', marginBottom:10,
            }}>
              Hi there, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 custom={2} variants={C} className="grad" style={{
              fontFamily:'"Space Grotesk",sans-serif',
              fontSize:'clamp(2.8rem,7vw,5.2rem)',
              fontWeight:700, lineHeight:1.05,
              letterSpacing:'-.03em', marginBottom:16,
            }}>
              Shruti Chedge
            </motion.h1>

            {/* Typing role */}
            <motion.div custom={3} variants={C} style={{ minHeight:'2rem', marginBottom:20 }}>
              <span className="blink" style={{
                fontFamily:'"Space Grotesk",sans-serif',
                fontSize:'clamp(1rem,2.5vw,1.3rem)',
                fontWeight:500, color:'#a78bfa',
              }}>
                {typed}
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p custom={4} variants={C} style={{
              fontSize:'.95rem', lineHeight:1.72,
              color:'#8892a4', maxWidth:480, marginBottom:32,
            }}>
              B.Tech CSE '25 @ GHR University, Nagpur · Interning at{' '}
              <span style={{ color:'#a78bfa' }}>Chetan's Royals Webtech</span>.
              Building <span style={{ color:'#67e8f9' }}>real-time</span>,{' '}
              <span style={{ color:'#a78bfa' }}>full-stack</span> products
              — from safety apps to railway digitization.
              Open to <strong style={{ color:'#f0f4ff' }}>SDE & Full Stack roles</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={5} variants={C} style={{ display:'flex', flexWrap:'wrap', gap:12, marginBottom:28 }}>
              <button
                className="btn-glow"
                data-hover
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}
                style={{
                  padding:'11px 26px', borderRadius:10, border:'none', cursor:'none',
                  fontSize:'.88rem', fontWeight:600, color:'#fff',
                  fontFamily:'"Space Grotesk",sans-serif',
                }}>
                View My Work
              </button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="btn-outline"
                data-hover
                style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  padding:'11px 24px', borderRadius:10,
                  fontSize:'.88rem', fontWeight:600, color:'#f0f4ff',
                  fontFamily:'"Space Grotesk",sans-serif',
                  textDecoration:'none',
                }}>
                <Download size={15} /> Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div custom={6} variants={C} style={{ display:'flex', alignItems:'center', gap:14 }}>
              {[
                { icon: Github,   href: meta.github,   label:'GitHub' },
                { icon: Linkedin, href: meta.linkedin, label:'LinkedIn' },
                { icon: Mail,     href: '#contact',           label:'Email' },
              ].map(({ icon:Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label} data-hover
                  style={{
                    width:40,height:40, borderRadius:10,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    background:'rgba(255,255,255,0.04)',
                    border:'1px solid rgba(255,255,255,0.09)',
                    color:'#8892a4', transition:'all .2s',
                    textDecoration:'none',
                  }}>
                  <Icon size={17} />
                </a>
              ))}
              <div style={{ width:40, height:1, background:'rgba(255,255,255,0.1)' }} />
              <span style={{ fontSize:'.75rem', color:'#4a5568', fontFamily:'"JetBrains Mono",monospace' }}>
                Nagpur, India
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT ILLUSTRATION ── */}
          <motion.div
            initial={{ opacity:0, x:50, scale:.96 }}
            animate={{ opacity:1, x:0,  scale:1 }}
            transition={{ duration:.9, delay:.5, ease:[.22,1,.36,1] }}
            style={{ flex:'1 1 380px', minWidth:0, maxWidth:500 }}>
            <GirlDeveloper />
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1.6 }}
          style={{
            position:'absolute', bottom:-40, left:'50%', transform:'translateX(-50%)',
            display:'flex', flexDirection:'column', alignItems:'center', gap:6,
            cursor:'none',
          }}
          data-hover
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}>
          <span style={{ fontFamily:'"JetBrains Mono",monospace', fontSize:'.62rem', letterSpacing:'.2em', textTransform:'uppercase', color:'#4a5568' }}>scroll</span>
          <motion.div animate={{ y:[0,7,0] }} transition={{ duration:1.6,repeat:Infinity,ease:'easeInOut' }}>
            <ArrowDown size={16} color="#7c3aed" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`@keyframes pulse{0%,100%{box-shadow:0 0 8px #4ade80}50%{box-shadow:0 0 16px #4ade80}}`}</style>
    </section>
  )
}
