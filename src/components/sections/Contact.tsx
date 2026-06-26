import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Download } from 'lucide-react'
import { useInView } from '../../hooks'
import { meta } from '../../data'

const fadeUp = {
  hidden: { opacity:0, y:28 },
  show: (i:number) => ({ opacity:1,y:0, transition:{ duration:.6,delay:i*.1,ease:[.22,1,.36,1] as any } }),
}

const LINKS = [
  { icon:Mail,     label:meta.email,                           href:`mailto:${meta.email}`,   color:'#a78bfa' },
  { icon:Linkedin, label:'linkedin.com/in/shruti-chedge',      href:meta.linkedin,            color:'#67e8f9' },
  { icon:Github,   label:'github.com/shruti527',               href:meta.github,              color:'#86efac' },
  { icon:MapPin,   label:'Nagpur, Maharashtra, India',         href:'#',                      color:'#fcd34d' },
]

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  // TODO: Replace 'YOUR_FORMSPREE_ENDPOINT_ID' with your actual Formspree endpoint ID (e.g. 'xqk....')
  const FORMSPREE_URL = 'https://formspree.io/f/mqevpryg'

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setSent(true)
      } else {
        alert("Oops! There was a problem submitting your message. Please try again.")
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width:'100%', padding:'12px 16px', borderRadius:10,
    background:'rgba(255,255,255,0.04)',
    border:'1px solid rgba(255,255,255,0.09)',
    color:'#f0f4ff', fontSize:'.88rem',
    fontFamily:'"Inter",sans-serif',
    outline:'none',
    transition:'border-color .2s',
  } as React.CSSProperties

  return (
    <section id="contact" ref={ref as any} className="section-pad" style={{ position:'relative' }}>
      <div className="orb" style={{ width:600,height:600,bottom:'-20%',left:'50%',transform:'translateX(-50%)', background:'radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)' }} />

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px' }}>
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
          style={{ textAlign:'center', marginBottom:64 }}>
          <span className="section-label">05 / Contact</span>
          <h2 className="grad" style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:700, fontSize:'clamp(2rem,5vw,3.2rem)', letterSpacing:'-.03em', marginBottom:12 }}>
            Let's Work Together
          </h2>
          <p style={{ color:'#4a5568', fontSize:'.92rem', maxWidth:440, margin:'0 auto' }}>
            Open to full-time SDE roles, internships & exciting projects.
            I respond within 24 hours.
          </p>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:40, alignItems:'start' }}>

          {/* Left: links */}
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
              className="glass" style={{ borderRadius:16, padding:'22px 22px' }}>
              <h3 style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:600, fontSize:'.92rem', color:'#f0f4ff', marginBottom:18 }}>
                Find Me At
              </h3>
              {LINKS.map(({ icon:Icon,label,href,color }) => (
                <a key={label} href={href}
                  target={href.startsWith('http')?'_blank':undefined}
                  rel="noopener noreferrer" data-hover
                  style={{
                    display:'flex', alignItems:'center', gap:14,
                    padding:'12px 14px', borderRadius:12, marginBottom:8,
                    background:'rgba(255,255,255,0.02)',
                    border:'1px solid rgba(255,255,255,0.05)',
                    textDecoration:'none',
                    transition:'all .2s',
                  }}>
                  <div style={{ width:36,height:36,borderRadius:10, display:'flex',alignItems:'center',justifyContent:'center', background:`${color}18`, flexShrink:0 }}>
                    <Icon size={16} color={color} />
                  </div>
                  <span style={{ fontSize:'.82rem', color:'#c5cdd8' }}>{label}</span>
                </a>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
              className="glass" style={{ borderRadius:16, padding:'18px 22px', borderColor:'rgba(124,58,237,0.2)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                <span style={{ width:8,height:8,borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 10px #4ade80', animation:'pulse 2s ease-in-out infinite', display:'inline-block' }} />
                <span style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:600, fontSize:'.88rem', color:'#f0f4ff' }}>
                  Available Now
                </span>
              </div>
              <p style={{ fontSize:'.82rem', color:'#4a5568' }}>
                Actively looking for <strong style={{ color:'#a78bfa' }}>Full Stack SDE roles</strong>.
                Open to Nagpur, remote, or relocation.
              </p>
            </motion.div>

            {/* Download resume */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-hover
                className="btn-glow"
                style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:10,
                  padding:'13px 24px', borderRadius:12,
                  fontFamily:'"Space Grotesk",sans-serif', fontWeight:600, fontSize:'.9rem',
                  color:'#fff', textDecoration:'none',
                }}>
                <Download size={17} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView?'show':'hidden'}
            className="glass" style={{ borderRadius:16, padding:'28px 24px' }}>

            {sent ? (
              <motion.div initial={{ opacity:0,scale:.9 }} animate={{ opacity:1,scale:1 }}
                style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:16,padding:'40px 0',textAlign:'center' }}>
                <CheckCircle2 size={52} color="#4ade80" />
                <h3 style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:700, fontSize:'1.2rem', color:'#f0f4ff' }}>Message Sent!</h3>
                <p style={{ color:'#4a5568', fontSize:'.88rem' }}>I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                <h3 style={{ fontFamily:'"Space Grotesk",sans-serif', fontWeight:600, fontSize:'.92rem', color:'#f0f4ff', marginBottom:4 }}>
                  Send a Message
                </h3>

                <div>
                  <label style={{ display:'block', fontFamily:'"JetBrains Mono",monospace', fontSize:'.68rem', color:'#4a5568', marginBottom:6 }}>Name</label>
                  <input style={inputStyle} type="text" placeholder="Your name"
                    value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))} />
                </div>
                <div>
                  <label style={{ display:'block', fontFamily:'"JetBrains Mono",monospace', fontSize:'.68rem', color:'#4a5568', marginBottom:6 }}>Email</label>
                  <input style={inputStyle} type="email" placeholder="your@email.com"
                    value={form.email} onChange={e => setForm(f=>({...f,email:e.target.value}))} />
                </div>
                <div>
                  <label style={{ display:'block', fontFamily:'"JetBrains Mono",monospace', fontSize:'.68rem', color:'#4a5568', marginBottom:6 }}>Message</label>
                  <textarea style={{ ...inputStyle, resize:'none' }} rows={4}
                    placeholder="Tell me about the role or project…"
                    value={form.message} onChange={e => setForm(f=>({...f,message:e.target.value}))} />
                </div>
                <button onClick={submit} disabled={loading} data-hover
                  className="btn-glow"
                  style={{
                    display:'flex', alignItems:'center', justifyContent:'center', gap:10,
                    padding:'13px 20px', borderRadius:10, border:'none', cursor:'none',
                    fontFamily:'"Space Grotesk",sans-serif', fontWeight:600, fontSize:'.88rem',
                    color:'#fff',
                    opacity: loading ? .7 : 1,
                  }}>
                  {loading
                    ? <span style={{ width:18,height:18,borderRadius:'50%',border:'2px solid #fff',borderTopColor:'transparent',animation:'spin .7s linear infinite',display:'inline-block' }} />
                    : <><Send size={15} /> Send Message</>
                  }
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes pulse{0%,100%{box-shadow:0 0 8px #4ade80}50%{box-shadow:0 0 18px #4ade80}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </section>
  )
}
