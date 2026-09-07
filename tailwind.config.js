/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'theme-black': '#050505',
        'theme-gray': '#0d0d0f',
        'theme-accent-gray': '#9c9295',
        'theme-red': '#ff1f3d',
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
