import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Preloader from '@/components/Preloader'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <Projects />
      <Process />
      <div className="h-32 md:h-48 bg-background" />
      <Testimonials />
      <Contact />
    </main>
  )
}
