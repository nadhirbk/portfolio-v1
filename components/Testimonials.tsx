'use client'

import { motion } from 'framer-motion'
import AnimatedWords from './AnimatedWords'

const testimonials = [
  {
    quote: `Nadhir a su traduire exactement ce que je voulais — un site à mon image, professionnel et chaleureux. Le résultat a dépassé mes attentes.`,
    name: 'Deborah M.',
    role: 'CEO, Deborah Martin Services',
  },
  {
    quote: `Un freelance sérieux, réactif et vraiment force de proposition. Notre site a été livré dans les délais avec une qualité que je n'avais pas anticipée.`,
    name: 'Antoine R.',
    role: 'Directeur, Attentive Strategy',
  },
  {
    quote: `Il a pris le temps de comprendre le produit avant d'écrire la première ligne de code. Résultat : une interface qui parle vraiment à nos utilisateurs.`,
    name: 'Kevin S.',
    role: 'Fondateur, Vinyfy',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing section-padding bg-background">
      <div className="container-max">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/35 mb-6"
          >
            04 — Témoignages
          </motion.p>
          <h2
            className="font-black leading-[0.92] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)' }}
          >
            <AnimatedWords text={"Ce qu'ils\nen disent."} delay={0.1} />
          </h2>
        </div>

        {/* List */}
        <div>
          {testimonials.map((t, i) => (
            <div key={i}>
              <motion.div
                className="w-full h-px bg-foreground/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="py-12 md:py-16 grid md:grid-cols-[1fr_auto] gap-8 md:gap-24 items-end">

                <motion.blockquote
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="font-light text-foreground leading-[1.25] tracking-tight"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 3rem)' }}
                >
                  "{t.quote}"
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="shrink-0 md:text-right"
                >
                  <p className="text-sm font-black text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/40 mt-1 tracking-wide">{t.role}</p>
                </motion.div>

              </div>
            </div>
          ))}

          <motion.div
            className="w-full h-px bg-foreground/10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

      </div>
    </section>
  )
}
