export const meta = {
  name: 'Shruti Chedge',
  roles: ['Full Stack Developer', 'React & Node.js Engineer', 'TypeScript Specialist', 'Blockchain Builder'],
  tagline: 'Building real-world full-stack apps with React, Node.js & TypeScript.',
  location: 'Nagpur, Maharashtra, India',
  email: 'shrutichedge@gmail.com',
  github: 'https://github.com/shruti527',
  linkedin: 'https://www.linkedin.com/in/shruti-chedge-6ba853306',
  portfolio: 'https://shruti-portfolio-bice.vercel.app',
  available: true,
}

export const stats = [
  { value: 10, suffix: '+', label: 'Projects Shipped' },
  { value: 9.0, suffix: '/10', label: 'CGPA', fixed: 1 },
  { value: 20, suffix: '+', label: 'Technologies' },
  { value: 18, suffix: '+', label: 'Months Interning' },
]

export const skills = [
  {
    category: 'Frontend',
    icon: '⚛️',
    color: '#61DAFB',
    glow: 'rgba(97,218,251,0.15)',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#86EFAC',
    glow: 'rgba(134,239,172,0.15)',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'Firebase', 'JWT Auth'],
  },
  {
    category: 'Database',
    icon: '🍃',
    color: '#4ADE80',
    glow: 'rgba(74,222,128,0.15)',
    items: ['MongoDB', 'PostgreSQL', 'Firestore', 'Redis', 'Prisma ORM'],
  },
  {
    category: 'Blockchain',
    icon: '⛓️',
    color: '#FCD34D',
    glow: 'rgba(252,211,77,0.15)',
    items: ['Ethereum', 'Solidity', 'IPFS', 'Web3.js', 'Smart Contracts', 'Hardhat'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: '#F472B6',
    glow: 'rgba(244,114,182,0.15)',
    items: ['Git', 'GitHub', 'Vercel', 'Docker', 'Linux', 'Postman'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'DigiSewa Blockchain Verifier',
    tagline: 'Tamper-proof credential verification',
    description: 'Decentralized license verification on Ethereum with IPFS document storage and role-based access control. Deployed institutionally at GHR University.',
    tags: ['Ethereum', 'Solidity', 'IPFS', 'React', 'Web3.js', 'RBAC'],
    category: 'blockchain',
    color: '#F59E0B',
    accent: '#7c3aed',
    icon: '🔐',
    highlights: ['On-chain RBAC with Solidity', 'IPFS decentralized storage', 'Gas-optimized contracts', 'Institutional deployment'],
    github: 'https://github.com/shruti527/DigiSewa',
    image: '/image/blockchain.png',
    featured: false,

  },
  {
    id: 2,
    title: 'Money Management Application',
    tagline: 'Personal finance & expense tracking desktop app',
    description: 'A cross-platform desktop application for tracking income, managing expenses, and analyzing personal budgets through an intuitive interface. Features secure MySQL storage and efficient financial reporting.',
    tags: ['Python', 'Tkinter', 'MySQL'],
    category: 'fullstack',
    color: '#22c55e',
    accent: '#0f766e',
    icon: '💰',
    highlights: [
      'Income & expense tracking',
      'Budget visualization dashboard',
      'Normalized MySQL database design',
      'Fast financial reporting & analytics'
    ],
    github: 'https://github.com/shruti527/MONEY-MANAGEMENT-APP',
    image: '/image/money management.png',
    featured: true
  },
  {
    id: 3,
    title: 'SafePulse',
    tagline: 'Real-time personal safety platform',
    description: 'Full-stack safety app with real-time location sharing, SOS alerts, geofencing, and push notifications. Directional contact-sharing model with Socket.IO and Firebase FCM.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Firebase FCM', 'Geofencing'],
    category: 'fullstack',
    color: '#7c3aed',
    accent: '#06b6d4',
    icon: '🛡️',
    highlights: ['Real-time location via Haversine + 2dsphere', 'SOS broadcast to trusted contacts', 'Firebase push notifications', 'Geofence entry/exit alerts'],
    github: 'https://github.com/shruti527/Safe-Pulse',
    live: 'safe-pulse-omega.vercel.app',
    image: '/image/safe.png',
    featured: true,

  },
]

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: "Chetan's Royals Webtech Pvt. Ltd.",
    period: 'Dec 2025 – Present',
    location: 'Nagpur, MH',
    type: 'Internship',
    color: '#7c3aed',
    points: [
      'Building production React + Node.js features for live client applications',
      'Implemented Socket.IO real-time features and Firebase integrations',
      'Developed RESTful APIs, admin panel routing, and blog rendering pipelines',
      'Achieved 20–30% query optimization improvement across key endpoints',
    ],
  },
  {
    role: 'B.Tech Computer Science Engineering',
    company: 'G.H. Raisoni University',
    period: '2022 – 2026',
    location: 'Nagpur, MH',
    type: 'Education',
    color: '#06b6d4',
    points: [
      'CGPA: 9.0 / 10.0 — Consistent top academic performance',
      'Final-year project: SafePulse — real-time safety platform',
      'Core: DSA, OS, DBMS, Computer Networks, Blockchain Technology',
      'Active member of coding club and student entrepreneurship cell',
    ],
  },
]

export const terminalLines = [
  { delay: 0, text: '$ whoami', color: '#06b6d4' },
  { delay: 400, text: 'shruti-chedge', color: '#a78bfa' },
  { delay: 900, text: '$ cat role.txt', color: '#06b6d4' },
  { delay: 1300, text: 'Full Stack Developer | B.Tech CSE \'25', color: '#c5cdd8' },
  { delay: 1800, text: '$ ls skills/', color: '#06b6d4' },
  { delay: 2200, text: 'React  Next.js  Node.js  TypeScript  MongoDB  Solidity', color: '#86efac' },
  { delay: 2700, text: '$ git log --oneline -3', color: '#06b6d4' },
  { delay: 3100, text: 'a3f91b feat: SafePulse SOS broadcast system', color: '#fcd34d' },
  { delay: 3400, text: 'c8e22d feat: Railways TC Excel export', color: '#fcd34d' },
  { delay: 3700, text: 'e12fa9 feat: blockchain RBAC smart contract', color: '#fcd34d' },
  { delay: 4200, text: '$ echo $STATUS', color: '#06b6d4' },
  { delay: 4600, text: '🟢 Available for opportunities', color: '#4ade80' },
]
