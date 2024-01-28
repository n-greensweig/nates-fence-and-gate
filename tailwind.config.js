/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nates-dark-blue': '#102942',
        'nates-light-blue': '#0283AB'
      }
    },
  },
  plugins: [],
}

