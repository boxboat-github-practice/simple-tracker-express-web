/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: {
        100: '#97c9eb',
        200: '#83c8ee',
        300: '#327cb7',
        400: '#1e5481',
      },
      black: colors.black,
      white: colors.white,
      teal: '#4ed8d0',
      gray: colors.gray,
      slate: colors.slate,
      red: colors.red,
      rose: colors.rose,
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
}
