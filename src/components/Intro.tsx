import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail, Pause, Play, RotateCcw, Volume2, VolumeX, X } from 'lucide-react'

type Word = { w: string; t: number; e: number }
type Line = { id: string; text: string; start: number; end: number; words: Word[] }
type Timeline = { duration: number; lines: Line[] }

const SEEN_KEY = 'intro-seen-v1'
export const OPEN_INTRO_EVENT = 'open-intro'

// What the rail beside the presenter lights up as each line is spoken.
const BEATS: { id: string; label: string; detail: string }[] = [
  { id: 'who', label: 'Morgan State University', detail: 'Math & CS, Fall 2026' },
  { id: 'honda', label: 'American Honda', detail: 'Software co-op, summer 2026' },
  { id: 'google', label: 'Google Tech Exchange', detail: '1 of 180 nationwide' },
  { id: 'autodoctor', label: 'AutoDoctor AI', detail: 'Gemini vehicle diagnostics' },
  { id: 'axiom', label: 'Axiom Sniper', detail: 'Automated Solana trading' },
  { id: 'role', label: 'Open to full-time', detail: 'Software / AI engineer' },
  { id: 'freelance', label: 'Freelance builds', detail: 'Have something to make?' },
]

export function shouldShowIntro() {
  try {
    return localStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    return true
  }
}

