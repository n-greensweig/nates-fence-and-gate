/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nates-dark-blue": "#102942",
        "nates-light-blue": "#0283AB",
      },
      backgroundImage: {
        "3xl-hero-landing":
          "url('../public/images/cedar/craftsman/3xl-hero1.jpeg')",
        "xl-hero-landing":
          "url('../public/images/cedar/craftsman/xl-hero1.jpeg')",
        "3xl-hero-fence-types": "url('../public/images/vinyl/hero2.jpg')",
        "xl-hero-fence-types": "url('../public/images/vinyl/xl-hero2.jpg')",
      },
      brightness: {
        40: ".40",
      },
      height: {},
      keyframes: {
        "bounce-fast": {
          "0%, 100%": { transform: "translatey(-0.25rem)" },
          "50%": { transform: "translatey(1rem)" },
        },
      },
      animation: {
        "bounce-fast": "bounce-fast 1s ease-in infinite",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
