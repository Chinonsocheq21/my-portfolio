import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '2+', label: 'Years Experience' },
  { value: '3.2', label: 'GPA' },
  { value: '70%', label: 'ML Model Accuracy' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{ padding: '6rem 6rem', position: 'relative' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-badge">About Me</span>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
              Passionate about AI & building meaningful software
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.6)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '0.875rem', lineHeight: 1.8 }}>
              <p>
                I'm Chinonso Egeolu, a Mathematics and Computer Science student at Morgan State University with a deep passion for artificial intelligence, machine learning, and full-stack development.
              </p>
              <p>
                My journey has taken me from research labs studying climate change patterns with LSTM neural networks, to Google's prestigious Tech Exchange program where I honed my skills in data structures, algorithms, and product development alongside 179 other top students.
              </p>
              <p>
                I build intelligent applications that bridge the gap between cutting-edge AI and real-world user needs — from AI-powered vehicle diagnostics to health & fitness platforms powered by Generative AI.
              </p>
            </div>

            {/* Hobbies */}
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                When I'm not coding
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  { emoji: '🎮', label: 'Video Games' },
                  { emoji: '🎵', label: 'Music' },
                  { emoji: '🏓', label: 'Ping Pong' },
                  { emoji: '⚽', label: 'Soccer' },
                  { emoji: '🍲', label: 'Nigerian Food' },
                ].map((hobby) => (
                  <span
                    key={hobby.label}
                    className="liquid-glass"
                    style={{
                      borderRadius: '9999px',
                      padding: '0.375rem 0.875rem',
                      fontSize: '0.8rem',
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.65)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                    }}
                  >
                    <span>{hobby.emoji}</span> {hobby.label}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
              <a
                href="https://www.linkedin.com/in/chinonso-egeolu-a6123124a"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-strong"
                style={{
                  borderRadius: '9999px',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.875rem',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  color: '#fff',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Chinonsocheq21"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass"
                style={{
                  borderRadius: '9999px',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.875rem',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="liquid-glass"
                style={{
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3rem)',
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  color: '#fff',
                  marginBottom: '0.5rem',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.75rem',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
