'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import AnimatedWords from './AnimatedWords'

function RollingText({ text, hovered }: { text: string; hovered: boolean }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden align-bottom mr-[0.22em]"
          style={{ paddingBottom: '0.22em', marginBottom: '-0.22em' }}
        >
          <motion.span
            className="inline-block"
            animate={{ y: hovered ? '-120%' : '0%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay: i * 0.045 }}
          >
            {word}
          </motion.span>
          <motion.span
            className="inline-block absolute inset-0"
            animate={{ y: hovered ? '0%' : '120%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay: i * 0.045 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}

export default function Contact() {
  const [emailHovered, setEmailHovered] = useState(false)

  return (
    <section id="contact" className="section-padding bg-background min-h-[calc(100vh-80px)] flex flex-col pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16">
      <div className="container-max flex flex-col flex-1">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/35 mb-6"
          >
            05 — Contact
          </motion.p>
          <div style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)' }} className="leading-[0.92] tracking-tight">
            <div className="font-light text-foreground">
              <AnimatedWords text="Travaillons" delay={0.1} />
            </div>
            <div className="font-black text-accent">
              <AnimatedWords text="ensemble." delay={0.3} />
            </div>
          </div>
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <p className="text-foreground/40 text-base mb-8 max-w-sm leading-relaxed">
            Un projet en tête ? Écrivez-moi, je réponds sous 24h.
          </p>

          <a
            href="mailto:dev.nadhirbk@gmail.com"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
            className="inline-flex items-center gap-3 border-b-2 border-foreground pb-2 group"
          >
            <span
              className="font-black text-foreground leading-none"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 3rem)' }}
            >
              <RollingText text="dev.nadhirbk@gmail.com" hovered={emailHovered} />
            </span>
            <motion.span
              animate={{ rotate: emailHovered ? 0 : 45 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex shrink-0"
            >
              <ArrowUpRight size={28} />
            </motion.span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-auto pt-12 border-t border-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-8">
            <a
              href="https://linkedin.com/in/nadhirbk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[0.15em] uppercase text-foreground/35 hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nadhirbk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[0.15em] uppercase text-foreground/35 hover:text-foreground transition-colors duration-200"
            >
              GitHub
            </a>
            <p className="text-xs text-foreground/25">
              © 2026 Nadhir B.K.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
