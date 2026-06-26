import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { experience } from '../../data'
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity:0, y:28 },
  show: (i:number) => ({ opacity:1,y:0, transition:{ duration:.6,delay:i*.12,ease:[.22,1,.36,1] as any } }),
}

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" ref={ref as any} className="section-pad" style={{ position:'relative' }}>
      <div className="orb" style={{ width:450,height:450,top:'30%',left:'-8%', background:'radial-gradient(circle,rgba(124,58,237,0.07) 0%,transparent 65%)' }} />

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px' }}>
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
          style={{ textAlign:'center', marginBottom:64 }}>
          <span className="section-label">04 / Experience</span>
          <h2 className="grad" style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:700, fontSize:'clamp(2rem,5vw,3.2rem)', letterSpacing:'-.03em' }}>
            Journey So Far
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position:'relative', maxWidth:780, margin:'0 auto' }}>
          {/* Vertical line */}
          <div style={{
            position:'absolute', left:28, top:0, bottom:0, width:1,
            background:'linear-gradient(to bottom,#7c3aed,#06b6d4,transparent)',
            display:'none',
          }} className="timeline-line-desktop" />

          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            {experience.map((exp, i) => (
              <motion.div key={exp.role}
                custom={i+1} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
                style={{ position:'relative', paddingLeft:0 }}>

                {/* Timeline dot — desktop */}
                <div style={{
                  position:'absolute', left:18, top:28,
                  width:20, height:20, borderRadius:'50%',
                  border:`2px solid ${exp.color}`,
                  background:'#060b18',
                  alignItems:'center', justifyContent:'center',
                  zIndex:2,
                  display:'none',
                }} className="timeline-dot-desktop">
                  <div style={{ width:8, height:8, borderRadius:'50%', background:exp.color }} />
                </div>

                <div className="glass glass-hover"
                  style={{ borderRadius:16, padding:'24px 26px', borderColor:`${exp.color}18`, transition:'border-color .25s' }}>
                  {/* Header */}
                  <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:12, marginBottom:16 }}>
                    <div>
                      <span style={{
                        display:'inline-block', padding:'3px 10px', borderRadius:999,
                        fontFamily:'"JetBrains Mono",monospace', fontSize:'.65rem',
                        background:`${exp.color}18`, color:exp.color,
                        marginBottom:6,
                      }}>{exp.type}</span>
                      <h3 style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:700, fontSize:'1.05rem', color:'#f0f4ff', marginBottom:2 }}>
                        {exp.role}
                      </h3>
                      <p style={{ fontWeight:600, fontSize:'.9rem', color:exp.color }}>{exp.company}</p>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:4, alignItems:'flex-end' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:5, color:'#4a5568', fontSize:'.75rem' }}>
                        <Calendar size={11} />{exp.period}
                      </div>
                      <div style={{ display:'flex', alignItems:'center', gap:5, color:'#4a5568', fontSize:'.75rem' }}>
                        <MapPin size={11} />{exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul style={{ display:'flex', flexDirection:'column', gap:8 }}>
                    {exp.points.map((pt, pi) => (
                      <motion.li key={pi}
                        initial={{ opacity:0, x:-12 }}
                        animate={inView ? { opacity:1,x:0 } : {}}
                        transition={{ duration:.4, delay:i*.12+pi*.06+.2 }}
                        style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:'.84rem', color:'#c5cdd8' }}>
                        <CheckCircle2 size={14} color={exp.color} style={{ flexShrink:0, marginTop:2 }} />
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:640px){
          .timeline-line-desktop{display:block!important}
          .timeline-dot-desktop{display:flex!important}
        }
      `}</style>
    </section>
  )
}
