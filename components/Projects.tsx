'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Deborah Martin Services',
    category: 'Site Vitrine',
    description:
      'Site vitrine élégant pour une professionnelle du coaching. Design épuré, animations subtiles et optimisation SEO.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.deborah-martin-services.fr/',
    color: '#6466F1',
  },
  {
    id: 2,
    title: 'Attentive Strategy',
    category: 'Site Corporate',
    description:
      "Plateforme corporate moderne avec animations avancées et architecture scalable. Focus sur l'expérience utilisateur.",
    tags: ['Next.js', 'TypeScript', 'shadcn/ui'],
    link: 'https://www.attentivestrategy.com/',
    color: '#00D4AA',
  },
  {
    id: 3,
    title: 'Vinyfy',
    category: 'E-commerce / Marketplace',
    description:
      'Marketplace de vinyles avec identité visuelle forte. Design system complet, gestion de panier et paiements intégrés.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    link: 'https://vinyfy-v2.vercel.app/',
    color: '#FF6B6B',
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
    <section id="projects" className="section-spacing section-padding bg-foreground">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              {/* Image Container - Using colored placeholder */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]"
                style={{ backgroundColor: `${project.color}15` }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-6xl md:text-8xl font-black opacity-20"
                    style={{ color: project.color }}
                  >
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Decorative elements */}
                <div
                  className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-30"
                  style={{ backgroundColor: project.color }}
                />
                <div
                  className="absolute bottom-8 right-8 w-24 h-24 rounded-full opacity-20"
                  style={{ backgroundColor: project.color }}
                />

                {/* Overlay gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, ${project.color}90, transparent)` }}
                />

                {/* Link button */}
                <motion.div
                  className="absolute top-4 right-4 bg-background p-3 rounded-full opacity-0 group-hover:opacity-100 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={20} className="text-foreground" />
                </motion.div>

                {/* Project title overlay on mobile */}
                <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                  <span className="text-sm font-bold text-foreground/70 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </motion.a>

              {/* Content */}
              <div>
                <p className="text-sm font-bold text-background/60 mb-2 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-background mb-3 group-hover:text-background/70 transition-colors duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {project.title}
                    <ExternalLink
                      size={20}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </h3>
                <p className="text-background/60 mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-background/10 text-background/80 text-sm font-medium rounded-full hover:bg-background/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA - Vinyfy en cours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 bg-accent/5 rounded-2xl border border-accent/20"
        >
          <p className="text-center text-lg text-muted">
            <strong className="text-foreground">Vinyfy</strong> est actuellement en développement.
            Une marketplace de vinyles avec une DA bien marquée arrive bientôt !
          </p>
        </motion.div>
      </div>
    </section>
  )
}
