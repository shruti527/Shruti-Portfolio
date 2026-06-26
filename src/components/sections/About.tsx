import { motion } from 'framer-motion'
import { useInView, useTerminal, useCounter } from '../../hooks'
import { stats, terminalLines, meta } from '../../data'
import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity:0, y:32 },
  show: (i:number) => ({ opacity:1,y:0, transition:{ duration:.6,delay:i*.1,ease:[.22,1,.36,1] as any } }),
}

function StatBox({ value, suffix, label, fixed, active }: typeof stats[0] & { active:boolean }) {
  const raw = useCounter(value, 1800, active)
  const display = fixed != null ? raw.toFixed(fixed) : Math.round(raw).toString()
  return (
    <div className="glass" style={{ borderRadius:14, padding:'20px 16px', textAlign:'center', flex:'1 1 100px' }}>
      <div className="stat-num">{display}{suffix}</div>
      <p style={{ fontSize:'.75rem', color:'#4a5568', marginTop:4 }}>{label}</p>
    </div>
  )
}

const highlights = [
  { icon:GraduationCap, label:'B.Tech CSE', sub:'GHR University · 9.0 CGPA', color:'#7c3aed' },
  { icon:Briefcase,     label:'SDE Intern',  sub:"Chetan's Royals Webtech",   color:'#06b6d4' },
  { icon:MapPin,        label:'Nagpur, India', sub:'Open to remote & relocation', color:'#4ade80' },
  { icon:Code2,         label:'Full Stack',  sub:'React · Node.js · TypeScript', color:'#fcd34d' },
]

export default function About() {
  const { ref, inView } = useInView()
  const revealed = useTerminal(terminalLines, inView)

  return (
    <section id="about" ref={ref as any} className="section-pad" style={{ position:'relative' }}>
      <div className="orb" style={{ width:500,height:500,top:'20%',right:'-8%', background:'radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 65%)' }} />

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px' }}>
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'} style={{ marginBottom:64, textAlign:'center' }}>
          <span className="section-label">01 / About</span>
          <h2 className="grad" style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:700, fontSize:'clamp(2rem,5vw,3.2rem)', letterSpacing:'-.03em' }}>
            The Developer Behind the Code
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:56, alignItems:'start' }}>

          {/* Left: bio */}
          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            <motion.p custom={1} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
              style={{ fontSize:'1rem', lineHeight:1.75, color:'#c5cdd8' }}>
              I'm a final-year Computer Science student at{' '}
              <span style={{ color:'#a78bfa' }}>G.H. Raisoni University</span>, Nagpur,
              currently interning as a Full Stack Developer at{' '}
              <span style={{ color:'#67e8f9' }}>Chetan's Royals Webtech Pvt. Ltd.</span>
            </motion.p>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
              style={{ fontSize:'.92rem', lineHeight:1.72, color:'#8892a4' }}>
              I love turning complex problems into clean, intuitive products. My stack runs from{' '}
              <strong style={{ color:'#f0f4ff' }}>React & Next.js</strong> on the frontend to{' '}
              <strong style={{ color:'#f0f4ff' }}>Node.js, MongoDB & PostgreSQL</strong> on the backend,
              with hands-on <strong style={{ color:'#f0f4ff' }}>Blockchain & Solidity</strong> experience
              from my institutional DigiSewa deployment.
            </motion.p>

            {/* Quick facts grid */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
              style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              {highlights.map(({ icon:Icon,label,sub,color }) => (
                <div key={label} className="glass" style={{
                  display:'flex', alignItems:'flex-start', gap:10,
                  padding:'12px 14px', borderRadius:12,
                }}>
                  <div style={{ width:32,height:32,borderRadius:8, display:'flex',alignItems:'center',justifyContent:'center',background:`${color}20`,flexShrink:0 }}>
                    <Icon size={15} color={color} />
                  </div>
                  <div>
                    <p style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:600, fontSize:'.82rem', color:'#f0f4ff' }}>{label}</p>
                    <p style={{ fontSize:'.72rem', color:'#4a5568' }}>{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
              style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
              {stats.map(s => <StatBox key={s.label} {...s} active={inView} />)}
            </motion.div>
          </div>

          {/* Right: terminal */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}>
            <div className="terminal" style={{ padding:0 }}>
              {/* title bar */}
              <div className="terminal-bar">
                <div className="t-dot" style={{ background:'#ff5f57' }} />
                <div className="t-dot" style={{ background:'#ffbd2e' }} />
                <div className="t-dot" style={{ background:'#28c840' }} />
                <span style={{ marginLeft:8, fontSize:'.72rem', color:'#4a5568' }}>
                  shruti@portfolio ~ bash
                </span>
              </div>
              {/* terminal body */}
              <div style={{ padding:'16px 20px', minHeight:260 }}>
                {terminalLines.map((l, i) => (
                  <motion.p key={i}
                    initial={{ opacity:0, x:-10 }}
                    animate={revealed.includes(i) ? { opacity:1, x:0 } : {}}
                    transition={{ duration:.25 }}
                    style={{ color:l.color, margin:'3px 0', fontFamily:'"JetBrains Mono",monospace', fontSize:'.76rem' }}>
                    {l.text}
                  </motion.p>
                ))}
                {/* blinking cursor */}
                <span style={{ color:'#06b6d4', fontFamily:'"JetBrains Mono",monospace', fontSize:'.76rem', animation:'blink 1s step-end infinite' }}>▋</span>
              </div>
            </div>

            {/* Looking for tag */}
            <div className="glass" style={{ borderRadius:14, padding:'16px 20px', marginTop:14 }}>
              <p style={{ fontFamily:'"JetBrains Mono",monospace', fontSize:'.68rem', letterSpacing:'.14em', textTransform:'uppercase', color:'#7c3aed', marginBottom:10 }}>
                Currently Looking For
              </p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {['Full-time SDE','Full Stack Roles','Remote OK','Startup Env','Nagpur / MIHAN'].map(t => (
                  <span key={t} className="stag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
