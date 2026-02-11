'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LayoutGroup, motion } from 'motion/react'
import Link from 'next/link'
import { useRef } from 'react'
import { TextRotate } from './ui/text-rotate'

gsap.registerPlugin(ScrollTrigger)

const words = ['marquent.', 'se démarquent.', 'inspirent.', 'osent.']

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col bg-white z-0">
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
            onClick={(e) => scrollToSection(e, '#about')}
            className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-accent transition-colors duration-300"
          >
            À PROPOS
          </a>
          <a
            href="#testimonials"
            onClick={(e) => scrollToSection(e, '#testimonials')}
            className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-accent transition-colors duration-300"
          >
            TÉMOIGNAGES
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-accent transition-colors duration-300"
          >
            CONTACT
          </a>
        </nav>
      </motion.header>

      {/* Hero Content - Centré verticalement */}
      <div className="flex-1 flex items-center justify-center px-8 md:px-16">
        <LayoutGroup>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground text-center leading-[1.1] tracking-tight max-w-5xl"
          >
            Hello, moi c&apos;est Nadhir.
            <br />
            Je crée des sites web qui{' '}
            <motion.span
              className="relative inline-flex"
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.span
                className="relative z-10 text-background px-3 inline-flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <TextRotate
                  texts={words}
                  rotationInterval={2400}
                  staggerDuration={0}
                  staggerFrom="first"
                  initial={{ opacity: 0, filter: 'blur(50px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(50px)' }}
                  animatePresenceMode="popLayout"
                  mainClassName="overflow-hidden inline-flex"
                  splitLevelClassName="overflow-hidden"
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-accent rounded-lg"
                layout
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  scaleX: { duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
                  layout: { type: 'spring', stiffness: 400, damping: 25 }
                }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.span>
          </motion.h1>
        </LayoutGroup>
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
          onClick={(e) => scrollToSection(e, '#projects')}
          className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-accent transition-colors duration-300"
        >
          PROJETS WEB
        </a>
        <a
          href="#process"
          onClick={(e) => scrollToSection(e, '#process')}
          className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-accent transition-colors duration-300"
        >
          MON APPROCHE
        </a>
      </motion.div>
    </section>
  )
}
