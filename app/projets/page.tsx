import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ProjetsGrid from './ProjetsGrid'

export const metadata: Metadata = {
  title: 'Mes projets | Nadhir B.K.',
  description:
    'Découvrez mes réalisations web : sites vitrines, plateformes corporate et e-commerce.',
}

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-foreground">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
        <header className="pt-10 pb-12 md:pt-14 md:pb-16">
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

        <ProjetsGrid />
      </div>
    </main>
  )
}
