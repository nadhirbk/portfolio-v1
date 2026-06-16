'use client'

import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll() {
  useEffect(() => {
    // Native scroll on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Expose for external stop/start (Process panel 04 CSS lock)
    ;(window as any).__lenis = lenis

    // Drive ScrollTrigger from Lenis virtual scroll position
    lenis.on('scroll', () => ScrollTrigger.update())

    // Single animation frame budget — GSAP ticker drives Lenis (not a competing RAF)
    const onTick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      ;(window as any).__lenis = undefined
      lenis.destroy()
    }
  }, [])

  return null
}
