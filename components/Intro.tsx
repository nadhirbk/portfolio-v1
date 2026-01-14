'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Intro() {
  const [displayText, setDisplayText] = useState('')
  const beforeName = "Hello, moi c'est "
  const name = 'Nadhir'
  const fullText = beforeName + name
  const [showUnderline, setShowUnderline] = useState(false)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setShowUnderline(true)
        setTimeout(() => setIsTypingComplete(true), 400)
      }
    }, 70)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{
        y: '-100%',
      }}
      transition={{
        duration: 1,
        ease: [0.68, -0.55, 0.265, 1.55],
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />

      <div className="text-center relative z-10 px-6">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {displayText.length < fullText.length ? (
            <span className="relative inline-block">
              {displayText}
              {/* Cursor */}
              <motion.span
                className="inline-block w-[3px] md:w-1 h-[1em] bg-accent ml-1 align-middle"
                animate={{ opacity: 1 }}
              />
            </span>
          ) : (
            <span className="relative inline-block">
              {beforeName}
              <span className="relative inline-block">
                {name}
                {/* Premier trait sous Nadhir */}
                {showUnderline && (
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 md:h-1.5 bg-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
                {/* Deuxième trait sous Nadhir */}
                {showUnderline && (
                  <motion.span
                    className="absolute -bottom-4 md:-bottom-5 left-0 h-1 md:h-1.5 bg-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </span>
            </span>
          )}
        </motion.h1>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      />
    </motion.div>
  )
}
