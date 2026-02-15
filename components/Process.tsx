'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Eye, MessageSquare, Rocket, Zap } from 'lucide-react'
import { useState } from 'react'

const steps = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'Écoute & Stratégie',
    description:
      'Je commence par comprendre vos besoins, votre audience et vos objectifs. Briefing détaillé et analyse de la concurrence.',
    highlight: 'Force de proposition',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Design & Prototypage',
    description:
      'Création de maquettes interactives avec animations. Vous voyez le résultat avant même le développement.',
    highlight: 'Feedbacks fréquents',
  },
  {
    id: 3,
    icon: Eye,
    title: 'Développement Live',
    description:
      'Code propre et optimisé. Déploiement sur Vercel pour des previews instantanées à chaque modification.',
    highlight: 'Modifications en temps réel',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Lancement & Suivi',
    description:
      'Mise en ligne, formation et accompagnement post-lancement. Je reste disponible pour les ajustements.',
    highlight: 'Support continu',
  },
]

export default function Process() {
  const [openStep, setOpenStep] = useState<number | null>(1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  }

  return (
    <section id="process" className="section-spacing section-padding bg-foreground text-background">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6">
            Comment je travaille
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-3xl mx-auto leading-relaxed">
            Un process transparent, agile et orienté résultats. Vous êtes impliqué à chaque étape
            pour un résultat qui vous ressemble vraiment.
          </p>
        </motion.div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {steps.map((step) => {
            const Icon = step.icon
            const isOpen = openStep === step.id
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: step.id * 0.1 }}
              >
                <button
                  onClick={() => setOpenStep(isOpen ? null : step.id)}
                  className="w-full flex items-center gap-4 p-4 bg-background/5 border border-background/10 rounded-xl text-left"
                >
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-lg font-black text-white flex-shrink-0">
                    {step.id}
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <Icon size={20} className="text-background/60 flex-shrink-0" />
                    <span className="font-bold text-background">{step.title}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-background/40 text-xl flex-shrink-0"
                  >
                    ▾
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-3 ml-14">
                        <p className="text-background/70 text-sm leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <span className="inline-block px-3 py-1.5 bg-background/20 text-background text-xs font-bold rounded-full">
                          {step.highlight}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div key={step.id} variants={itemVariants} className="relative group">
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl font-black text-white z-10"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {step.id}
                </motion.div>

                {/* Card */}
                <motion.div
                  className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6 h-full flex flex-col"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Icon size={40} className="text-background mb-4" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-background">
                    {step.title}
                  </h3>
                  <p className="text-background/70 mb-4 leading-relaxed text-sm md:text-base flex-grow">
                    {step.description}
                  </p>
                  <span className="inline-block px-4 py-2 bg-background/20 text-background text-sm font-bold rounded-full w-fit">
                    {step.highlight}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
