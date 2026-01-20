'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-foreground/10 z-50 hidden lg:block"
      style={{ originY: 0 }}
    >
      <motion.div className="w-full bg-foreground origin-top" style={{ scaleY }} />
    </motion.div>
  )
}
