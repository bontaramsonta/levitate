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
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
