/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "projects/itinerary-lib/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Calistoga: ['Calistoga', 'serif'], // Example font stack
        Gilroy: ['Questrial', 'sans-serif'], // Example font stack
      },
      colors: {
        primary: "#FE3C72 ",
        secondary: "#BDBDBD",
        tertiary: "#27242C", 
        secondaryWhite: "#eeeeee",
        grey: "#28252D",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: "300px",
        sm: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

