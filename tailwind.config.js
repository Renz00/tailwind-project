/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        salmonRed: "#ff7647",
        salmonRedLight: "#fca98d",
        salmonRedLighter: "#ffcfbf",
        aquaBlue: "#74BDCB",
        aquaGrayishBlue: "#53818a",
        aquaDarkBlue: "#00a7c7",
        fresia: "#EFE7BC",
        veryLighGray: "#e0e0e0"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    }
  },
  plugins: [],
}