export default function Intro({ open, onClose }: { open: boolean; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [tl, setTl] = useState<Timeline | null>(null)
  const [phase, setPhase] = useState<'ready' | 'playing' | 'paused' | 'ended'>('ready')
  const [time, setTime] = useState(0)
  const [muted, setMuted] = useState(false)
  const [videoOk, setVideoOk] = useState(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    fetch('/intro/timeline.json')
      .then((r) => r.json())
      .then(setTl)
      .catch(() => setTl(null))
  }, [])

  // Lock page scroll while the intro covers it.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Reset to the start screen every time it opens.
  useEffect(() => {
    if (!open) return
    setPhase('ready')
    setTime(0)
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }, [open])

  // Drive captions off the video clock, not timers, so they never drift.
  useEffect(() => {
    if (phase !== 'playing') return
    let raf = 0
    const tick = () => {
      const v = videoRef.current
      if (v) setTime(v.currentTime)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [phase])

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
    v.muted = muted
    try {
      await v.play()
      setPhase('playing')
    } catch {
      // Sound was refused; play muted so the captions still carry it.
      v.muted = true
      setMuted(true)
      await v.play().catch(() => setVideoOk(false))
      setPhase('playing')
    }
  }

  const togglePause = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPhase('playing')
    } else {
      v.pause()
      setPhase('paused')
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    const next = !muted
    setMuted(next)
    if (v) v.muted = next
  }

  const duration = tl?.duration ?? videoRef.current?.duration ?? 76
  const line = useMemo(() => {
    if (!tl) return null
    let cur: Line | null = null
    for (const l of tl.lines) if (time >= l.start - 0.15) cur = l
    return cur
  }, [tl, time])
  const lineDone = line ? time > line.end + 0.35 : false
  const reached = (id: string) => {
    const l = tl?.lines.find((x) => x.id === id)
    return !!l && time >= l.start - 0.1
  }
  const activeBeat = line && !lineDone ? line.id : null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="intro"
          className="intro-root"
          role="dialog"
          aria-modal="true"
          aria-label="Introduction to Chinonso Egeolu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="intro-orb intro-orb-a" />
          <div className="intro-orb intro-orb-b" />

          <div className="intro-top">
            <span className="section-badge" style={{ margin: 0 }}>
              An introduction
            </span>
            <button className="intro-ghost" onClick={finish} aria-label="Skip intro">
              Skip intro <X size={14} />
            </button>
          </div>

          <div className="intro-grid">
            {/* Presenter */}
            <motion.div
              className="intro-stage liquid-glass-strong"
              initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {videoOk ? (
                <video
                  ref={videoRef}
                  className="intro-video"
                  src="/intro/presenter.mp4"
                  poster="/intro/poster.jpg"
                  playsInline
                  preload="auto"
                  onEnded={() => {
                    setPhase('ended')
                    setTime(duration)
                  }}
                  onError={() => setVideoOk(false)}
                />
              ) : (
                <img className="intro-video" src="/intro/poster.jpg" alt="" />
              )}
              <div className="intro-stage-fade" />

              {phase === 'ready' && (
                <motion.button
                  className="intro-play"
                  onClick={start}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  aria-label="Play introduction"
                >
                  <span className="intro-play-ring">
                    <Play size={22} fill="#000" />
                  </span>
                </motion.button>
              )}

              {phase !== 'ready' && (
                <div className="intro-controls">
                  <button className="intro-icon" onClick={phase === 'ended' ? start : togglePause} aria-label={phase === 'playing' ? 'Pause' : 'Play'}>
                    {phase === 'playing' ? <Pause size={14} /> : phase === 'ended' ? <RotateCcw size={14} /> : <Play size={14} />}
                  </button>
                  <div className="intro-progress">
                    <div style={{ width: `${Math.min(100, (time / duration) * 100)}%` }} />
                  </div>
                  <button className="intro-icon" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
                    {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>
              )}
            </motion.div>

            {/* Words + rail */}
            <div className="intro-copy">
              <AnimatePresence mode="wait">
                {phase === 'ready' ? (
                  <motion.div
                    key="ready"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="intro-eyebrow">Software engineer · AI developer · Baltimore</p>
                    <h1 className="intro-name">
                      Meet <br />
                      Chinonso Egeolu
                    </h1>
                    <p className="intro-sub">A 75 second introduction, for recruiters and anyone curious. Sound on.</p>
                    <div className="intro-actions">
                      <button className="intro-primary" onClick={start}>
                        <Play size={16} fill="#000" /> Meet Chinonso
                      </button>
                      <button className="intro-secondary liquid-glass" onClick={finish}>
                        Go straight to the portfolio
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="talk"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="intro-talk"
                  >
                    <div className={'intro-caption' + (phase === 'ended' ? ' done' : '')} aria-live="polite">
                      {line && phase !== 'ended' ? (
                        <p key={line.id}>
                          {line.words.map((wd, i) => {
                            const said = time >= wd.t - 0.04
                            const now = said && time < wd.e + 0.12
                            return (
                              <span key={i} className={'intro-word' + (said ? ' said' : '') + (now ? ' now' : '')}>
                                {wd.w}{' '}
                              </span>
                            )
                          })}
                        </p>
                      ) : phase === 'ended' ? (
                        <p className="intro-end-line">Thanks for watching. The rest is below.</p>
                      ) : null}
                    </div>

                    <ol className="intro-rail">
                      {BEATS.map((b, i) => {
                        const on = reached(b.id) || phase === 'ended'
                        const live = activeBeat === b.id
                        return (
                          <li key={b.id} className={'intro-beat' + (on ? ' on' : '') + (live ? ' live' : '')}>
                            <span className="intro-node">{String(i + 1).padStart(2, '0')}</span>
                            <span className="intro-beat-text">
                              <span className="intro-beat-label">{b.label}</span>
                              <span className="intro-beat-detail">{b.detail}</span>
                            </span>
                          </li>
                        )
                      })}
                    </ol>

                    <AnimatePresence>
                      {phase === 'ended' && (
                        <motion.div
                          className="intro-actions"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <button className="intro-primary" onClick={finish}>
                            Enter portfolio <ArrowRight size={16} />
                          </button>
                          <a className="intro-secondary liquid-glass" href="mailto:robertchinonso6@gmail.com">
                            <Mail size={15} /> Email Chinonso
                          </a>
                          <button className="intro-ghost" onClick={start}>
                            <RotateCcw size={14} /> Replay
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <p className="intro-note">
            Presenter is an AI-generated character. Everything said is from Chinonso's real record.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
