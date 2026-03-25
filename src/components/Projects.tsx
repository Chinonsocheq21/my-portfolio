import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

const projects = [
  {
    name: 'AutoDoctor AI',
    description: 'AI-powered vehicle diagnostic platform using Google Gemini 3.1 Pro for multimodal analysis. Features 3D damage visualization with Three.js, real-time part pricing, and PDF report generation.',
    tech: ['React', 'TypeScript', 'Node.js', 'Three.js', 'Google Gemini AI', 'SQLite', 'OAuth 2.0'],
    github: null,
    featured: true,
    highlights: [
      'Multimodal AI diagnostic engine via Google Gemini 3.1 Pro',
      '3D interactive damage visualization with React Three Fiber',
      'Real-time part pricing via Google Search Grounding',
      'PDF report generation with jsPDF and html2canvas',
      'Voice assistant & scanning HUD interface',
    ],
  },
  {
    name: 'Axiom Sniper',
    description: 'Fully automated Solana meme coin trading bot deployed as a Tampermonkey browser extension. Intercepts live WebSocket price feeds, runs momentum detection with cooldown logic, and executes buy/sell via Jupiter DEX — targeting 15% TP / 15% SL per position. Includes Sim Mode and Signal Mode.',
    tech: ['JavaScript', 'TypeScript', 'React', 'Solana Web3.js', 'Jupiter DEX API', 'WebSocket', 'Vite', 'Tailwind CSS', 'Phantom Wallet SDK'],
    github: null,
    featured: false,
    highlights: [
      'On-chain Solana payment verification for lifetime license gating (no backend)',
      'HMAC-signed localStorage anti-tamper protection',
      'Telegram trade notifications',
      'Companion React landing page with Framer Motion',
    ],
  },
  {
    name: 'Health & Fitness Web App',
    description: 'Comprehensive health platform powered by Google Generative AI and GCP. Generates personalized meal plans and provides AI-driven coaching based on user goals and preferences.',
    tech: ['Python', 'Streamlit', 'GCP', 'BigQuery', 'Generative AI'],
    github: 'https://github.com/Chinonsocheq21',
    featured: false,
  },
  {
    name: 'PassSafe',
    description: 'Secure iOS password manager with biometric authentication. Uses CryptoKit for encryption, Keychain for PIN storage, and supports Face ID/Touch ID via LocalAuthentication.',
    tech: ['Swift', 'SwiftUI', 'CryptoKit', 'LocalAuthentication', 'Keychain'],
    github: 'https://github.com/Chinonsocheq21/PassSafe',
    featured: false,
  },
  {
    name: 'ToDoList App',
    description: 'Clean SwiftUI iOS task manager with a polished UI featuring gradients, shadows, and custom buttons. Tasks persist via JSON with an elegant empty state experience.',
    tech: ['Swift', 'SwiftUI', 'JSON'],
    github: 'https://github.com/Chinonsocheq21/ToDoListApp',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  if (project.featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="liquid-glass"
        style={{
          gridColumn: '1 / -1',
          borderRadius: '1.5rem',
          padding: '3rem',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="section-badge" style={{ marginBottom: 0 }}>Featured Project</span>
            </div>
            <h3 style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#fff',
              marginBottom: '1rem',
              marginTop: 0,
            }}>{project.name}</h3>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: '0.875rem',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {project.tech.map((t) => (
                <span key={t} className="liquid-glass" style={{
                  borderRadius: '9999px',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem',
                  fontFamily: "'Barlow', sans-serif",
                  color: 'rgba(255,255,255,0.6)',
                }}>
                  {t}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-strong"
                style={{
                  borderRadius: '9999px',
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.875rem',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: 'fit-content',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                <GithubIcon size={16} /> View on GitHub
              </a>
            )}
          </div>
          {project.highlights && (
            <div>
              <h4 style={{
                fontSize: '0.75rem',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500,
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                marginTop: 0,
              }}>Key Features</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} className="liquid-glass" style={{
                    borderRadius: '0.75rem',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', marginTop: '0.125rem', flexShrink: 0 }}>→</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '0.875rem' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="liquid-glass"
      style={{
        borderRadius: '1rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h3 style={{
        fontFamily: "'Instrument Serif', serif",
        fontStyle: 'italic',
        fontSize: '1.25rem',
        color: '#fff',
        marginBottom: '0.75rem',
        marginTop: 0,
      }}>{project.name}</h3>
      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 300,
        fontSize: '0.875rem',
        lineHeight: 1.7,
        marginBottom: '1rem',
        flex: 1,
      }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
        {project.tech.map((t) => (
          <span key={t} className="liquid-glass" style={{
            borderRadius: '9999px',
            padding: '0.125rem 0.625rem',
            fontSize: '0.75rem',
            fontFamily: "'Barlow', sans-serif",
            color: 'rgba(255,255,255,0.5)',
          }}>
            {t}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.875rem',
            fontFamily: "'Barlow', sans-serif",
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#fff' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
        >
          <GithubIcon size={14} /> GitHub <ArrowUpRight size={12} />
        </a>
      )}
    </motion.div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section id="projects" style={{ padding: '6rem 6rem', position: 'relative' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-badge">Projects</span>
          <h2 className="section-heading">Things I've Built</h2>
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            fontSize: '0.875rem',
            marginTop: '1rem',
            maxWidth: '32rem',
          }}>
            From AI-powered diagnostics to iOS apps — here's a selection of projects that showcase my range and passion for building.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
