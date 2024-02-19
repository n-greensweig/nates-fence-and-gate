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
        // Landing page heroes
        "3xl-hero-landing":
          "url('../public/images/cedar/craftsman/3xl-hero1.jpeg')",
        "xl-hero-landing":
          "url('../public/images/cedar/craftsman/xl-hero1.jpeg')",
        "xs-hero-landing":
          "url('../public/images/mobile-heros/mobile-hero-lp-sm.jpeg')",
          // Fence types page heroes
          "3xl-hero-fence-types": "url('../public/images/vinyl/3xl-hero2.jpg')",
          "xl-hero-fence-types": "url('../public/images/vinyl/xl-hero2.jpg')",
          "xs-hero-fence-types":
          "url('../public/images/mobile-heros/mobile-hero-lp.jpeg')",
            // "url('../public/images/mobile-heros/mobile-hero-fence-types.jpeg')",
        // About page heroes
        "3xl-hero-about": "url('../public/images/ornamental/3xl-hero3.jpg')",
        "xl-hero-about": "url('../public/images/ornamental/xl-hero3.jpg')",
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
        xs: "350px",

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
