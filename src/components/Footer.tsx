import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="footer-pad" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.3)',
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: '0.75rem',
          margin: 0,
        }}>
          &copy; 2026 Chinonso C Egeolu. Built with React & TypeScript.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="https://github.com/Chinonsocheq21" target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}
          >
            <GithubIcon size={16} />
          </a>
          <a href="https://www.linkedin.com/in/chinonso-egeolu-a6123124a" target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}
          >
            <LinkedinIcon size={16} />
          </a>
          <a href="https://x.com/ChinonsoEg7268" target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s', textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}
          >
            <TwitterIcon size={16} />
          </a>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['Privacy', 'Terms', 'Contact'].map((link) => (
            <a key={link} href="#" style={{
              color: 'rgba(255,255,255,0.3)',
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: '0.75rem',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
