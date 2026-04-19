/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Ensure you import this in index.css
      },
      colors: {
        'theme-black': '#050505',
        'theme-gray': '#1A1A1A',
        'theme-accent-gray': '#888888',
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}