'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Deborah Martin',
    role: 'Coach professionnelle',
    company: 'Deborah Martin Services',
    testimonial:
      "Nadhir a parfaitement compris ma vision et l'a transformée en un site élégant qui me ressemble. Son approche collaborative et sa réactivité ont fait toute la différence.",
    image: '/images/testimonials/deborah.jpg', // À ajouter
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Attentive Strategy',
    testimonial:
      "Un travail d'une qualité exceptionnelle. Nadhir allie créativité et expertise technique pour des résultats qui dépassent les attentes. Je recommande les yeux fermés.",
    image: '/images/testimonials/sarah.jpg', // À ajouter
  },
  {
    id: 3,
    name: 'Marc Dubois',
    role: 'Fondateur',
    company: 'Vinyfy',
    testimonial:
      'Nadhir a su créer une identité visuelle forte pour notre marketplace. Son sens du détail et sa force de proposition ont été des atouts majeurs pour le projet.',
    image: '/images/testimonials/marc.jpg', // À ajouter
  },
]

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="testimonials" className="section-spacing section-padding bg-foreground">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-background mb-6">
            Ils livrent leur expérience
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto leading-relaxed">
            La satisfaction de mes clients est ma priorité. Découvrez ce qu'ils pensent de notre
            collaboration.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={itemVariants}
              className="group bg-background/5 hover:bg-background/10 p-8 rounded-2xl transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="text-background/20 mb-6" size={40} />

              {/* Testimonial text */}
              <p className="text-background/80 leading-relaxed mb-8 italic">
                "{testimonial.testimonial}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-background/50">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                {/* Name and role */}
                <div>
                  <p className="font-bold text-background">{testimonial.name}</p>
                  <p className="text-sm text-background/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
