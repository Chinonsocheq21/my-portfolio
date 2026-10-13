import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail, Play, RotateCcw, X } from 'lucide-react'

const SEEN_KEY = 'intro-seen-v2'
export const OPEN_INTRO_EVENT = 'open-intro'

export function shouldShowIntro() {
  try {
    return localStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    return true
  }
}

// A /hi page: one narrated film on a plain ground, then the portfolio.
export default function Intro({ open, onClose }: { open: boolean; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [phase, setPhase] = useState<'ready' | 'playing' | 'ended'>('ready')
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setPhase('ready')
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const finish = useCallback(() => {
    try {
      localStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* private mode */
    }
    videoRef.current?.pause()
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') finish()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, finish])

  const start = async () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    try {
      await v.play()
    } catch {
      v.muted = true
      await v.play().catch(() => {})
    }
    setPhase('playing')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="intro"
          className="hi-root"
          role="dialog"
          aria-modal="true"
          aria-label="Hi, I'm Chino"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="hi-skip" onClick={finish} aria-label="Skip intro">
            Skip <X size={14} />
          </button>

          <motion.div
            className="hi-frame"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hi-corner tl" />
            <span className="hi-corner tr" />
            <span className="hi-corner bl" />
            <span className="hi-corner br" />
            <video
              ref={videoRef}
              className="hi-video"
              src="/intro/chino-hi.mp4"
              poster="/intro/chino-hi.jpg"
              playsInline
              preload="auto"
              controls={phase === 'playing'}
              onEnded={() => setPhase('ended')}
            />
            {phase === 'ready' && (
              <button className="hi-play" onClick={start} aria-label="Play">
                <Play size={22} fill="#fff" color="#fff" />
              </button>
            )}
            {phase === 'ended' && (
              <motion.div className="hi-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <button className="hi-primary" onClick={finish}>
                  Enter portfolio <ArrowRight size={16} />
                </button>
                <a className="hi-secondary" href="mailto:robertchinonso6@gmail.com">
                  <Mail size={15} /> Email me
                </a>
                <button className="hi-ghost" onClick={start}>
                  <RotateCcw size={14} /> Replay
                </button>
              </motion.div>
            )}
          </motion.div>

          <p className="hi-credit">Music: "Dreamer" by Kevin MacLeod (incompetech.com), CC BY 4.0</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
