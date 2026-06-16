'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import AnimatedWords from './AnimatedWords'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    titleLight: 'Écoute &',
    titleBold: 'Stratégie',
    description: `Brief approfondi, analyse de votre audience et de votre concurrence. Je ne me contente pas d'exécuter — je propose, je questionne, je challenge.`,
  },
  {
    number: '02',
    titleLight: 'Design &',
    titleBold: 'Prototypage',
    description: `Maquettes interactives et choix visuels clairs. Vous visualisez le résultat avant la première ligne de code. On itère jusqu'à ce que ce soit juste.`,
  },
  {
    number: '03',
    titleLight: 'Le code',
    titleBold: 'prend forme.',
    description: `Code propre, performant et maintenable. Chaque étape est déployée en preview — vous suivez l'avancement et validez au fil de l'eau, sans surprise.`,
  },
  {
    number: '04',
    titleLight: 'Lancement',
    titleBold: '& Suivi',
    description: `Mise en ligne soignée, formation à la prise en main, accompagnement post-lancement. Je reste disponible pour faire évoluer votre site.`,
  },
]

const PANEL_COUNT = steps.length + 1 // 5
const PAD = 'px-4 md:px-12 lg:px-24 xl:px-32 pt-8 pb-12 md:pt-10 md:pb-16'
const DWELL = 2 // multiples of vh

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Panel 04 animation targets — direct refs, no class selector ambiguity
  const lpTlRef = useRef<HTMLDivElement>(null)
  const lpTbRef = useRef<HTMLDivElement>(null)
  const lpDescRef = useRef<HTMLParagraphElement>(null)
  const lastPanelAnimRef = useRef(false)

  useGSAP(() => {
    const track = trackRef.current
    const container = containerRef.current
    if (!track || !container) return

    // Hide panel 04 title elements before animation
    gsap.set([lpTlRef.current, lpTbRef.current, lpDescRef.current], { y: 90, opacity: 0 })

    gsap.to(track, {
      x: () => -(track.offsetWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: (value: number) => {
            const hDist = track.offsetWidth - window.innerWidth
            const dwell = window.innerHeight * DWELL
            const panelFraction = hDist / (hDist + dwell)
            const step = panelFraction / (PANEL_COUNT - 1)
            const positions = Array.from({ length: PANEL_COUNT }, (_, i) => i * step)
            return positions.reduce((a, b) =>
              Math.abs(b - value) < Math.abs(a - value) ? b : a
            )
          },
          duration: { min: 0.4, max: 0.8 },
          ease: 'power2.inOut',
          delay: 0.3,
        },
        end: () => `+=${track.offsetWidth - window.innerWidth + window.innerHeight * DWELL}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const hDist = track.offsetWidth - window.innerWidth
          const dwell = window.innerHeight * DWELL
          const panelFraction = hDist / (hDist + dwell)
          // last snap point is at panelFraction (all horizontal travel complete)
          const threshold = panelFraction - 0.015

          if (!lastPanelAnimRef.current && self.progress >= threshold) {
            lastPanelAnimRef.current = true

            gsap.timeline({ defaults: { ease: 'power4.out' } })
              .to(lpTlRef.current, { y: 0, opacity: 1, duration: 0.7 }, 0.04)
              .to(lpTbRef.current, { y: 0, opacity: 1, duration: 0.7 }, 0.2)
              .to(lpDescRef.current, { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' }, 0.58)
          }

          // Reset on scroll back
          if (lastPanelAnimRef.current && self.progress < threshold - 0.06) {
            lastPanelAnimRef.current = false
            gsap.set([lpTlRef.current, lpTbRef.current, lpDescRef.current], { y: 90, opacity: 0 })
          }
        },
      },
    })
  }, { scope: containerRef })

  return (
    <section id="process" className="bg-background">
      <div ref={containerRef} className="overflow-hidden">

        <div ref={trackRef} className="flex" style={{ width: `${PANEL_COUNT * 100}vw` }}>

          {/* ── Panel 0 : intro ── */}
          <div className={`relative flex flex-col w-screen h-screen ${PAD}`}>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/35">
              03 — Mon approche
            </p>

            <div className="flex-1 flex flex-col justify-center">
              <h2
                className="font-black leading-[0.92] tracking-tight text-foreground"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)' }}
              >
                <AnimatedWords text={"Comment\nje travaille."} delay={0} />
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-foreground/40 text-base leading-relaxed max-w-xs mt-6"
              >
                {`Un process en 4 étapes, de l'idée au lancement.`}
              </motion.p>
            </div>

            <div className="absolute right-[22%] top-1/2 -translate-y-1/2">
              <span className="text-xl font-black text-accent">
                {`(pssst, c'est par ici →)`}
              </span>
            </div>
          </div>

          {/* ── Panels 1–4 : steps ── */}
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1
            return (
              <div
                key={step.number}
                className={`relative flex flex-col justify-between overflow-hidden w-screen h-screen ${PAD}`}
              >
                {/* Decorative background number */}
                <span
                  className="absolute right-[-2vw] bottom-[-4vh] font-black text-foreground/[0.04] select-none pointer-events-none leading-none"
                  style={{ fontSize: 'clamp(18rem, 34vw, 46rem)' }}
                >
                  {step.number}
                </span>

                {/* Top label */}
                <div className="flex items-start justify-between relative z-10">
                  <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-foreground/30">
                    03 — Mon approche
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-black text-foreground/25">{step.number}</span>
                    <span className="text-[11px] text-foreground/15">/ {String(steps.length).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="relative z-10">
                  <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-accent/60 mb-5">
                    {step.number}
                  </p>

                  <div style={{ fontSize: 'clamp(3.8rem, 10vw, 13rem)', lineHeight: 0.88, letterSpacing: '-0.02em' }}>
                    {step.titleLight && (
                      isLast ? (
                        <div className="overflow-hidden">
                          <div ref={lpTlRef} className="font-light text-foreground">{step.titleLight}</div>
                        </div>
                      ) : (
                        <div className="font-light text-foreground">{step.titleLight}</div>
                      )
                    )}
                    {isLast ? (
                      <div className="overflow-hidden">
                        <div ref={lpTbRef} className="font-black text-foreground">{step.titleBold}</div>
                      </div>
                    ) : (
                      <div className="font-black text-foreground">{step.titleBold}</div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  {isLast ? (
                    <p ref={lpDescRef} className="text-foreground/45 text-[15px] leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  ) : (
                    <p className="text-foreground/45 text-[15px] leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  )}
                </div>

                {/* Vertical divider between panels */}
                {!isLast && (
                  <div className="absolute right-0 top-[20%] h-[60%] w-px bg-foreground/[0.07]" />
                )}
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
