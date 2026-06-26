export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    fontFamily: { mono: ['"JetBrains Mono"','monospace'], sans: ['Inter','sans-serif'], display: ['"Space Grotesk"','sans-serif'] },
    colors: { bg: '#060b18', surface: '#0d1526', violet: '#7c3aed', cyan: '#06b6d4', muted: '#4a5568', text: '#c5cdd8' }
  }},
  plugins: []
}
