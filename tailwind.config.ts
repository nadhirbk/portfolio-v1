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
        background: '#FFFFFF',
        foreground: '#0F0F0F',
        accent: {
          DEFAULT: '#7C3AED',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#6B6B6B',
          foreground: '#6B6B6B',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F0F0F',
        },
        primary: {
          DEFAULT: '#0F0F0F',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F8F8F8',
          foreground: '#0F0F0F',
        },
        destructive: {
          DEFAULT: '#FF6B6B',
          foreground: '#F6F2EE',
        },
        border: 'rgba(15, 15, 15, 0.08)',
        input: 'rgba(10, 10, 10, 0.1)',
        ring: '#6466F1',
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
      },
    },
  },
  plugins: [],
}

export default config
