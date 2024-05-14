const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    colors: {
      main: "#26325c",
      white: "#fff",
      outline: "#e0e0e0"
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

