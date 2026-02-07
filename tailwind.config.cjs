/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        xs: ['0.9rem', { lineHeight: '1.25rem' }],
        sm: ['1.05rem', { lineHeight: '1.5rem' }],
        base: ['1.2rem', { lineHeight: '1.75rem' }],
        lg: ['1.35rem', { lineHeight: '2rem' }],
        xl: ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['1.8rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.7rem', { lineHeight: '1' }],
        '5xl': ['3.6rem', { lineHeight: '1' }],
        '6xl': ['4.5rem', { lineHeight: '1' }],
        '7xl': ['5.4rem', { lineHeight: '1' }],
        '8xl': ['7.2rem', { lineHeight: '1' }],
        '9xl': ['9.6rem', { lineHeight: '1' }],
      },
      colors: {
        luxury: {
          dark: '#0a0a0a',
          charcoal: '#141414',
          gold: '#c5a059',
          beige: '#e5e1da',
          cream: '#fcfaf7',
          muted: '#666666',
        },
      },
    },
  },
  plugins: [],
};
