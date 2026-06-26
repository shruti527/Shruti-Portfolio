import { useEffect, useRef } from 'react'

/* Orbit dot component */
function OrbitDot({ radius, duration, color, size = 6, reverse = false, startAngle = 0 }: {
  radius: number; duration: number; color: string; size?: number; reverse?: boolean; startAngle?: number
}) {
  const style: React.CSSProperties = {
    position: 'absolute',
    width: size, height: size,
    borderRadius: '50%',
    background: color,
    boxShadow: `0 0 ${size * 2}px ${color}`,
    animation: `${reverse ? 'orbit-rev' : 'orbit'} ${duration}s linear infinite`,
    animationDelay: `${startAngle / 360 * -duration}s`,
    top: '50%', left: '50%',
    transformOrigin: `0px ${radius}px`,
    marginTop: -size / 2,
    marginLeft: -size / 2,
    transform: `rotate(${startAngle}deg) translateY(${radius}px) rotate(-${startAngle}deg)`,
  }
  return <div style={style} />
}

/* Floating badge */
function Badge({ label, icon, color, style }: { label: string; icon: string; color: string; style: React.CSSProperties }) {
  return (
    <div style={{
      position: 'absolute',
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '5px 12px', borderRadius: 8,
      background: 'rgba(6,11,24,0.92)',
      border: `1px solid ${color}55`,
      fontFamily: '"JetBrains Mono",monospace',
      fontSize: '0.7rem', color,
      boxShadow: `0 4px 20px ${color}22`,
      whiteSpace: 'nowrap',
      ...style,
    }}>
      <span style={{ fontSize: '0.85rem' }}>{icon}</span>
      {label}
    </div>
  )
}

