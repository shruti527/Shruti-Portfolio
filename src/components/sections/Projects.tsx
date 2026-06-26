import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../../data'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  useEffect(() => {
    // Disable pinning on mobile to allow scrolling
    if (window.innerWidth <= 768) return

    let translateX: number = 0

    function setTranslateX() {
      const box = document.getElementsByClassName('work-box')
      if (box.length === 0) return
      const container = document.querySelector('.work-container')
      if (!container) return
      
      const rectLeft = container.getBoundingClientRect().left
      const rect = box[0].getBoundingClientRect()
      const parentElement = box[0].parentElement
      if (!parentElement) return
      
      const parentWidth = parentElement.getBoundingClientRect().width
      const computedStyle = window.getComputedStyle(box[0])
      const marginLeft = parseInt(computedStyle.marginLeft) || 0
      const marginRight = parseInt(computedStyle.marginRight) || 0
      const boxTotalWidth = rect.width + marginLeft + marginRight
      
      let padding: number = parseInt(computedStyle.padding) / 2
      translateX = boxTotalWidth * box.length - (rectLeft + parentWidth) + padding
    }

    setTranslateX()

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.work-section',
        start: 'top top',
        end: `+=${translateX}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: 'work',
        invalidateOnRefresh: true,
      },
    })

    timeline.to('.work-flex', {
      x: -translateX,
      ease: 'none',
    })

    // Refresh ScrollTrigger after layout settles
    ScrollTrigger.refresh()

    // Clean up
    return () => {
      timeline.kill()
      ScrollTrigger.getById('work')?.kill()
    }
  }, [])

  return (
    <div className="work-section" id="projects" style={{ position: 'relative', paddingTop: '80px' }}>
      <div className="work-container section-container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-label">03 / Projects</span>
          <h2 className="grad" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-.03em', margin: '15px 0 10px' }}>
            Things I've Built
          </h2>
          <p style={{ color: '#4a5568', fontSize: '.92rem' }}>
            Real products · Real users · Real problems solved
          </p>
        </div>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.tagline}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tags.join(', ')}</p>
                <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="work-image">
                <div className="work-image-in" style={{ width: '100%', height: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', overflow: 'hidden', display: 'flex' }}>
                  {project.image && (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* See All Works Button */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my projects on GitHub</p>
              <a href="https://github.com/shruti527" target="_blank" rel="noopener noreferrer" className="see-all-btn" data-cursor="disable">
                View All on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
