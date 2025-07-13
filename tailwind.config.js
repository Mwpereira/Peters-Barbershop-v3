/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'barbershop': {
          'green': '#4a7c59',
          'green-light': '#6b8e65',
          'green-dark': '#2d4a33',
          'dark': '#1a1a1a',
          'grey': '#2d2d2d',
          'grey-light': '#4a4a4a',
        }
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'Playfair Display', 'serif'],
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-playfair)', 'Playfair Display', 'serif'],
        'body': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'script': ['var(--font-dancing-script)', 'Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
} 