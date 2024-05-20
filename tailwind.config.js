const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    colors: {
      main: "#21BA72",
      white: "#fff",
      outline: "#e0e0e0",
      secondary: "#89909d",
      gray: "#eee",
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

