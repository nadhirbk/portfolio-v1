import { satoshi } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nadhir B.K. — Créateur Web',
  description:
    'Je transforme vos idées en sites web puissants et élégants. Web Designer & Développeur basé en France.',
  keywords: ['web design', 'développeur web', 'créateur digital', 'portfolio', 'Nadhir BK'],
  authors: [{ name: 'Nadhir Ben Khaled' }],
  openGraph: {
    title: 'Nadhir B.K. — Créateur Web',
    description: 'Je transforme vos idées en sites web puissants et élégants.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={satoshi.variable}>
      <body className="font-satoshi antialiased">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  )
}
