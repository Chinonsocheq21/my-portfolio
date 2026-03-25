import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface BlurTextProps {
  text: string
  className?: string
  delayPerWord?: number
}

export default function BlurText({ text, className = '', delayPerWord = 0.1 }: BlurTextProps) {
  const words = text.split(' ')
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          animate={isVisible ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: i * delayPerWord,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
