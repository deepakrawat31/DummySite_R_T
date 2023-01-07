/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nanum: "'Nanum Pen Script', cursive",
        unbound: "'Unbounded', cursive",
      }
    },
  },
  plugins: [],
}