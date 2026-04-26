/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '96rem',
      },
    },
  },
  plugins: [],
}
