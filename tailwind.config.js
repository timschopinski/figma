/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3E',
          light:   '#1A2D5A',
          dark:    '#080F22',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#DFC278',
          dark:    '#A8863A',
        },
        cream: {
          DEFAULT: '#F8F5EF',
          dark:    '#EDE8DE',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
