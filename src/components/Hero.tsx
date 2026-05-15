import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import BlurText from './BlurText'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '6rem',
      }}
    >
      {/* Background gradient orbs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '24rem',
          height: '24rem',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '9999px',
          filter: 'blur(120px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '24rem',
          height: '24rem',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '9999px',
          filter: 'blur(100px)',
        }} />
      </div>

      <div className="hero-container" style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '80rem',
        margin: '0 auto',
        width: '100%',
      }}>
        <div className="hero-grid">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '2rem' }}
            >
              <span className="section-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}>
                <span style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  background: '#4ade80',
                  borderRadius: '9999px',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }} />
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 5vw, 5.5rem)',
              color: '#fff',
              lineHeight: 0.85,
              letterSpacing: '-3px',
              marginBottom: '1.5rem',
              marginTop: 0,
            }}>
              <BlurText text="Building the Future with Code & AI" delayPerWord={0.08} />
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: '1.125rem',
                marginBottom: '1rem',
                lineHeight: 1.6,
              }}
            >
              Hi, I'm <span style={{ color: '#fff', fontWeight: 500 }}>Chinonso Egeolu</span> — a Software Engineer & AI/ML Developer based in Baltimore, MD. I build intelligent applications that solve real problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 1.0 }}
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: '0.875rem',
                marginBottom: '2.5rem',
              }}
            >
              Morgan State University • BS Mathematics & Computer Science • Expected Fall 2026
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}
            >
              <a
                href="#projects"
                className="liquid-glass-strong"
                style={{
                  borderRadius: '9999px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.875rem',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                View My Work <ArrowUpRight size={16} />
              </a>
              <a
                href="mailto:robertchinonso6@gmail.com"
                style={{
                  background: '#fff',
                  color: '#000',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.875rem',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', fontFamily: "'Barlow', sans-serif" }}>Find me on</span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://github.com/Chinonsocheq21" target="_blank" rel="noopener noreferrer"
                  className="liquid-glass"
                  style={{
                    borderRadius: '9999px',
                    width: '2.25rem',
                    height: '2.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}>
                  <GithubIcon size={16} />
                </a>
                <a href="https://www.linkedin.com/in/chinonso-egeolu-a6123124a" target="_blank" rel="noopener noreferrer"
                  className="liquid-glass"
                  style={{
                    borderRadius: '9999px',
                    width: '2.25rem',
                    height: '2.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}>
                  <LinkedinIcon size={16} />
                </a>
                <a href="https://x.com/ChinonsoEg7268" target="_blank" rel="noopener noreferrer"
                  className="liquid-glass"
                  style={{
                    borderRadius: '9999px',
                    width: '2.25rem',
                    height: '2.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}>
                  <TwitterIcon size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-photo-right"
          >
            <div style={{ position: 'relative' }}>
              {/* Glow effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.05)',
                filter: 'blur(60px)',
                transform: 'scale(1.1)',
              }} />
              {/* Photo container */}
              <div className="hero-photo-box liquid-glass-strong">
                <img
                  src="https://i.imgur.com/oZCWCWv.jpeg"
                  alt="Chinonso Egeolu"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />
              </div>
              {/* Floating badge - GPA */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="liquid-glass-strong"
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  left: '-1rem',
                  borderRadius: '1rem',
                  padding: '0.75rem 1rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontFamily: "'Barlow', sans-serif", color: 'rgba(255,255,255,0.5)', marginBottom: '0.125rem' }}>Current GPA</div>
                <div style={{ fontSize: '1.5rem', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff' }}>3.2/4.0</div>
              </motion.div>
              {/* Floating badge - Projects */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="liquid-glass-strong"
                style={{
                  position: 'absolute',
                  top: '-1rem',
                  right: '-1rem',
                  borderRadius: '1rem',
                  padding: '0.75rem 1rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontFamily: "'Barlow', sans-serif", color: 'rgba(255,255,255,0.5)', marginBottom: '0.125rem' }}>Projects Built</div>
                <div style={{ fontSize: '1.5rem', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff' }}>5+</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '8rem',
        background: 'linear-gradient(to top, #000, transparent)',
        zIndex: 1,
      }} />
    </section>
  )
}
