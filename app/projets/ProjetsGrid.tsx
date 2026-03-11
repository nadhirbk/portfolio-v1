'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    slug: 'deborah-martin',
    id: 1,
    title: 'Deborah Martin Services',
    category: 'Site Vitrine',
    context:
      "Deborah Martin accompagne des professionnels en reconversion et développement de carrière. L'objectif était de créer un site vitrine inspirant confiance, avec un design épuré, des animations subtiles et une optimisation SEO poussée pour maximiser sa visibilité.",
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.deborah-martin-services.fr/',
    color: '#1D2532',
    logo: '/images/projects/deborah.png',
    logoClass: 'max-w-[80%] max-h-[80%]',
  },
  {
    slug: 'attentive-strategy',
    id: 2,
    title: 'Attentive Strategy',
    category: 'Site Corporate',
    context:
      "Attentive Strategy est une agence de conseil en stratégie d'entreprise. Le défi : construire une présence web corporate moderne alliant crédibilité et impact visuel, avec une architecture scalable et des animations avancées.",
    tags: ['Next.js', 'TypeScript', 'shadcn/ui'],
    link: 'https://www.attentivestrategy.com/',
    color: '#1F746D',
    logo: '/images/projects/attentive.png',
    logoClass: 'max-w-[55%] max-h-[55%]',
  },
  {
    slug: 'vinyfy',
    id: 3,
    title: 'Vinyfy',
    category: 'E-commerce / Marketplace',
    context:
      "Vinyfy est une marketplace pour les collectionneurs de vinyles. Le projet couvrait un design system complet avec une identité forte, une gestion de panier fluide et l'intégration des paiements — une plateforme e-commerce construite de A à Z.",
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    link: 'https://vinyfy-v2.vercel.app/',
    color: '#DFDEE3',
    logo: '/images/projects/vinyfy.svg',
    logoClass: 'max-w-[55%] max-h-[55%]',
  },
]

export default function ProjetsGrid() {
  const [selected, setSelected] = useState<string | null>(null)
  const selectedProject = projects.find((p) => p.slug === selected) ?? null

  const toggle = (slug: string) => {
    setSelected((prev) => (prev === slug ? null : slug))
  }

  return (
    <div className="pb-20">
      {/* Grid de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {projects.map((project) => {
          const isSelected = selected === project.slug
          return (
            <motion.button
              key={project.slug}
              onClick={() => toggle(project.slug)}
              className={`text-left group rounded-2xl overflow-hidden transition-shadow duration-300 ${
                isSelected ? 'ring-2 ring-accent ring-offset-2 ring-offset-foreground' : ''
              }`}
              whileHover={{ y: isSelected ? 0 : -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Visual */}
              <div
                className="relative aspect-[4/3] flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className={`object-contain transition-transform duration-300 group-hover:scale-105 ${project.logoClass}`}
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-accent/10 pointer-events-none" />
                )}
              </div>

              {/* Card info */}
              <div className="px-4 py-3 bg-background/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-background/40 uppercase tracking-wider mb-0.5">
                    {project.category}
                  </p>
                  <h3 className="text-sm font-bold text-background">{project.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: isSelected ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="ml-3 shrink-0"
                >
                  <ChevronDown size={15} className="text-background/40" />
                </motion.div>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Collapser */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {selectedProject && (
                <motion.div
                  key={selectedProject.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 rounded-2xl bg-background/5 border border-background/[0.08] p-6 md:p-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Visual */}
                    <div
                      className="rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center"
                      style={{ backgroundColor: selectedProject.color }}
                    >
                      <img
                        src={selectedProject.logo}
                        alt={`${selectedProject.title} logo`}
                        className={`object-contain ${selectedProject.logoClass}`}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-[11px] font-bold text-background/40 uppercase tracking-[0.15em] mb-1">
                            {selectedProject.category}
                          </p>
                          <h2 className="text-2xl md:text-3xl font-black text-background leading-tight">
                            {selectedProject.title}
                          </h2>
                        </div>
                        <button
                          onClick={() => setSelected(null)}
                          className="p-1.5 text-background/30 hover:text-background/70 transition-colors shrink-0 ml-4"
                          aria-label="Fermer"
                        >
                          <X size={18} />
                        </button>
                      </div>

                      <p className="text-background/55 leading-relaxed mb-6 text-sm md:text-base">
                        {selectedProject.context}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-background/10 text-background/60 text-xs font-medium rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent/90 transition-colors group/btn"
                      >
                        Voir le site
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
