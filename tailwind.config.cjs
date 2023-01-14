/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        primary: '#5603AD',
        primary_muted: '#8367C7',
        accent: '#B3E9C7',
        background: '#FAF9F9'
      },
      keyframes: {
        'pop-in': {
          '0%': {transform: 'scale(0.5)' },
          '60%': {transform: 'scale(1.2)' },
          '80%': {transform: 'scale(0.9)' },
          '100%': {transform: 'scale(1)' },
        },

      },
      animation: {
        'pop-in': 'pop-in 0.3s ease-out forwards'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
