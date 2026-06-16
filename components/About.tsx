'use client'

import { motion } from 'framer-motion'
import AnimatedWords from './AnimatedWords'

const stats = [
  { value: '3+', label: 'Projets livrés' },
  { value: '100%', label: 'Clients satisfaits' },
  { value: '∞', label: 'Créativité' },
]

export default function About() {
  return (
    <section id="about" className="section-spacing section-padding bg-background">
      <div className="container-max">

        {/* Editorial Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold tracking-[0.3em] text-foreground/40 uppercase mb-5"
          >
            04 — À PROPOS
          </motion.p>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.92] tracking-tight text-foreground">
            <AnimatedWords text={"Qui\nsuis-je."} delay={0.1} />
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-foreground/5">
              <img src="/images/profile_new.JPG" alt="Nadhir B.K." className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Text + stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5 text-base md:text-lg text-foreground/60 leading-relaxed mb-12">
              <p>
                Hey ! Moi c&apos;est <strong className="text-foreground font-bold">Nadhir</strong>, créateur
                web passionné par le <strong className="text-foreground font-bold">design minimaliste</strong> et{' '}
                le <strong className="text-foreground font-bold">détail qui fait la différence</strong>.
              </p>
              <p>
                Je m&apos;implique dans chaque projet comme si c&apos;était le mien — avec{' '}
                <strong className="text-foreground font-bold">une vraie compréhension des besoins clients</strong> et{' '}
                une <strong className="text-foreground font-bold">force de proposition</strong> qui change tout.
              </p>
              <p>
                Armé des technologies modernes et des{' '}
                <strong className="text-foreground font-bold">outils IA les plus avancés</strong>,
                je livre plus vite, plus loin — pour des sites qui ne se contentent pas d&apos;être beaux :{' '}
                ils <strong className="text-foreground font-bold">convertissent</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-foreground/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-3xl lg:text-4xl font-black text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-foreground/40 font-medium tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
