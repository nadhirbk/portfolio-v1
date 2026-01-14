'use client'

import { motion } from 'framer-motion'
import { Eye, MessageSquare, Rocket, Zap } from 'lucide-react'

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          className="mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Comment je travaille
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-3xl mx-auto leading-relaxed">
            Un process transparent, agile et orienté résultats. Vous êtes impliqué à chaque étape
            pour un résultat qui vous ressemble vraiment.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
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
                  className="absolute -top-4 -left-4 w-12 h-12 bg-background rounded-full flex items-center justify-center text-2xl font-black text-foreground z-10"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {step.id}
                </motion.div>

                {/* Card */}
                <motion.div
                  className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6 h-full"
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
                  <p className="text-background/70 mb-4 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                  <span className="inline-block px-4 py-2 bg-background/20 text-background text-sm font-bold rounded-full">
                    {step.highlight}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-background/70 mb-8">Prêt à démarrer votre projet ?</p>
          <motion.a
            href="#contact"
            className="inline-block bg-background text-foreground px-8 py-4 rounded-full font-bold text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Parlons-en
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
