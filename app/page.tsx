'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-foreground">
      <Hero />
      <Projects />
      <Process />
      <Testimonials />
      <About />
      <Contact />
    </main>
  )
}
