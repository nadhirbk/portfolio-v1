import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0EBE1',
        foreground: '#0D0B09',
        accent: {
          DEFAULT: '#2D6A4F',
          foreground: '#F0EBE1',
        },
        muted: {
          DEFAULT: '#8A8178',
          foreground: '#8A8178',
        },
        card: {
          DEFAULT: '#E8E1D6',
          foreground: '#0D0B09',
        },
        primary: {
          DEFAULT: '#0D0B09',
          foreground: '#F0EBE1',
        },
        secondary: {
          DEFAULT: '#E6DFD4',
          foreground: '#0D0B09',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#F0EBE1',
        },
        border: 'rgba(13, 11, 9, 0.1)',
        input: 'rgba(13, 11, 9, 0.07)',
        ring: '#2D6A4F',
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'marquee': 'marqueeScroll 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
