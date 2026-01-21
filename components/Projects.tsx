'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
    logo: '/images/projects/deborah-logo.svg', // À ajouter
    image: '/images/projects/deborah-screenshot.jpg', // À ajouter
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

  return (
    <section id="projects" className="section-spacing section-padding bg-foreground relative z-10">
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
            Projets récents
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto leading-relaxed">
            Une sélection de sites web créés pour des clients aux besoins variés. Chaque projet
            raconte une histoire unique.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.article key={project.id} variants={itemVariants} className="group">
              {/* Image Container */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-xl mb-4 aspect-[4/3]"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Background coloré */}
                <div className="absolute inset-0" style={{ backgroundColor: project.color }} />

                {/* Logo (reste visible) */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="max-w-[60%] max-h-[60%] object-contain"
                  />
                </div>

                {/* External link icon */}
                <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <ArrowUpRight size={16} className="text-foreground" />
                </div>
              </motion.a>

              {/* Content */}
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

                {/* Tags */}
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
          ))}
        </motion.div>
      </div>
    </section>
  )
}
