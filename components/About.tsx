'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '3+', label: 'Projets livrés' },
    { value: '100%', label: 'Clients satisfaits' },
    { value: '∞', label: 'Créativité' },
  ]

  return (
    <section id="about" className="section-spacing section-padding bg-foreground overflow-hidden">
      <div className="container-max">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <motion.div
              className="aspect-video sm:aspect-square rounded-3xl overflow-hidden bg-background/10 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Photo de profil */}
              <img
                src="/images/profile.jpg"
                alt="Nadhir B.K."
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-background mb-6 md:mb-8">
              À propos
            </h2>

            <div className="space-y-6 text-base md:text-lg text-background/70 leading-relaxed">
              <p>
                Hey ! Moi c&apos;est <strong className="text-background">Nadhir</strong>, créateur
                web passionné par le <strong className="text-background">design minimaliste</strong> et{' '}
                le <strong className="text-background">détail qui fait la différence</strong>.
              </p>

              <p>
                Je m&apos;implique dans chaque projet comme si c&apos;était le mien, avec{' '}
                <strong className="text-background">
                  une vraie compréhension des besoins clients
                </strong>{' '}
                et une <strong className="text-background">force de proposition</strong> qui fait la
                différence.
              </p>

              <p>
                Armé des technologies modernes (Next.js, React, Framer Motion) et des{' '}
                <strong className="text-background">outils d&apos;IA les plus avancés</strong>,
                je vais plus vite, plus loin, et plus efficacement — pour des sites qui ne se
                contentent pas d&apos;être beaux, ils{' '}
                <strong className="text-background">convertissent</strong> et{' '}
                <strong className="text-background">marquent les esprits</strong>.
              </p>

              <p>
                Mon approche ?{' '}
                <strong className="text-background">
                  Agile, transparente, et orientée résultats
                </strong>
                . De l&apos;idée au site en ligne, vous êtes impliqué à chaque étape.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-8 md:mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl font-black text-background"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs md:text-sm text-background/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
