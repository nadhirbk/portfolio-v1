'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import AnimatedWords from './AnimatedWords'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Deborah Martin Services',
    category: 'Site Vitrine',
    link: 'https://www.deborah-martin-services.fr/',
    color: '#1D2532',
    logo: '/images/projects/deborah.png',
    logoSize: 'max-w-[65%] max-h-[65%]',
  },
  {
    id: 2,
    number: '02',
    title: 'Attentive Strategy',
    category: 'Site Corporate',
    link: 'https://www.attentivestrategy.com/',
    color: '#1F746D',
    logo: '/images/projects/attentive.png',
    logoSize: 'max-w-[48%] max-h-[48%]',
  },
  {
    id: 3,
    number: '03',
    title: 'Vinyfy',
    category: 'Marketplace',
    link: 'https://vinyfy-v2.vercel.app/',
    color: '#2A2830',
    logo: '/images/projects/vinyfy.svg',
    logoSize: 'max-w-[48%] max-h-[48%]',
  },
  {
    id: 4,
    number: '04',
    title: 'Projet à venir',
    category: 'Web App',
    link: '#',
    color: '#1A1A1A',
    logo: '',
    logoSize: '',
  },
  {
    id: 5,
    number: '05',
    title: 'Projet à venir',
    category: 'E-commerce',
    link: '#',
    color: '#111111',
    logo: '',
    logoSize: '',
  },
  {
    id: 6,
    number: '06',
    title: 'Projet à venir',
    category: 'Site Vitrine',
    link: '#',
    color: '#161616',
    logo: '',
    logoSize: '',
  },
]

function RollingText({ text, hovered }: { text: string; hovered: boolean }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden align-bottom mr-[0.22em]"
          style={{ paddingBottom: '0.06em', marginBottom: '-0.06em' }}
        >
          {/* exits upward */}
          <motion.span
            className="inline-block"
            animate={{ y: hovered ? '-105%' : '0%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay: i * 0.045 }}
          >
            {word}
          </motion.span>
          {/* enters from below */}
          <motion.span
            className="inline-block absolute inset-0"
            animate={{ y: hovered ? '0%' : '105%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay: i * 0.045 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}

export default function Projects() {
  const [ctaHovered, setCtaHovered] = useState(false)
  return (
    <section id="projets" className="pt-8 pb-16 md:pb-24 lg:pb-32 section-padding bg-background">

        {/* Header — outside container-max so it aligns with the nav logo */}
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/35 mb-6"
          >
            02 — Mes projets
          </motion.p>
          <h2
            className="font-black leading-[0.92] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)' }}
          >
            <AnimatedWords text={"Projets\nrécents."} delay={0.1} />
          </h2>
        </div>

      <div className="container-max">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
          {projects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="flex flex-col gap-4"
            >
              {/* Card image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl aspect-[16/10] block"
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: project.color }}
                >
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={project.title}
                      className={`object-contain ${project.logoSize} transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110`}
                    />
                  )}
                </div>
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white/30">
                  {project.number}
                </span>
                {/* Subtle dark veil on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <ArrowUpRight
                  size={16}
                  className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Text below — always visible, Lesse style */}
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="font-black text-foreground leading-tight"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.4rem)' }}
                >
                  {project.title}
                </h3>
                <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-foreground/40 shrink-0 mt-0.5">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA — Oroya style, bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-end mt-10"
        >
          <a
            href="/projets"
            className="inline-flex items-center gap-1 text-foreground font-black text-lg md:text-xl border-b-2 border-foreground pb-1"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            <RollingText text="Voir tous les projets" hovered={ctaHovered} />
            <motion.span
              animate={{ rotate: ctaHovered ? 0 : 45 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <ArrowUpRight size={20} />
            </motion.span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
