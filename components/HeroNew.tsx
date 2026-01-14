'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Badge "Disponible" - position absolue top right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute top-8 right-8 md:top-12 md:right-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 border border-foreground/10 rounded-full text-xs font-medium tracking-wide text-foreground/60 cursor-pointer hover:border-accent hover:text-accent transition-all duration-300"
        >
          Disponible pour nouveaux projets ✦
        </motion.div>
      </motion.div>

      {/* Contenu principal */}
      <motion.div style={{ y, opacity, scale }} className="w-full max-w-6xl mx-auto text-center">
        {/* Titre principal - ÉNORME et centré */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.9] tracking-tighter mb-8"
        >
          Je crée des
          <br />
          <span className="relative inline-block mt-2">
            <span className="text-accent">expériences</span>
            {/* Underline animée */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/20"
              style={{ transformOrigin: 'left' }}
            />
          </span>
          <br />
          web mémorables
        </motion.h1>

        {/* Sous-titre minimaliste */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 font-light"
        >
          Designer & développeur web basé en France
        </motion.p>

        {/* CTA unique et épuré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 text-foreground font-medium text-lg hover:text-accent transition-colors duration-300"
          >
            Découvrir mes projets
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* Scroll indicator ultra-minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-foreground/20 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
