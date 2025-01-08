/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      colors: {
        primary: "#34D399",
        primarylight: "#eaeaea",
        secondarylight: "#D9D9D9",
        primarydark: "#082F49",
        secondarydark: "#475569",
        white: "#EAEAEA",
        black: "#333333",
        dark: "#082F49",
      },
      fontFamily: {
        italianno: ["Italianno", "serif"],
      },
    },
  },
  plugins: [],
};
