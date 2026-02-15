'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Deborah Martin',
    role: 'Coach professionnelle',
    company: 'Deborah Martin Services',
    testimonial:
      "Nadhir a parfaitement compris ma vision et l'a transformée en un site élégant qui me ressemble. Son approche collaborative et sa réactivité ont fait toute la différence.",
    image: '/images/testimonials/deborah.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Attentive Strategy',
    testimonial:
      "Un travail d'une qualité exceptionnelle. Nadhir allie créativité et expertise technique pour des résultats qui dépassent les attentes. Je recommande les yeux fermés.",
    image: '/images/testimonials/sarah.jpg',
  },
  {
    id: 3,
    name: 'Marc Dubois',
    role: 'Fondateur',
    company: 'Vinyfy',
    testimonial:
      'Nadhir a su créer une identité visuelle forte pour notre marketplace. Son sens du détail et sa force de proposition ont été des atouts majeurs pour le projet.',
    image: '/images/testimonials/marc.jpg',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="section-spacing section-padding bg-foreground">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-background mb-4 md:mb-6">
            Ils livrent leur expérience
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto leading-relaxed">
            La satisfaction de mes clients est ma priorité. Découvrez ce qu&apos;ils pensent de
            notre collaboration.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.article
                key={testimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="bg-background/5 p-5 rounded-2xl"
              >
                <Quote className="text-background/20 mb-4 w-8 h-8" />
                <p className="text-background/80 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-background/50">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-background">{testimonial.name}</p>
                    <p className="text-sm text-background/60">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Navigation: arrows + dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => paginate(-1)}
              className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/60 active:bg-background/20"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-accent' : 'w-2 bg-background/30'
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/60 active:bg-background/20"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={itemVariants}
              className="group bg-background/5 hover:bg-background/10 p-5 md:p-8 rounded-2xl transition-colors duration-300"
            >
              <Quote className="text-background/20 mb-4 md:mb-6 transition-all duration-300 group-hover:text-background/40 group-hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <p className="text-background/80 leading-relaxed mb-8 italic">
                &ldquo;{testimonial.testimonial}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-background/50">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
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
