'use client'

const ITEMS = [
  'DESIGN',
  'DÉVELOPPEMENT',
  'PERFORMANCE',
  'RÉSULTATS',
  'UX / UI',
  'NEXT.JS',
  'ANIMATIONS',
  'SEO',
  'CONVERSION',
]

const text = ITEMS.join('  ·  ') + '  ·  '

export default function Marquee() {
  return (
    <div className="border-y border-foreground/10 overflow-hidden py-5 bg-background">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Two identical copies for seamless loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="flex-shrink-0 text-[11px] font-bold tracking-[0.3em] text-foreground/25 uppercase"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
