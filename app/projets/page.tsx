import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mes projets | Nadhir B.K.',
  description:
    'Découvrez mes réalisations web : sites vitrines, plateformes corporate et e-commerce.',
}

const projects = [
  {
    id: 1,
    slug: 'deborah-martin',
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
    slug: 'attentive-strategy',
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
    id: 3,
    slug: 'vinyfy',
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

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-foreground">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Header */}
        <header className="pt-10 pb-14 md:pt-14 md:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-background/40 hover:text-background/70 transition-colors text-sm font-medium mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Retour
          </Link>
          <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-background leading-none tracking-tight mb-4">
            Mes projets
          </h1>
          <p className="text-base md:text-lg text-background/50 max-w-md">
            Trois réalisations récentes pour des clients aux besoins variés.
          </p>
        </header>

        {/* Projects */}
        <div className="divide-y divide-background/10 pb-20">
          {projects.map((project) => (
            <article
              id={project.slug}
              key={project.id}
              className="py-12 md:py-16 scroll-mt-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Visual */}
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
                  style={{ backgroundColor: project.color }}
                >
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className={`object-contain ${project.logoClass}`}
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold text-background/40 uppercase tracking-[0.15em]">
                      {project.category}
                    </span>
                    <span className="text-background/20">·</span>
                    <span className="text-[11px] font-bold text-background/30 uppercase tracking-[0.15em]">
                      0{project.id}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-background mb-4 leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-background/55 leading-relaxed mb-6 text-sm md:text-base">
                    {project.context}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background/10 text-background/60 text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
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
            </article>
          ))}
        </div>

      </div>
    </main>
  )
}
