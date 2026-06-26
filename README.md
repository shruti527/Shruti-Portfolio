# Shruti Chedge — Portfolio 

Premium full-stack developer portfolio inspired by red1-for-hek.vercel.app

## Stack
React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion

## Features
- Terminal-style loading screen (boot sequence)
- Scroll progress bar at top
- Custom animated cursor (dot + lagging ring)
- Particle canvas with mouse repulsion
- Animated Indian female developer SVG illustration
  - Dark skin tone, bindi, earrings, headphones
  - Floating hair animation
  - Typing hands animation
  - Live VS Code screen with SafePulse code
  - Coffee mug + plant on desk
  - Orbiting tech badges (React, Node, TypeScript, MongoDB)
- Typing effect hero (4 roles cycling)
- Terminal window in About section
- Animated stats counters
- Skills with proficiency bars
- Project filter tabs (All / Full Stack / Blockchain)
- Interactive timeline
- Contact form
- Back-to-top button
- Fully responsive

## Quick Start

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build        # builds to /dist
npx vercel --prod    # deploy instantly
```

## Customise

| File | What to change |
|------|---------------|
| `src/data/index.ts` | All content — projects, skills, experience, stats |
| `src/styles/globals.css` | Colors via CSS variables in `:root` |
| `src/components/3d/GirlDeveloper.tsx` | SVG illustration |
| `public/resume.pdf` | Your resume (add this file) |

## Wire Up Contact Form (Production)

```bash
npm install @emailjs/browser
```

In `Contact.tsx` replace the mock `setTimeout` with:
```ts
import emailjs from '@emailjs/browser'
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```
