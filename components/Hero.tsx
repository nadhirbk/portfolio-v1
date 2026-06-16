'use client'

import { AnimatePresence, animate, motion, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import AnimatedWords from './AnimatedWords'

const navLinks = [
  { label: 'Projets',      href: '#projets' },
  { label: 'Approche',     href: '#process' },
  { label: 'Témoignages',  href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

const stickers = [
  { word: 'MARQUENT.',  rotate: -4, dx:  0,  dy:  1 },
  { word: 'DURENT.',    rotate:  3, dx: -5,  dy: -3 },
  { word: 'OSENT.',     rotate: -6, dx:  7,  dy:  4 },
  { word: 'BRILLENT.',  rotate:  5, dx: -3,  dy: -6 },
]

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith('#')) return
  e.preventDefault()
  const el = document.getElementById(href.slice(1))
  if (!el) return
  const targetAbsolute = el.getBoundingClientRect().top + window.scrollY
  const currentY = window.scrollY
  const pinSpacer = document.querySelector('.pin-spacer') as HTMLElement | null
  if (pinSpacer) {
    const spacerStart = pinSpacer.getBoundingClientRect().top + window.scrollY
    const spacerEnd = spacerStart + pinSpacer.offsetHeight
    if (currentY < spacerStart && targetAbsolute > spacerEnd) {
      window.scrollTo({ top: spacerEnd, behavior: 'instant' })
      requestAnimationFrame(() => requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' })))
      return
    }
    if (currentY > spacerEnd && targetAbsolute < spacerStart) {
      window.scrollTo({ top: spacerStart, behavior: 'instant' })
      requestAnimationFrame(() => requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' })))
      return
    }
  }
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ─── Sticker card ─────────────────────────────────────────────────────────────
interface StickerProps {
  word: string
  initRotate: number
  dx: number
  dy: number
  zIndex: number
  index: number
  isSnapped: boolean
  placeholderRef: React.RefObject<HTMLDivElement | null>
  stickerDivRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
  onSnap: (word: string) => void
  onUnsnap: (word: string) => void
  onDragStart: () => void
}

function StickerCard({
  word, initRotate, dx, dy, zIndex, index, isSnapped,
  placeholderRef, stickerDivRefs, onSnap, onUnsnap, onDragStart,
}: StickerProps) {
  const x = useMotionValue(dx)
  const y = useMotionValue(dy)
  const rot = useMotionValue(initRotate)
  const stickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    stickerDivRefs.current[index] = stickerRef.current
    const refs = stickerDivRefs
    return () => { refs.current[index] = null }
  }, [index, stickerDivRefs])

  const handleDragEnd = (_e: unknown, info: { offset: { x: number; y: number } }) => {
    const totalDrag = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2)
    if (totalDrag < 20) return

    let snapsToPlaceholder = false
    if (stickerRef.current && placeholderRef.current) {
      const sr = stickerRef.current.getBoundingClientRect()
      const pr = placeholderRef.current.getBoundingClientRect()
      snapsToPlaceholder =
        sr.right > pr.left && sr.left < pr.right &&
        sr.bottom > pr.top && sr.top < pr.bottom
    }

    if (snapsToPlaceholder) {
      animate(x, 0, { type: 'spring', stiffness: 500, damping: 40 })
      animate(y, 0, { type: 'spring', stiffness: 500, damping: 40 })
      animate(rot, 0, { type: 'spring', stiffness: 400, damping: 35 })
      onSnap(word)
      return
    }

    if (stickerRef.current) {
      const myRect = stickerRef.current.getBoundingClientRect()
      for (let j = 0; j < stickerDivRefs.current.length; j++) {
        if (j === index) continue
        const otherEl = stickerDivRefs.current[j]
        if (!otherEl) continue
        const or = otherEl.getBoundingClientRect()
        const overlapX = Math.min(myRect.right, or.right) - Math.max(myRect.left, or.left)
        const overlapY = Math.min(myRect.bottom, or.bottom) - Math.max(myRect.top, or.top)
        if (overlapX > myRect.width * 0.4 && overlapY > myRect.height * 0.4) {
          const angle = Math.random() * Math.PI * 2
          const nudge = 30 + Math.random() * 20
          animate(x, x.get() + Math.cos(angle) * nudge, { type: 'spring', stiffness: 350, damping: 30 })
          animate(y, y.get() + Math.sin(angle) * nudge, { type: 'spring', stiffness: 350, damping: 30 })
          break
        }
      }
    }

    animate(rot, initRotate, { type: 'spring', stiffness: 300, damping: 28 })
    onUnsnap(word)
  }

  return (
    <motion.div
      ref={stickerRef}
      drag
      dragMomentum={false}
      dragElastic={0.08}
      style={{ x, y, rotate: rot, position: 'absolute', top: 0, left: 0, zIndex, touchAction: 'none' }}
      onDragStart={onDragStart}
      onDragEnd={handleDragEnd}
      whileHover={{ scale: isSnapped ? 1 : 1.02, transition: { duration: 0.15 } }}
      whileDrag={{ scale: 1.06 }}
      className="select-none whitespace-nowrap font-black text-background leading-[0.95] tracking-tight px-3 py-[0.08em] rounded-xl bg-accent shadow-[0_4px_18px_rgba(45,106,79,0.25)] cursor-grab active:cursor-grabbing"
    >
      {word}
    </motion.div>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen]       = useState(false)
  const [order, setOrder]             = useState([0, 1, 2, 3])
  const [snappedWord, setSnappedWord] = useState<string | null>(null)
  const [lastWord, setLastWord]       = useState('MARQUENT.')
  const placeholderRef  = useRef<HTMLDivElement>(null)
  const stickerDivRefs  = useRef<(HTMLDivElement | null)[]>([null, null, null, null])

  const bringToFront = (i: number) =>
    setOrder(prev => [...prev.filter(x => x !== i), i])

  const handleSnap   = (word: string) => { setSnappedWord(word); setLastWord(word) }
  const handleUnsnap = (word: string) =>
    setSnappedWord(prev => (prev === word ? null : prev))

  // Scroll detection
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Active section
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const fn = () => {
      const scrollPos = window.scrollY + 120
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMobileMenu = (href: string) => {
    document.body.style.overflow = ''
    setMenuOpen(false)
    requestAnimationFrame(() => {
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 transition-colors duration-500 ${
          menuOpen
            ? 'z-[200] bg-foreground'
            : `z-50 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-foreground/[0.07]' : ''}`
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-14 lg:px-20 py-8">
          <Link
            href="/"
            className={`text-base font-bold tracking-tight transition-colors duration-300 ${
              menuOpen ? 'text-background' : 'text-foreground'
            }`}
          >
            Nadhir B.K.
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => scrollTo(e, link.href)}
                  className={`relative group text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-foreground transition-all duration-300 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="block w-6 h-[1.5px] origin-center"
              style={{ backgroundColor: menuOpen ? '#F0EBE1' : '#0D0B09' }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0.4 : 1 }}
              transition={{ duration: 0.22 }}
              className="block w-6 h-[1.5px]"
              style={{ backgroundColor: '#0D0B09' }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="block w-6 h-[1.5px] origin-center"
              style={{ backgroundColor: menuOpen ? '#F0EBE1' : '#0D0B09' }}
            />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] flex flex-col px-6 pt-28 pb-10 md:hidden"
            style={{ backgroundColor: '#0D0B09' }}
          >
            {/* Nav links */}
            <nav className="flex flex-col flex-1 justify-center -mt-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 32, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{ duration: 0.45, delay: 0.18 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-background/10 last:border-b-0"
                >
                  <a
                    href={link.href}
                    onClick={() => closeMobileMenu(link.href)}
                    className="flex items-baseline gap-4 py-5 group"
                  >
                    <span className="text-xs font-medium tracking-widest tabular-nums"
                      style={{ color: '#2D6A4F' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-[2.6rem] font-black tracking-tight leading-none transition-colors duration-200 group-active:opacity-70"
                      style={{ color: '#F0EBE1' }}
                    >
                      {link.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.52, duration: 0.35 }}
              className="text-xs font-medium tracking-[0.25em] uppercase"
              style={{ color: '#F0EBE1', opacity: 0.3 }}
            >
              Développeur web · Freelance · Paris
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ── */}
      <section className="relative min-h-screen bg-background flex flex-col px-6 md:px-14 lg:px-20">
        <div className="h-28 md:h-32 shrink-0" />

        <div className="flex-1 flex flex-col justify-center gap-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[11px] font-medium tracking-[0.28em] uppercase text-foreground/50"
          >
            Développeur web · Freelance · Paris
          </motion.p>

          <div>
            <div
              className="font-light text-foreground leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7.5rem)' }}
            >
              <AnimatedWords text="Des sites web qui" delay={0.35} />
            </div>

            {/* Sticker row */}
            <div
              className="flex items-center gap-8 md:gap-12"
              style={{ fontSize: 'clamp(1.6rem, 3.6vw, 4.2rem)' }}
            >
              <div
                className="relative shrink-0"
                style={{ height: '1.5em', width: 'clamp(220px, 28vw, 400px)' }}
              >
                <motion.div
                  ref={placeholderRef}
                  layout
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  className="absolute top-0 left-0 border-2 border-dashed border-foreground/10 rounded-xl px-3 py-[0.08em] leading-[0.95] font-black tracking-tight select-none pointer-events-none"
                  style={{ color: 'transparent', zIndex: 0 }}
                >
                  {snappedWord ?? lastWord}
                </motion.div>

                {stickers.map((s, i) => (
                  <StickerCard
                    key={s.word}
                    word={s.word}
                    initRotate={s.rotate}
                    dx={s.dx}
                    dy={s.dy}
                    zIndex={order.indexOf(i) + 1}
                    index={i}
                    isSnapped={snappedWord === s.word}
                    placeholderRef={placeholderRef}
                    stickerDivRefs={stickerDivRefs}
                    onSnap={handleSnap}
                    onUnsnap={handleUnsnap}
                    onDragStart={() => bringToFront(i)}
                  />
                ))}
              </div>

              {/* Hint annotation — desktop only */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.7 }}
                className="hidden md:flex items-center gap-4 text-accent pointer-events-none select-none shrink-0"
              >
                <svg width="72" height="50" viewBox="0 0 72 50" fill="none" className="shrink-0">
                  <path
                    d="M 68 6 C 50 1, 26 12, 16 27 C 9 37, 14 48, 22 43 C 30 38, 27 29, 17 29 C 8 29, 1 35, 0 30"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"
                  />
                  <path d="M 0 30 L 6 23 M 0 30 L 8 37" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="text-xl font-black leading-tight whitespace-nowrap">à vous de jouer !</p>
                  <p className="text-sm font-medium opacity-60 whitespace-nowrap">(déjà oui oui)</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="text-foreground/65 text-base md:text-lg leading-relaxed max-w-md"
          >
            Je conçois des expériences digitales sur-mesure,
            pensées pour convertir et durer.
          </motion.p>
        </div>

        {/* Scroll hint — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ delay: scrolled ? 0 : 2.4, duration: scrolled ? 0.3 : 0.8 }}
          className="absolute bottom-20 md:bottom-28 right-[28%] md:right-[30%] hidden md:flex flex-col items-start gap-1 text-accent pointer-events-none select-none"
        >
          <p className="text-xl font-black leading-tight whitespace-nowrap">et ensuite hop...</p>
          <p className="text-sm font-medium opacity-60 whitespace-nowrap">{"c'est par ici"}</p>
          <svg width="50" height="76" viewBox="0 0 50 76" fill="none" className="mt-1 ml-3">
            <path
              d="M 6 4 C 1 22, 12 46, 27 56 C 37 63, 48 58, 43 50 C 38 42, 29 45, 29 55 C 29 64, 35 71, 30 74"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"
            />
            <path d="M 30 74 L 23 67 M 30 74 L 37 66" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </motion.div>
      </section>
    </>
  )
}
