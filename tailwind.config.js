/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ['var(--font-itim)', 'cursive'],
        'jockey-one': ['var(--font-jockey-one)', 'cursive'],
      },
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'float-particle-1': 'float-particle 8s ease-in-out infinite',
        'float-particle-2': 'float-particle 10s ease-in-out infinite 2s',
        'float-particle-3': 'float-particle 12s ease-in-out infinite 4s',
        'float-particle-4': 'float-particle 14s ease-in-out infinite 6s',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(0, -20px)' },
          '75%': { transform: 'translate(-10px, -10px)' },
        },
      },
    },
  },
  plugins: [],
} 