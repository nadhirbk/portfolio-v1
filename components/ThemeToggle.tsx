'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-8 left-8 w-14 h-14 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 flex items-center justify-center z-[100] hover:bg-foreground/20 transition-colors shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {theme === 'dark' ? (
          <Sun size={24} className="text-background" />
        ) : (
          <Moon size={24} className="text-foreground" />
        )}
      </motion.div>
    </motion.button>
  )
}
