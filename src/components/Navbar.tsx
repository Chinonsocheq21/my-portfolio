import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
      }}
    >
      <div
        className="liquid-glass"
        style={{
          borderRadius: '9999px',
          padding: '0.5rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          transition: 'all 0.3s',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(4px)',
        }}
      >
        {/* Logo */}
        <div
          className="liquid-glass-strong"
          style={{
            borderRadius: '9999px',
            width: '2.25rem',
            height: '2.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: '0.875rem',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          CE
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: '0.375rem 0.75rem',
                fontSize: '0.875rem',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500,
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                borderRadius: '9999px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:robertchinonso6@gmail.com"
          style={{
            background: '#fff',
            color: '#000',
            borderRadius: '9999px',
            padding: '0.375rem 1rem',
            fontSize: '0.875rem',
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 500,
            textDecoration: 'none',
            flexShrink: 0,
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#fff' }}
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  )
}
