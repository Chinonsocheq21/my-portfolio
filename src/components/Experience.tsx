import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Honda',
    role: 'Intern',
    period: 'Present',
    location: 'United States',
    description: 'Currently interning at Honda, contributing to engineering and technology initiatives within one of the world\'s leading automotive manufacturers.',
    points: [
      'Working on internal engineering and technology projects',
      'Collaborating with cross-functional teams on innovative solutions',
    ],
    logo: 'H',
    color: 'linear-gradient(135deg, rgba(220,38,38,0.2), rgba(239,68,68,0.15))',
  },
  {
    company: 'Google Tech Exchange',
    role: 'Apprentice',
    period: 'January – May 2024',
    location: 'Mountain View, CA',
    description: "Chosen as one of 180 students to participate in Google's Tech Exchange program, gaining access to cutting-edge industry courses and mentorship from Google engineers.",
    points: [
      'Applied Data Structures & Algorithms with Google-scale thinking',
      'Software Development Studio with hands-on engineering projects',
      'Product Management fundamentals and go-to-market strategy',
    ],
    logo: 'G',
    color: 'linear-gradient(135deg, rgba(66,133,244,0.2), rgba(52,168,83,0.2))',
  },
  {
    company: 'Center for Equitable AI & Machine Learning',
    role: 'Research Intern',
    period: 'Summer 2023',
    location: 'Baltimore, MD',
    description: 'Collaborated with machine learning experts on deep learning research for climate change analysis, developing predictive models and analyzing time series environmental data.',
    points: [
      'Specialized in ANN and LSTM networks for time series data analysis',
      'Systematically recorded climate change trends and analytical data',
      'Designed predictive models achieving 70% accuracy rate',
    ],
    logo: 'AI',
    color: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))',
  },
  {
    company: 'Google, OpenAI & Anthropic (Claude)',
    role: 'Online Research Program Participant',
    period: 'Ongoing',
    location: 'Remote',
    description: 'Participated in online research and developer programs hosted by Google, OpenAI, and Anthropic, gaining hands-on exposure to frontier AI systems, APIs, and research methodologies.',
    points: [
      'Explored cutting-edge LLM capabilities and AI research from Google, OpenAI, and Anthropic',
      'Applied research insights to personal AI projects and applications',
      'Engaged with developer communities and program materials at the frontier of AI',
    ],
    logo: '🤖',
    color: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(59,130,246,0.2))',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="experience" style={{ padding: '6rem 6rem', position: 'relative' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-badge">Experience</span>
          <h2 className="section-heading" style={{ marginBottom: '3rem' }}>Where I've Worked</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="liquid-glass"
              style={{ borderRadius: '1rem', padding: '2rem' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
                <div>
                  <div
                    className="liquid-glass-strong"
                    style={{
                      borderRadius: '1rem',
                      width: '3rem',
                      height: '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: 'italic',
                      fontSize: '1.125rem',
                      marginBottom: '1rem',
                      background: exp.color,
                    }}
                  >
                    {exp.logo}
                  </div>
                  <h3 style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: 'italic',
                    fontSize: '1.25rem',
                    color: '#fff',
                    marginBottom: '0.25rem',
                    marginTop: 0,
                  }}>{exp.company}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '0.875rem', margin: '0 0 0.25rem' }}>{exp.role}</p>
                  <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '0.75rem', margin: '0 0 0.125rem' }}>{exp.period}</p>
                  <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '0.75rem', margin: 0 }}>{exp.location}</p>
                </div>
                <div>
                  <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                    marginTop: 0,
                  }}>
                    {exp.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.points.map((point, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.5)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '0.875rem' }}>
                        <span style={{ color: 'rgba(255,255,255,0.2)', marginTop: '0.125rem', flexShrink: 0 }}>→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
