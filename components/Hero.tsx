'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { TextRotate } from './ui/text-rotate'

gsap.registerPlugin(ScrollTrigger)

const words = ['marquent.', 'se démarquent.', 'inspirent.', 'osent.']

const headerLinks = [
  { label: 'MES PROJETS', href: '/projets' },
  { label: 'MON APPROCHE', href: '#process' },
  { label: 'TÉMOIGNAGES', href: '#testimonials' },
  { label: 'À PROPOS', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Page links (e.g. /projets) — just close menu and navigate normally
    if (!href.startsWith('#')) {
      setMenuOpen(false)
      return
    }
    e.preventDefault()
    const wasMenuOpen = menuOpen
    setMenuOpen(false)
    const scroll = () => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    // Delay scroll on mobile to let overlay exit animation finish
    if (wasMenuOpen) {
      setTimeout(scroll, 150)
    } else {
      scroll()
    }
  }

  return (
    <>
      {/* Mobile floating burger - fixed, always visible, outside heroRef */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden w-11 h-11 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOpen}
      >
        <div className="flex flex-col items-center justify-center w-5 h-4">
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-5 h-[2px] bg-foreground mb-[5px]"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-[2px] bg-foreground mb-[5px]"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-5 h-[2px] bg-foreground"
          />
        </div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {headerLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col bg-white z-0">
        {/* Desktop Header Navigation */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8 hidden md:flex items-center justify-between"
        >
          <Link href="/" className="text-xl font-bold">
            <span className="text-foreground">Nadhir</span>
            <span className="text-foreground/40">B.K.</span>
          </Link>

          <nav className="flex items-center gap-8">
            {headerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.header>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:px-16">
          <LayoutGroup>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground text-center leading-[1.1] tracking-tight max-w-5xl">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
              >
                Hello, moi c&apos;est Nadhir.
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
              >
                Je crée des sites web qui{' '}
                <motion.span
                  className="relative inline-flex"
                  layout
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <motion.span
                    className="relative z-10 text-background px-2 md:px-3 inline-flex"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 1.75, ease: [0.34, 1.56, 0.64, 1] }}
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
                    className="absolute inset-0 bg-accent rounded-md md:rounded-xl"
                    layout
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      scaleX: { duration: 0.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
                      layout: { type: 'spring', stiffness: 400, damping: 25 }
                    }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.span>
              </motion.span>
            </h1>
          </LayoutGroup>
        </div>

      </section>
    </>
  )
}
