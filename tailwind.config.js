/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
        primary: "#0d9488",
        primarydark: "#2dd4bf",
        secondary: "#f1f5f9",
        dark: "#475569",
      },
    },
  },
  plugins: [],
};
