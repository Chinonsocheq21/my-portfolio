import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import BlurText from './BlurText'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="contact" className="contact-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '9999px',
          filter: 'blur(100px)',
        }} />
      </div>

      <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-badge">Get In Touch</span>
        </motion.div>

        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: '#fff',
          letterSpacing: '-0.02em',
          lineHeight: 0.9,
          marginTop: '1rem',
          marginBottom: '1.5rem',
        }}>
          <BlurText text="Let's Build Something Together" delayPerWord={0.07} />
        </h2>

        <motion.p
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            fontSize: '1rem',
            marginBottom: '3rem',
            maxWidth: '32rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          I'm currently open to internships, research opportunities, and interesting project collaborations. Let's connect!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}
        >
          <a
            href="mailto:robertchinonso6@gmail.com"
            className="liquid-glass-strong"
            style={{
              borderRadius: '9999px',
              padding: '1rem 2rem',
              fontSize: '1rem',
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
            <Mail size={18} /> Send Email <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/chinonso-egeolu-a6123124a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#fff',
              color: '#000',
              borderRadius: '9999px',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#fff' }}
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '0.875rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={14} />
            <span>robertchinonso6@gmail.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={14} />
            <span>Baltimore, MD</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
