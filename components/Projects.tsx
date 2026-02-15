'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Deborah Martin Services',
    category: 'Site Vitrine',
    description:
      'Site vitrine élégant pour une professionnelle du coaching. Design épuré, animations subtiles et optimisation SEO.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.deborah-martin-services.fr/',
    color: '#1D2532',
    logo: '/images/projects/deborah.png',
    image: '/images/projects/deborah-screenshot.jpg',
  },
  {
    id: 2,
    title: 'Attentive Strategy',
    category: 'Site Corporate',
    description:
      "Plateforme corporate moderne avec animations avancées et architecture scalable. Focus sur l'expérience utilisateur.",
    tags: ['Next.js', 'TypeScript', 'shadcn/ui'],
    link: 'https://www.attentivestrategy.com/',
    color: '#1F746D',
    logo: '/images/projects/attentive.png',
    image: '/images/projects/attentive-screenshot.png',
  },
  {
    id: 3,
    title: 'Vinyfy',
    category: 'E-commerce / Marketplace',
    description:
      'Marketplace de vinyles avec identité visuelle forte. Design system complet, gestion de panier et paiements intégrés.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    link: 'https://vinyfy-v2.vercel.app/',
    color: '#DFDEE3',
    logo: '/images/projects/vinyfy.svg',
    image: '/images/projects/vinyfy-screenshot.jpg',
  },
]

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + projects.length) % projects.length)
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
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

  const project = projects[current]

  return (
    <section id="projects" className="section-spacing section-padding bg-foreground relative z-10">
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
            Projets récents
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto leading-relaxed">
            Une sélection de sites web créés pour des clients aux besoins variés. Chaque projet
            raconte une histoire unique.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={project.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
                className="group"
              >
                {/* Image Container */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-xl mb-4 aspect-[4/3]"
                >
                  <div className="absolute inset-0" style={{ backgroundColor: project.color }} />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className={`object-contain ${
                        project.id === 1 ? 'max-w-[85%] max-h-[85%]' : 'max-w-[60%] max-h-[60%]'
                      }`}
                    />
                  </div>
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full z-20">
                    <ArrowUpRight size={16} className="text-foreground" />
                  </div>
                </a>

                {/* Content */}
                <div>
                  <p className="text-xs font-bold text-background/50 mb-1 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-background mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-background/60 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-background/10 text-background/70 text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
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
              aria-label="Projet précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-accent' : 'w-2 bg-background/30'
                  }`}
                  aria-label={`Projet ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/60 active:bg-background/20"
              aria-label="Projet suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.article key={project.id} variants={itemVariants} className="group">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-xl mb-4 aspect-[4/3]"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className="absolute inset-0" style={{ backgroundColor: project.color }} />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
                      project.id === 1 ? 'max-w-[85%] max-h-[85%]' : 'max-w-[60%] max-h-[60%]'
                    }`}
                  />
                </div>
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 group-hover:scale-110">
                  <ArrowUpRight size={16} className="text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
              <div>
                <p className="text-xs font-bold text-background/50 mb-1 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-background mb-2 group-hover:text-background/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-background/60 leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-background/10 text-background/70 text-xs font-medium rounded-md transition-colors duration-300 group-hover:bg-background/20 group-hover:text-background/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
