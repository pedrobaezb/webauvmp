/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'monserrat': ['Monserrat', 'sans-serif']
      },      
    },
  },
  plugins: [],
};

module.exports = config;
