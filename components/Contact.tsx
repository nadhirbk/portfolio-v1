'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Intégrer avec un service d'email (Resend, SendGrid, etc.)
    console.log('Form submitted:', formData)
    alert('Merci ! Je vous répondrai très vite.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:contact@nadhirbk.com',
      label: 'Envoyer un email',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/nadhirbk',
      label: 'Profil LinkedIn',
      external: true,
    },
    {
      icon: Github,
      href: 'https://github.com/nadhirbk',
      label: 'Profil GitHub',
      external: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  }

  return (
    <section id="contact" className="section-spacing section-padding bg-foreground text-background">
      <div className="container-max">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-background"
          >
            Travaillons ensemble
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-background/70 max-w-3xl leading-relaxed"
          >
            Un projet en tête ? Une question ? N'hésitez pas à me contacter. Je réponds généralement
            sous 24h.
          </motion.p>
        </motion.div>

        {/* Grid 2 colonnes : Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Colonne gauche : Formulaire */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-background">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-6 py-4 bg-background/10 border-2 border-background/20 rounded-xl text-background placeholder:text-background/50 focus:outline-none focus:border-background focus:bg-background/15 transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-background">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-6 py-4 bg-background/10 border-2 border-background/20 rounded-xl text-background placeholder:text-background/50 focus:outline-none focus:border-background focus:bg-background/15 transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-sm font-bold mb-2 text-background">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={6}
                className="w-full px-6 py-4 bg-background/10 border-2 border-background/20 rounded-xl text-background placeholder:text-background/50 focus:outline-none focus:border-background focus:bg-background/15 transition-all duration-300 resize-none"
                placeholder="Parlez-moi de votre projet..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-background text-foreground px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 group"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Envoyer le message
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Send size={20} />
              </motion.span>
            </motion.button>
          </motion.form>

          {/* Colonne droite : Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Texte d'accroche */}
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                Envie de créer quelque chose d'incroyable ?
              </h3>
              <p className="text-background/70 leading-relaxed">
                Que ce soit pour un site vitrine, une refonte complète ou un projet sur-mesure, je
                suis là pour transformer vos idées en réalité digitale.
              </p>
            </div>

            {/* Infos pratiques */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-bold mb-1 text-background">Email</p>
                  <a
                    href="mailto:contact@nadhirbk.com"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    contact@nadhirbk.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⏱️</span>
                </div>
                <div>
                  <p className="font-bold mb-1 text-background">Réponse sous</p>
                  <p className="text-background/70">24 heures maximum</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="font-bold mb-1 text-background">Disponibilité</p>
                  <p className="text-background/70">Ouvert aux nouveaux projets</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-bold mb-4 text-background">Retrouvez-moi sur</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                      className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-background hover:bg-background hover:text-foreground transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-background/20 text-center text-background/50 text-sm"
        >
          <p>© 2025 Nadhir B.K. — Tous droits réservés</p>
          <p className="mt-2">Créé avec Next.js, Tailwind CSS & Framer Motion</p>
        </motion.div>
      </div>
    </section>
  )
}
