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
      },
      backgroundImage: {
        'hero': "url('../public/images/cedar/craftsman/hero1.jpeg')",
      },
      brightness: {
        40: '.40',
      },
      height: {
        '50vh': 'height: 50vh'
      },
      keyframes: {
        'bounce-fast': { 
          '0%, 100%':{ transform: 'translatey(-0.25rem)'},
          '50%':{ transform: 'translatey(1rem)'}
        }
      },
      animation: {
        'bounce-fast':'bounce-fast 1s ease-in infinite'
      }
    },
  },
  plugins: [],
}

