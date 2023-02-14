/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,astro}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monserrat': ['Monserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
