import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import { satoshi } from '@/lib/fonts'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nadhir B.K. — Créateur Web',
  description:
    'Je transforme vos idées en sites web puissants et élégants. Web Designer & Développeur basé en France.',
  keywords: ['web design', 'développeur web', 'créateur digital', 'portfolio', 'Nadhir BK'],
  authors: [{ name: 'Nadhir Ben Khaled' }],
  metadataBase: new URL('https://portfolio-nadhirbk.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nadhir B.K. — Créateur Web',
    description:
      'Je transforme vos idées en sites web puissants et élégants. Découvrez mon portfolio.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portfolio-nadhirbk.vercel.app',
    siteName: 'Nadhir B.K. Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nadhir B.K. — Créateur Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nadhir B.K. — Créateur Web',
    description: 'Je crée des sites web qui marquent.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <CustomCursor />
        <ScrollProgress />
        <Toaster position="bottom-right" richColors />
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  )
}
