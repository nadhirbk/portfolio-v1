import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mes projets | Nadhir B.K.',
  description:
    'Découvrez mes réalisations web : sites vitrines, plateformes corporate et e-commerce. Chaque projet, une histoire unique.',
}

const projects = [
  {
    id: 1,
    slug: 'deborah-martin',
    title: 'Deborah Martin Services',
    category: 'Site Vitrine',
    context:
      "Deborah Martin accompagne des professionnels en reconversion et en développement de carrière. L'objectif : un site vitrine qui inspire confiance et reflète son expertise. Résultat : design épuré, animations subtiles et optimisation SEO poussée pour maximiser sa visibilité.",
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.deborah-martin-services.fr/',
    color: '#1D2532',
    logo: '/images/projects/deborah.png',
    logoSize: 'large' as const,
  },
  {
    id: 2,
    slug: 'attentive-strategy',
    title: 'Attentive Strategy',
    category: 'Site Corporate',
    context:
      "Attentive Strategy est une agence de conseil en stratégie d'entreprise. Le défi : créer une présence web corporate moderne alliant crédibilité et impact visuel. Architecture scalable, animations avancées et expérience utilisateur irréprochable.",
    tags: ['Next.js', 'TypeScript', 'shadcn/ui'],
    link: 'https://www.attentivestrategy.com/',
    color: '#1F746D',
    logo: '/images/projects/attentive.png',
    logoSize: 'standard' as const,
  },
  {
    id: 3,
    slug: 'vinyfy',
    title: 'Vinyfy',
    category: 'E-commerce / Marketplace',
    context:
      "Vinyfy est une marketplace dédiée aux collectionneurs et passionnés de vinyles. Le projet nécessitait un design system complet avec une identité forte, une gestion de panier fluide et l'intégration des paiements. Une plateforme e-commerce construite de A à Z.",
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    link: 'https://vinyfy-v2.vercel.app/',
    color: '#DFDEE3',
    logo: '/images/projects/vinyfy.svg',
    logoSize: 'standard' as const,
  },
]

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Back link */}
        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-background/40 hover:text-background/80 transition-colors duration-300 text-sm font-medium group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            Retour à l&apos;accueil
          </Link>
        </div>

        {/* Header */}
        <div className="pt-12 pb-16 md:pt-16 md:pb-24">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-background leading-[1] tracking-tight mb-6">
            Mes projets
          </h1>
          <p className="text-lg md:text-xl text-background/50 max-w-xl leading-relaxed">
            Une sélection de réalisations pour des clients aux besoins variés. Chaque projet,
            une histoire unique.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-16 md:mb-24" />

        {/* Projects list */}
        <div className="space-y-20 md:space-y-32 pb-24 md:pb-32">
          {projects.map((project, index) => (
            <article
              id={project.slug}
              key={project.id}
              className="scroll-mt-8 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Visual */}
                <div
                  className={`rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                  style={{ backgroundColor: project.color }}
                >
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className={`object-contain transition-transform duration-500 group-hover:scale-105 ${
                      project.logoSize === 'large'
                        ? 'max-w-[80%] max-h-[80%]'
                        : 'max-w-[55%] max-h-[55%]'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-xs font-bold text-background/40 uppercase tracking-[0.18em]">
                      {project.category}
                    </p>
                    <span className="text-background/20">·</span>
                    <p className="text-xs font-bold text-background/40 uppercase tracking-[0.18em]">
                      0{project.id}
                    </p>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-background mb-6 leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-background/60 leading-relaxed mb-8 text-base md:text-lg">
                    {project.context}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-background/8 border border-background/10 text-background/60 text-sm font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent/90 transition-colors duration-300 group/btn"
                  >
                    Voir le site
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>

              {/* Divider between projects (except last) */}
              {index < projects.length - 1 && (
                <div className="h-px bg-background/8 mt-20 md:mt-32" />
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
