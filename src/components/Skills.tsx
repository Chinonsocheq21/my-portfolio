import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type SkillCategory = {
  title: string
  skills: string[]
  highlight?: boolean
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'Swift', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Google Gemini AI', 'TensorFlow', 'Deep Learning', 'LSTM/ANN', 'Prompt Engineering', 'LLM Integration'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'SwiftUI', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'Backend & Cloud',
    skills: ['Node.js', 'Express', 'Google Cloud Platform', 'BigQuery', 'SQLite', 'RESTful APIs'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Streamlit', 'OAuth 2.0', 'CryptoKit', 'jsPDF', 'Vite', 'Git'],
  },
  {
    title: 'Certifications',
    skills: ['Google Tech Exchange', 'Kaggle', 'BVCC Certificate', 'AWS Deep Racer'],
  },
  {
    title: 'Currently Learning',
    skills: ['OpenClaw', 'Robotics & Motion Planning', 'Low-Level Systems'],
    highlight: true,
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="skills" className="section-pad" style={{ position: 'relative' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-badge">Skills</span>
          <h2 className="section-heading" style={{ marginBottom: '3rem' }}>My Tech Stack</h2>
        </motion.div>

        <div className="grid-skills">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="liquid-glass"
              style={{
                borderRadius: '1rem',
                padding: '1.5rem',
                ...(cat.highlight ? { border: '1px solid rgba(255,255,255,0.12)' } : {}),
              }}
            >
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontSize: '1.125rem',
                color: '#fff',
                marginBottom: cat.highlight ? '0.5rem' : '1rem',
                marginTop: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                {cat.highlight && (
                  <span style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    background: '#4ade80',
                    borderRadius: '9999px',
                    display: 'inline-block',
                    flexShrink: 0,
                    animation: 'pulse 2s infinite',
                  }} />
                )}
                {cat.title}
              </h3>
              {cat.highlight && (
                <p style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '0.7rem', marginBottom: '0.75rem', marginTop: 0 }}>
                  Actively exploring & building with
                </p>
              )}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="liquid-glass-strong"
                    style={{
                      borderRadius: '9999px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.75rem',
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 500,
                      color: cat.highlight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