export default function GirlDeveloper() {
  const svgRef = useRef<SVGSVGElement>(null)

  /* subtle mouse parallax on the illustration */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!svgRef.current) return
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx * 6
      const dy = (e.clientY - cy) / cy * 4
      svgRef.current.style.transform = `translate(${dx}px,${dy}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480, margin: '0 auto' }}>
      {/* Orbit rings */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
        {/* Ring 1 */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 320, height: 320,
          transform: 'translate(-50%,-50%)',
          border: '1px solid rgba(124,58,237,0.12)',
          borderRadius: '50%',
        }}>
          <OrbitDot radius={160} duration={9} color="#7c3aed" size={7} startAngle={30} />
          <OrbitDot radius={160} duration={9} color="#7c3aed" size={4} startAngle={210} />
        </div>
        {/* Ring 2 */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 430, height: 430,
          transform: 'translate(-50%,-50%)',
          border: '1px solid rgba(6,182,212,0.07)',
          borderRadius: '50%',
        }}>
          <OrbitDot radius={215} duration={14} color="#06b6d4" size={5} reverse startAngle={100} />
          <OrbitDot radius={215} duration={14} color="#06b6d4" size={3} reverse startAngle={280} />
        </div>
      </div>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 340, height: 340,
        background: 'radial-gradient(circle,rgba(124,58,237,0.18) 0%,transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: '30%', left: '60%',
        transform: 'translate(-50%,-50%)',
        width: 200, height: 200,
        background: 'radial-gradient(circle,rgba(6,182,212,0.12) 0%,transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Floating tech badges */}
      <Badge label="React.js" icon="⚛️" color="#61DAFB"
        style={{ top: '12%', left: '-8%', animation: 'float 5s ease-in-out infinite 0.3s', zIndex: 10 }} />
      <Badge label="Node.js" icon="🟢" color="#86EFAC"
        style={{ top: '18%', right: '-4%', animation: 'float 7s ease-in-out infinite 0.9s', zIndex: 10 }} />
      <Badge label="TypeScript" icon="📘" color="#60A5FA"
        style={{ bottom: '22%', right: '-6%', animation: 'float 6s ease-in-out infinite 1.4s', zIndex: 10 }} />
      <Badge label="MongoDB" icon="🍃" color="#4ADE80"
        style={{ bottom: '18%', left: '-6%', animation: 'float 8s ease-in-out infinite 2s', zIndex: 10 }} />

      {/* SVG Illustration */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ animation: 'float 6s ease-in-out infinite' }}>
          <svg
            ref={svgRef}
            viewBox="0 0 460 520"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto', overflow: 'visible', transition: 'transform 0.4s ease-out' }}
          >
            <defs>
              {/* Gradients */}
              <radialGradient id="skin" cx="50%" cy="35%" r="65%">
                <stop offset="0%"   stopColor="#d4956a" />
                <stop offset="60%"  stopColor="#c07850" />
                <stop offset="100%" stopColor="#a0622e" />
              </radialGradient>
              <radialGradient id="skinArm" cx="50%" cy="30%" r="70%">
                <stop offset="0%"   stopColor="#cc8860" />
                <stop offset="100%" stopColor="#a06030" />
              </radialGradient>
              <linearGradient id="hair" x1="0%" y1="0%" x2="60%" y2="100%">
                <stop offset="0%"   stopColor="#1c0c04" />
                <stop offset="100%" stopColor="#2e1608" />
              </linearGradient>
              <linearGradient id="outfit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#6d28d9" />
                <stop offset="50%"  stopColor="#5b21b6" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
              <linearGradient id="outfitLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#5b21b6" />
              </linearGradient>
              <linearGradient id="screen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#0a1628" />
                <stop offset="100%" stopColor="#060b18" />
              </linearGradient>
              <linearGradient id="laptop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#1e1e2e" />
                <stop offset="100%" stopColor="#13131f" />
              </linearGradient>
              <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#1a1a2e" />
                <stop offset="100%" stopColor="#141424" />
              </linearGradient>
              <linearGradient id="chairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#1e1232" />
                <stop offset="100%" stopColor="#150d25" />
              </linearGradient>
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="softGlow" x="-15%" y="-15%" width="130%" height="130%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <clipPath id="screenClip">
                <rect x="152" y="278" width="162" height="105" rx="3" />
              </clipPath>
            </defs>

            {/* ── DESK SHADOW ── */}
            <ellipse cx="230" cy="462" rx="165" ry="16" fill="rgba(124,58,237,0.08)" />

            {/* ── DESK SURFACE ── */}
            <rect x="80" y="442" width="300" height="14" rx="5" fill="url(#deskGrad)"
              stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
            <rect x="80" y="442" width="300" height="4" rx="3" fill="rgba(124,58,237,0.12)" />

            {/* ── CHAIR ── */}
            <rect x="148" y="350" width="164" height="120" rx="22"
              fill="url(#chairGrad)" stroke="rgba(124,58,237,0.25)" strokeWidth="1" />
            <rect x="162" y="364" width="136" height="92" rx="15"
              fill="rgba(255,255,255,0.03)" />
            {/* armrests */}
            <rect x="118" y="390" width="40" height="12" rx="6" fill="#1a1030" />
            <rect x="302" y="390" width="40" height="12" rx="6" fill="#1a1030" />

            {/* ── BODY (breathe) ── */}
            <g style={{ animation: 'breathe 4s ease-in-out infinite', transformOrigin: '230px 400px' }}>

              {/* Torso */}
              <ellipse cx="230" cy="390" rx="62" ry="68" fill="url(#outfit)" />
              {/* Top highlight shimmer */}
              <ellipse cx="210" cy="360" rx="20" ry="30" fill="rgba(255,255,255,0.05)" />
              {/* Collar V-neck */}
              <path d="M 205 338 L 230 358 L 255 338" fill="none"
                stroke="rgba(167,139,250,0.45)" strokeWidth="1.5" strokeLinejoin="round" />
              {/* Small collar detail */}
              <path d="M 215 338 Q 230 350 245 338" fill="rgba(124,58,237,0.3)" />

              {/* ── LEFT ARM ── */}
              <g style={{ animation: 'handType 0.9s ease-in-out infinite' }}>
                <path d="M 170 370 Q 160 395 158 420 Q 155 432 162 436"
                  stroke="url(#skinArm)" strokeWidth="26" fill="none" strokeLinecap="round" />
                {/* Left palm */}
                <ellipse cx="165" cy="440" rx="18" ry="11" fill="url(#skinArm)" />
                {/* fingers L */}
                <rect x="150" y="433" width="7" height="13" rx="3.5" fill="#b87845" />
                <rect x="159" y="431" width="7" height="15" rx="3.5" fill="#b87845" />
                <rect x="168" y="430" width="7" height="16" rx="3.5" fill="#b87845" />
                <rect x="177" y="432" width="6" height="13" rx="3"   fill="#b87845" />
                {/* thumb L */}
                <rect x="142" y="436" width="10" height="8" rx="4" fill="#b87845"
                  style={{ transform: 'rotate(30deg)', transformOrigin: '147px 440px' }} />
              </g>

              {/* ── RIGHT ARM ── */}
              <g style={{ animation: 'handType 0.9s ease-in-out infinite', animationDelay: '0.25s' }}>
                <path d="M 290 370 Q 300 395 302 420 Q 305 432 298 436"
                  stroke="url(#skinArm)" strokeWidth="26" fill="none" strokeLinecap="round" />
                {/* Right palm */}
                <ellipse cx="295" cy="440" rx="18" ry="11" fill="url(#skinArm)" />
                {/* fingers R */}
                <rect x="283" y="432" width="6" height="13" rx="3"   fill="#b87845" />
                <rect x="291" y="430" width="7" height="16" rx="3.5" fill="#b87845" />
                <rect x="300" y="431" width="7" height="15" rx="3.5" fill="#b87845" />
                <rect x="309" y="433" width="7" height="13" rx="3.5" fill="#b87845" />
                {/* thumb R */}
                <rect x="308" y="436" width="10" height="8" rx="4" fill="#b87845"
                  style={{ transform: 'rotate(-30deg)', transformOrigin: '313px 440px' }} />
              </g>
            </g>

            {/* ── HEAD GROUP ── */}
            <g>
              {/* Neck */}
              <rect x="216" y="304" width="28" height="36" rx="14" fill="url(#skin)" />

              {/* ── HAIR BACK (behind face) ── */}
              <ellipse cx="230" cy="248" rx="64" ry="58" fill="url(#hair)" />
              {/* Hair top volume */}
              <path d="M 170 252 Q 165 200 185 182 Q 205 166 230 168 Q 255 166 275 182 Q 295 200 290 252"
                fill="url(#hair)" />

              {/* ── FACE ── */}
              <ellipse cx="230" cy="270" rx="55" ry="60" fill="url(#skin)" />

              {/* ── HAIR SIDE STRANDS (floating over face sides, wave anim) ── */}
              <g style={{ animation: 'hairWave 3.5s ease-in-out infinite', transformOrigin: '230px 240px' }}>
                {/* Left side hair */}
                <path d="M 176 252 Q 162 278 164 316 Q 166 338 172 350"
                  stroke="#1c0c04" strokeWidth="16" fill="none" strokeLinecap="round" />
                <path d="M 176 252 Q 162 278 164 316 Q 166 338 172 350"
                  stroke="#2e1608" strokeWidth="10" fill="none" strokeLinecap="round" />
                {/* Right side hair (shorter, tucked) */}
                <path d="M 284 252 Q 296 272 294 304 Q 292 322 287 334"
                  stroke="#1c0c04" strokeWidth="14" fill="none" strokeLinecap="round" />
                <path d="M 284 252 Q 296 272 294 304 Q 292 322 287 334"
                  stroke="#2e1608" strokeWidth="8" fill="none" strokeLinecap="round" />
              </g>

              {/* Hair parting */}
              <path d="M 215 170 Q 222 164 230 168" fill="none" stroke="#0e0604" strokeWidth="1.5" />

              {/* ── EYEBROWS (arched, expressive) ── */}
              <path d="M 206 256 Q 215 250 224 253" fill="none" stroke="#2e1608" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 236 253 Q 245 250 254 256" fill="none" stroke="#2e1608" strokeWidth="2.5" strokeLinecap="round" />

              {/* ── EYES ── */}
              {/* Left eye */}
              <ellipse cx="215" cy="267" rx="10" ry="9"  fill="white" />
              <ellipse cx="215" cy="268" rx="6"  ry="6.5" fill="#1a0806" />
              <ellipse cx="215" cy="268" rx="3"  ry="3.5" fill="#0d0403" />
              <circle  cx="217.5" cy="265.5" r="2.2" fill="white" opacity="0.92" />
              <circle  cx="213.5" cy="269"   r="1"   fill="white" opacity="0.4" />
              {/* Right eye */}
              <ellipse cx="245" cy="267" rx="10" ry="9"  fill="white" />
              <ellipse cx="245" cy="268" rx="6"  ry="6.5" fill="#1a0806" />
              <ellipse cx="245" cy="268" rx="3"  ry="3.5" fill="#0d0403" />
              <circle  cx="247.5" cy="265.5" r="2.2" fill="white" opacity="0.92" />
              <circle  cx="243.5" cy="269"   r="1"   fill="white" opacity="0.4" />

              {/* ── EYELASHES ── */}
              {/* Left upper */}
              <path d="M 206 260 L 203 255 M 210 257 L 208 252 M 215 256 L 215 251 M 220 257 L 222 252 M 224 260 L 227 256"
                stroke="#1a0806" strokeWidth="1.2" strokeLinecap="round" />
              {/* Right upper */}
              <path d="M 236 260 L 233 256 M 240 257 L 238 252 M 245 256 L 245 251 M 250 257 L 252 252 M 254 260 L 257 255"
                stroke="#1a0806" strokeWidth="1.2" strokeLinecap="round" />
              {/* Lower lash line */}
              <path d="M 206 274 Q 215 279 224 274" fill="none" stroke="rgba(160,82,45,0.3)" strokeWidth="1" />
              <path d="M 236 274 Q 245 279 254 274" fill="none" stroke="rgba(160,82,45,0.3)" strokeWidth="1" />

              {/* ── NOSE ── */}
              <path d="M 230 278 Q 225 290 226 294 Q 230 298 234 294 Q 235 290 230 278"
                fill="rgba(150,80,35,0.22)" />
              <ellipse cx="226" cy="294" rx="3.5" ry="2.2" fill="rgba(150,80,35,0.2)" />
              <ellipse cx="234" cy="294" rx="3.5" ry="2.2" fill="rgba(150,80,35,0.2)" />
              <path d="M 224 292 Q 230 296 236 292" fill="none" stroke="rgba(130,70,30,0.3)" strokeWidth="1" />

              {/* ── LIPS ── */}
              {/* Upper lip */}
              <path d="M 218 303 Q 224 299 230 302 Q 236 299 242 303"
                fill="rgba(180,80,70,0.6)" stroke="rgba(160,60,50,0.4)" strokeWidth="0.8" />
              {/* Lower lip */}
              <path d="M 218 303 Q 230 312 242 303"
                fill="rgba(190,90,80,0.55)" />
              {/* Lip highlight */}
              <ellipse cx="230" cy="307" rx="6" ry="2.5" fill="rgba(255,255,255,0.1)" />

              {/* ── CHEEK BLUSH ── */}
              <ellipse cx="200" cy="283" rx="14" ry="8" fill="rgba(220,100,80,0.12)" />
              <ellipse cx="260" cy="283" rx="14" ry="8" fill="rgba(220,100,80,0.12)" />

              {/* ── BINDI ── */}
              <circle cx="230" cy="238" r="3.5" fill="#e11d48" />
              <circle cx="230" cy="238" r="1.8" fill="#fb7185"  />
              <circle cx="230" cy="238" r="0.8" fill="white"  opacity="0.6" />

              {/* ── EARRINGS ── */}
              {/* Left */}
              <circle cx="175" cy="276" r="5"  fill="#7c3aed" opacity="0.9" filter="url(#softGlow)" />
              <circle cx="175" cy="287" r="4"  fill="#06b6d4" opacity="0.8" filter="url(#softGlow)" />
              <line  x1="175" y1="281" x2="175" y2="283" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              {/* Right */}
              <circle cx="285" cy="276" r="5"  fill="#7c3aed" opacity="0.9" filter="url(#softGlow)" />
              <circle cx="285" cy="287" r="4"  fill="#06b6d4" opacity="0.8" filter="url(#softGlow)" />
              <line  x1="285" y1="281" x2="285" y2="283" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

              {/* ── HAIR STREAKS (subtle violet) ── */}
              <path d="M 220 175 Q 205 195 195 225 Q 188 248 184 265"
                stroke="#7c3aed" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.35" />
              <path d="M 235 172 Q 248 195 256 222 Q 262 245 264 264"
                stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.25" />
            </g>

            {/* ── LAPTOP SCREEN ── */}
            {/* Screen bezel */}
            <rect x="148" y="272" width="164" height="118" rx="10"
              fill="url(#laptop)" stroke="rgba(124,58,237,0.45)" strokeWidth="1.5" />
            {/* Screen surface with glow */}
            <rect x="149" y="273" width="162" height="116" rx="9"
              fill="url(#screen)" className="anim-screen" />
            {/* Screen ambient glow (behind) */}
            <rect x="149" y="273" width="162" height="116" rx="9"
              fill="rgba(124,58,237,0.07)" />

            {/* ── CODE ON SCREEN ── */}
            <g clipPath="url(#screenClip)">
              {/* Line gutter */}
              <rect x="152" y="278" width="22" height="105" fill="rgba(0,0,0,0.3)" />

              {/* Line numbers */}
              {[0,1,2,3,4,5,6,7,8].map((n, i) => (
                <text key={n} x="156" y={290 + i * 11}
                  fill="rgba(167,139,250,0.35)" fontSize="6.5"
                  fontFamily='"JetBrains Mono",monospace'>{n + 1}</text>
              ))}

              {/* Active line highlight */}
              <rect x="174" y="311" width="138" height="9" fill="rgba(124,58,237,0.12)" />

              {/* Code content — scrolling */}
              <g style={{ animation: 'codeScroll 5s linear infinite' }}>
                <text x="177" y="290" fill="#7c3aed" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>const</text>
                <text x="202" y="290" fill="#67e8f9" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>SafePulse</text>
                <text x="248" y="290" fill="#f0f4ff" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'> = () =&gt; {'{'}</text>

                <text x="177" y="301" fill="#a78bfa" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>  const</text>
                <text x="203" y="301" fill="#67e8f9" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'> [loc,set]</text>
                <text x="244" y="301" fill="#f0f4ff" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'> = useState</text>

                <text x="177" y="312" fill="#a78bfa" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>  socket</text>
                <text x="206" y="312" fill="#f0f4ff" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>.</text>
                <text x="209" y="312" fill="#67e8f9" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>emit</text>
                <text x="228" y="312" fill="#86efac" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>('sos',</text>
                <text x="260" y="312" fill="#a78bfa" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>loc)</text>

                <text x="177" y="323" fill="#a78bfa" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>  return</text>
                <text x="206" y="323" fill="#f87171" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'> &lt;Map </text>
                <text x="233" y="323" fill="#fcd34d" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>loc=</text>
                <text x="253" y="323" fill="#f0f4ff" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>{'{'}{'}'}{'{'}{'}'}  /&gt;</text>

                <text x="177" y="334" fill="#f0f4ff" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>{'}'}</text>

                <text x="177" y="348" fill="#4a5568" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>// Railways TC Digitizer</text>
                <text x="177" y="359" fill="#7c3aed" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'>export default</text>
                <text x="248" y="359" fill="#67e8f9" fontSize="6.5" fontFamily='"JetBrains Mono",monospace'> RailwayForm</text>
              </g>

              {/* Cursor blink */}
              <rect x="177" y="311" width="1.5" height="8" fill="#06b6d4">
                <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
              </rect>
            </g>

            {/* Screen title bar */}
            <rect x="149" y="273" width="162" height="11" rx="0" fill="rgba(0,0,0,0.5)" />
            <circle cx="158" cy="278.5" r="2.5" fill="#ff5f57" />
            <circle cx="166" cy="278.5" r="2.5" fill="#ffbd2e" />
            <circle cx="174" cy="278.5" r="2.5" fill="#28c840" />
            <text x="186" y="282" fill="rgba(240,244,255,0.4)" fontSize="5.5"
              fontFamily='"JetBrains Mono",monospace'>SafePulse.tsx</text>

            {/* Screen outer glow */}
            <rect x="148" y="272" width="164" height="118" rx="10"
              fill="none" stroke="rgba(124,58,237,0.25)" strokeWidth="1"
              filter="url(#glow)" className="anim-screen" />

            {/* ── KEYBOARD ── */}
            <rect x="150" y="432" width="160" height="14" rx="5"
              fill="url(#laptop)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
            {/* key rows */}
            {Array.from({ length: 13 }, (_, i) => (
              <rect key={i} x={156 + i * 11} y={436} width={8} height={5} rx={1.5}
                fill="rgba(167,139,250,0.18)" />
            ))}
            <rect x="170" y="443" width="92" height="3" rx="1.5" fill="rgba(167,139,250,0.12)" />

            {/* ── HEADPHONES (on head) ── */}
            <path d="M 178 248 Q 172 224 185 208 Q 198 192 230 190 Q 262 192 275 208 Q 288 224 282 248"
              fill="none" stroke="#1e1236" strokeWidth="9" strokeLinecap="round" />
            <rect x="172" y="244" width="14" height="22" rx="6" fill="#2d1a50" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
            <rect x="274" y="244" width="14" height="22" rx="6" fill="#2d1a50" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
            <ellipse cx="179" cy="255" rx="5" ry="7"  fill="rgba(124,58,237,0.5)" />
            <ellipse cx="281" cy="255" rx="5" ry="7"  fill="rgba(124,58,237,0.5)" />

            {/* ── COFFEE MUG (on desk) ── */}
            <g transform="translate(340, 418)">
              <rect x="0" y="0" width="28" height="30" rx="4" fill="#1e1236" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
              <rect x="0" y="0" width="28" height="8" rx="4" fill="rgba(124,58,237,0.3)" />
              <path d="M 28 8 Q 38 14 28 20" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="2.5" strokeLinecap="round" />
              {/* steam */}
              <path d="M 8 -4 Q 10 -10 8 -16" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" strokeLinecap="round"
                style={{ animation: 'float 2s ease-in-out infinite' }} />
              <path d="M 14 -6 Q 16 -13 14 -20" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" strokeLinecap="round"
                style={{ animation: 'float 2.5s ease-in-out infinite 0.4s' }} />
              <path d="M 20 -4 Q 22 -10 20 -16" fill="none" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5" strokeLinecap="round"
                style={{ animation: 'float 2.2s ease-in-out infinite 0.8s' }} />
              <text x="4" y="20" fill="rgba(167,139,250,0.7)" fontSize="8" fontFamily='"JetBrains Mono",monospace'>&lt;/&gt;</text>
            </g>

            {/* ── PLANT (on desk left) ── */}
            <g transform="translate(88, 400)">
              <rect x="8" y="32" width="22" height="16" rx="4" fill="#1a1030" stroke="rgba(124,58,237,0.2)" strokeWidth="1" />
              <rect x="10" y="30" width="18" height="6" rx="2" fill="#13101e" />
              {/* stems */}
              <path d="M 19 30 Q 19 18 14 10" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
              <path d="M 19 28 Q 22 16 27 8"  fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
              <path d="M 19 26 Q 14 18 10 14" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
              {/* leaves */}
              <ellipse cx="13" cy="9"  rx="7" ry="4" fill="#16a34a" transform="rotate(-30,13,9)" />
              <ellipse cx="27" cy="7"  rx="7" ry="4" fill="#22c55e" transform="rotate(20,27,7)" />
              <ellipse cx="10" cy="13" rx="6" ry="3.5" fill="#15803d" transform="rotate(-50,10,13)" />
            </g>
          </svg>
        </div>
      </div>

      {/* CSS keyframes injected */}
      <style>{`
        @keyframes float {
          0%,100%{ transform:translateY(0) }
          50%{ transform:translateY(-14px) }
        }
        @keyframes breathe {
          0%,100%{ transform:scaleY(1) scaleX(1) }
          50%{ transform:scaleY(1.025) scaleX(0.998) }
        }
        @keyframes handType {
          0%,100%{ transform:translateY(0) rotate(0deg) }
          25%{ transform:translateY(-3px) rotate(-1.5deg) }
          75%{ transform:translateY(-1px) rotate(1deg) }
        }
        @keyframes hairWave {
          0%,100%{ transform:rotate(0deg) translateX(0) }
          25%{ transform:rotate(1.2deg) translateX(2px) }
          75%{ transform:rotate(-1.2deg) translateX(-2px) }
        }
        @keyframes codeScroll {
          0%{ transform:translateY(0) }
          100%{ transform:translateY(-55px) }
        }
        @keyframes orbit {
          from{ transform:rotate(0deg) translateY(var(--r,160px)) rotate(0deg) }
          to{ transform:rotate(360deg) translateY(var(--r,160px)) rotate(-360deg) }
        }
        @keyframes orbit-rev {
          from{ transform:rotate(0deg) translateY(var(--r,215px)) rotate(0deg) }
          to{ transform:rotate(-360deg) translateY(var(--r,215px)) rotate(360deg) }
        }
      `}</style>
    </div>
  )
}
