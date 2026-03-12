'use client'

import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

// On pages other than homepage, hash links point to homepage sections
const navLinks = [
  { label: 'MES PROJETS', href: '/projets' },
  { label: 'TÉMOIGNAGES', href: '/#testimonials' },
  { label: 'À PROPOS', href: '/#about' },
  { label: 'CONTACT', href: '/#contact' },
]

const mobileLinks = [
  { label: 'MON APPROCHE', href: '/#process' },
  ...navLinks,
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile floating burger */}
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
            {mobileLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
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

      {/* Desktop Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full px-4 md:px-8 lg:px-16 py-6 md:py-8 flex items-center justify-between"
      >
        <Link href="/" className="text-xl font-bold">
          <span className="text-background">Nadhir</span>
          <span className="text-background/40">B.K.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-background/60 hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.header>
    </>
  )
}
