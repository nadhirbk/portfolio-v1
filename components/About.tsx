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
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <motion.div
              className="aspect-square rounded-3xl overflow-hidden bg-background/10 relative"
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

            {/* Accent decoration */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-background/20 rounded-full -z-10"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
            />

            {/* Additional decoration */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 border-2 border-background/30 rounded-full -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-background mb-8">
              À propos
            </h2>

            <div className="space-y-6 text-base md:text-lg text-background/70 leading-relaxed">
              <p>
                Hey ! Moi c&apos;est <strong className="text-background">Nadhir</strong>, créateur
                web passionné par le design et l&apos;innovation digitale.
              </p>

              <p>
                Je ne suis pas issu d&apos;une école d&apos;ingénieurs, mais j&apos;ai une chose que
                beaucoup n&apos;ont pas :{' '}
                <strong className="text-background">
                  une vraie compréhension des besoins clients
                </strong>{' '}
                et une <strong className="text-background">force de proposition</strong> qui fait la
                différence.
              </p>

              <p>
                Avec les outils modernes (Next.js, React, Framer Motion) et l&apos;IA à mes côtés
                (GitHub Copilot, Claude), je crée des sites web qui ne se contentent pas d&apos;être
                beaux — ils <strong className="text-background">convertissent</strong> et{' '}
                <strong className="text-background">marquent les esprits</strong>.
              </p>

              <p>
                Mon approche ?{' '}
                <strong className="text-background">
                  Agile, transparente, et orientée résultats
                </strong>
                . Vous avez une idée ? Je la transforme en réalité digitale, avec style.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <motion.p
                    className="text-3xl md:text-4xl font-black text-background"
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
