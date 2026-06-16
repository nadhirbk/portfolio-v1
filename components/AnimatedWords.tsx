'use client'

import { motion } from 'framer-motion'

const containerVariants = (delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: delay,
    },
  },
})

const wordVariants = {
  hidden: { y: '115%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

interface Props {
  text: string
  delay?: number
}

export default function AnimatedWords({ text, delay = 0 }: Props) {
  const lines = text.split('\n')

  return (
    <motion.span
      className="block"
      variants={containerVariants(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(' ').map((word, wi) => (
            <span
              key={`${li}-${wi}`}
              className="inline-block overflow-hidden align-bottom mr-[0.28em]"
              style={{ paddingBottom: '0.3em', marginBottom: '-0.3em' }}
            >
              {/* animated-word sets opacity:0 + translateY(115%) in CSS so SSR render is already hidden */}
              <motion.span className="inline-block animated-word" variants={wordVariants}>
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </motion.span>
  )
}
