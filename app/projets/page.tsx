import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import ProjetsHeader from './ProjetsHeader'

export const metadata: Metadata = {
  title: 'Mes projets | Nadhir B.K.',
  description:
    'Découvrez mes réalisations web : sites vitrines, plateformes corporate et e-commerce.',
}

const projects = [
  {
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
    id: 2,
    title: 'Attentive Strategy',
    category: 'Site Corporate',
    context:
      "Attentive Strategy est une agence de conseil en stratégie d'entreprise. Le défi : construire une présence web corporate alliant crédibilité et impact visuel, avec une architecture scalable et des animations avancées.",
    tags: ['Next.js', 'TypeScript', 'shadcn/ui'],
    link: 'https://www.attentivestrategy.com/',
    color: '#1F746D',
    logo: '/images/projects/attentive.png',
    logoClass: 'max-w-[55%] max-h-[55%]',
  },
  {
    id: 3,
    title: 'Vinyfy',
    category: 'E-commerce / Marketplace',
    context:
      "Vinyfy est une marketplace pour les collectionneurs de vinyles. Le projet couvrait un design system complet avec une identité forte, une gestion de panier fluide et l'intégration des paiements — une plateforme e-commerce de A à Z.",
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    link: 'https://vinyfy-v2.vercel.app/',
    color: '#DFDEE3',
    logo: '/images/projects/vinyfy.svg',
    logoClass: 'max-w-[55%] max-h-[55%]',
  },
]

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-foreground section-padding">
      <Navbar />
      <div className="container-max">

        <ProjetsHeader />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20">
          {projects.map((project) => (
            <article key={project.id} className="group flex flex-col">

              {/* Thumbnail — ouvre le site */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-xl overflow-hidden aspect-[4/3] mb-4 transition-transform duration-300 group-hover:-translate-y-2"
              >
                <div className="absolute inset-0" style={{ backgroundColor: project.color }} />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className={`object-contain transition-transform duration-300 group-hover:scale-105 ${project.logoClass}`}
                  />
                </div>
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 scale-95 group-hover:scale-100">
                  <ArrowUpRight size={15} className="text-foreground" />
                </div>
              </a>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <p className="text-[10px] font-bold text-background/40 uppercase tracking-[0.15em] mb-1">
                  {project.category}
                </p>
                <h2 className="text-lg font-bold text-background mb-3 leading-snug">
                  {project.title}
                </h2>
                <p className="text-sm text-background/55 leading-relaxed mb-4 flex-1">
                  {project.context}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-background/10 text-background/60 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 text-background/60 hover:text-background text-sm font-semibold transition-colors duration-200"
                >
                  Voir le site
                  <ArrowUpRight size={14} />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  )
}
