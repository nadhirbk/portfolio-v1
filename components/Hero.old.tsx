'use client'

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 500], [0, 200])
  const yContent = useTransform(scrollY, [0, 500], [0, 100])
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const rotate = useTransform(scrollY, [0, 500], [0, 15])

  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 20,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 pb-16 overflow-hidden">
      {/* Background text énorme avec parallax et rotation */}
      <motion.div
        style={{ y: yBg, scale, rotate }}
        className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden"
      >
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[15vw] md:text-[18vw] font-black text-foreground leading-none tracking-tighter whitespace-nowrap select-none"
          style={{
            transform: 'translateX(10%)',
            textShadow: '0 0 40px rgba(100, 102, 241, 0.1)',
          }}
        >
          SITES WEB
        </motion.span>
      </motion.div>

      {/* Éléments flottants interactifs (magnetic) */}
      <FloatingElement
        mouseX={smoothMouseX}
        mouseY={smoothMouseY}
        className="absolute top-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 border-2 border-accent/30 rounded-3xl"
        strength={0.03}
        delay={0.5}
      />
      <FloatingElement
        mouseX={smoothMouseX}
        mouseY={smoothMouseY}
        className="absolute bottom-40 right-1/4 w-4 h-4 bg-accent rounded-full"
        strength={0.05}
        delay={0.7}
      />
      <FloatingElement
        mouseX={smoothMouseX}
        mouseY={smoothMouseY}
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/60 rounded-full"
        strength={0.08}
        delay={0.9}
      />
      <FloatingElement
        mouseX={smoothMouseX}
        mouseY={smoothMouseY}
        className="absolute top-1/2 left-1/4 w-16 h-16 md:w-20 md:h-20 border-2 border-accent/20 rounded-full"
        strength={0.04}
        delay={1.1}
      />

      {/* Badge flottant animé en continu */}
      <motion.div
        className="absolute top-24 md:top-32 right-8 md:right-16"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="bg-accent text-background px-6 py-3 rounded-full font-bold text-sm cursor-pointer shadow-lg shadow-accent/20"
        >
          Disponible ✦
        </motion.div>
      </motion.div>

      {/* Contenu principal avec parallax */}
      <motion.div
        className="container-max relative z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: yContent, opacity }}
      >
        {/* Badge principal */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold tracking-wide cursor-pointer"
          >
            WEB DESIGNER & CRÉATEUR DIGITAL
          </motion.span>
        </motion.div>

        {/* Titre avec effet de reveal plus dynamique */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-6 leading-[1.05] tracking-tight max-w-4xl"
        >
          Je crée des{' '}
          <span className="relative inline-block">
            <motion.span
              className="text-accent relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              expériences
              <motion.span
                className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-2 md:h-3 bg-accent/30 rounded-full blur-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.span>
          </span>{' '}
          web qui marquent
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted max-w-xl mb-8 leading-relaxed"
        >
          Design moderne, animations soignées et approche sur-mesure pour transformer vos idées en
          sites puissants.
        </motion.p>

        {/* Boutons avec hover magnétique */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center bg-accent text-background px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
            >
              <span className="relative z-10">Voir mes projets</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center border-2 border-foreground text-foreground px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden hover:text-background transition-colors duration-300"
            >
              <span className="relative z-10">Me contacter</span>
              <motion.div
                className="absolute inset-0 bg-foreground -z-0"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats animées */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap gap-8 md:gap-12 text-sm"
        >
          <StatItem value="3+" label="Projets livrés" delay={0} />
          <StatItem value="100%" label="Satisfaction" delay={0.1} />
          <StatItem value="∞" label="Créativité" delay={0.2} accent />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <Link
            href="#projects"
            className="inline-flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors duration-300 group"
            aria-label="Défiler vers les projets"
          >
            <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
            <motion.div whileHover={{ y: 5 }}>
              <ArrowDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Composant pour les éléments flottants magnétiques
function FloatingElement({
  mouseX,
  mouseY,
  className,
  strength = 0.05,
  delay = 0,
}: {
  mouseX: any
  mouseY: any
  className: string
  strength?: number
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementPos, setElementPos] = useState({ x: 0, y: 0 })
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setElementPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
  }, [])

  useEffect(() => {
    const unsubX = mouseX.on('change', (latest: number) => {
      const distance = latest - elementPos.x
      x.set(distance * strength)
    })
    const unsubY = mouseY.on('change', (latest: number) => {
      const distance = latest - elementPos.y
      y.set(distance * strength)
    })
    return () => {
      unsubX()
      unsubY()
    }
  }, [mouseX, mouseY, elementPos, strength, x, y])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: 1,
        rotate: [0, 360],
      }}
      transition={{
        scale: { duration: 0.6, delay },
        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
      }}
      style={{ x, y }}
      className={className}
    />
  )
}

// Composant pour les stats animées
function StatItem({
  value,
  label,
  delay = 0,
  accent = false,
}: {
  value: string
  label: string
  delay?: number
  accent?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 1, duration: 0.6 }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <div
        className={`text-3xl md:text-4xl font-black ${accent ? 'text-accent' : 'text-foreground'}`}
      >
        {value}
      </div>
      <div className="text-muted font-medium">{label}</div>
    </motion.div>
  )
}
