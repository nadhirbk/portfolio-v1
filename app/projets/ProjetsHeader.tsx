'use client'

import { motion } from 'motion/react'

const POP = [0.34, 1.56, 0.64, 1] as const

export default function ProjetsHeader() {
  return (
    <header className="pt-6 pb-12 md:pb-16">
      <motion.p
        className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: POP }}
      >
        Portfolio
      </motion.p>
      <motion.h1
        className="text-5xl md:text-7xl font-black text-background leading-none tracking-tight mb-4"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.25, ease: POP }}
      >
        Mes projets
      </motion.h1>
      <motion.p
        className="text-base md:text-lg text-background/50 max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        Trois réalisations récentes pour des clients aux besoins variés.
      </motion.p>
    </header>
  )
}
