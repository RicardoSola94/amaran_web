import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#d42b2b',
        'brand-red-dark': '#b01f1f',
        'brand-black': '#0a0a0a',
        'brand-white': '#f8f7f5',
        'brand-gray-100': '#f0efed',
        'brand-gray-200': '#e2e0dc',
        'brand-gray-400': '#9e9b95',
        'brand-gray-600': '#5a5752',
        'brand-gray-800': '#2a2926',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
