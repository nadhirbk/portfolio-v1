'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [isOnDarkSection, setIsOnDarkSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Détecter si on est sur une section avec fond noir
      const heroHeight = document.querySelector('section')?.offsetHeight || 0
      const scrollPosition = window.scrollY

      // Si on a scrollé au-delà du hero, on est sur fond noir
      setIsOnDarkSection(scrollPosition > heroHeight / 2)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 w-[2px] h-32 z-50 hidden lg:block transition-colors duration-300"
      style={{
        backgroundColor: isOnDarkSection ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 15, 15, 0.1)',
      }}
    >
      <motion.div
        className="w-full h-full origin-top transition-colors duration-300"
        style={{
          scaleY,
          backgroundColor: isOnDarkSection ? 'rgb(255, 255, 255)' : 'rgb(15, 15, 15)',
        }}
      />
    </motion.div>
  )
}
