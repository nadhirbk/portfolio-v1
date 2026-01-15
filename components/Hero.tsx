'use client'

import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: -100,
      opacity: 0,
      scale: 0.98,
      filter: 'blur(10px)',
      ease: 'none',
    })
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col bg-white z-10">
      {/* Header Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full px-8 md:px-16 py-8 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <span className="text-foreground">Nadhir</span>
          <span className="text-foreground/40">B.K.</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#about"
            className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            À PROPOS
          </a>
          <a
            href="#contact"
            className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            CONTACT
          </a>
        </nav>
      </motion.header>

      {/* Hero Content - Centré verticalement */}
      <div className="flex-1 flex items-center justify-center px-8 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground text-center leading-[1.1] tracking-tight max-w-5xl"
        >
          Hello, moi c&apos;est Nadhir.
          <br />
          Je crée des sites web qui marquent.
        </motion.h1>
      </div>

      {/* Bottom Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full px-8 md:px-16 pb-12 flex items-center justify-center gap-12"
      >
        <a
          href="#projects"
          className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
        >
          PROJETS WEB
        </a>
        <a
          href="#process"
          className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
        >
          MON APPROCHE
        </a>
      </motion.div>
    </section>
  )
}
