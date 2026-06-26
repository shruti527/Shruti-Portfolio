import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import './Skills.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any }
  }),
}

const techStack = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Framer Motion', icon: 'https://img.icons8.com/ios-filled/50/ffffff/atom-symbol.png' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'REST APIs', icon: 'https://img.icons8.com/ios-filled/50/ffffff/api.png' },
  { name: 'Socket.IO', icon: 'https://img.icons8.com/ios-filled/50/ffffff/socket-io.png' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'JWT Auth', icon: 'https://img.icons8.com/ios-filled/50/ffffff/key.png' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Firestore', icon: 'https://img.icons8.com/ios-filled/50/ffffff/google-firebase-console.png' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Prisma ORM', icon: 'https://img.icons8.com/ios-filled/50/ffffff/database-administration.png' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-plain.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Ethereum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg' },
  { name: 'Solidity', icon: 'https://img.icons8.com/ios-filled/50/ffffff/solidity.png' },
  { name: 'IPFS', icon: 'https://img.icons8.com/ios-filled/50/ffffff/ipfs.png' },
  { name: 'Web3.js', icon: 'https://img.icons8.com/ios-filled/50/ffffff/web3.png' },
  { name: 'Smart Contracts', icon: 'https://img.icons8.com/ios-filled/50/ffffff/smart-contracts.png' },
  { name: 'Hardhat', icon: 'https://img.icons8.com/ios-filled/50/ffffff/engineering.png' },
  { name: 'Python', icon: 'https://img.icons8.com/ios-filled/50/ffffff/python.png' },
  { name: 'MySQL', icon: 'https://img.icons8.com/ios-filled/50/ffffff/mysql-logo.png' },
  { name: 'Tkinter', icon: 'https://img.icons8.com/ios-filled/50/ffffff/window.png' },
]

const rowSizes = [10, 8, 6, 4, 2]

function buildTechRows(items: { name: string; icon: string }[]) {
  const rows: { name: string; icon: string }[][] = []
  let start = 0

  for (const size of rowSizes) {
    rows.push(items.slice(start, start + size))
    start += size
  }

  return rows
}

export default function Skills() {
  const { ref, inView } = useInView()
  const techRows = buildTechRows(techStack)

  return (
    <section id="skills" ref={ref as any} className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} style={{ textAlign: 'center' }}>
          <h2>Tech Stack</h2>
        </motion.div>

        <motion.div className="techstack-pyramid" custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          {techRows.map((row, rowIndex) => (
            <motion.div key={rowIndex} className="techstack-row" custom={rowIndex + 2} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              {row.map((tech, techIndex) => (
                <div
                  key={`${tech.name}-${techIndex}`}
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
